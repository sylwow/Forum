import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { Post } from 'src/app/Classes/Post';
import { UserService } from 'src/app/services/user.service';
import { ForumService } from '../../services/forum.service';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  focused = false;
  maxMessageLen = 3000;
  media: string[] = [];
  loggedIn = this.user$.user;
  @Input("ParentPost") parentPost: Post;
  constructor(
    private _ngZone: NgZone, 
    private posts$: ForumService, 
    private dialog: MatDialog, 
    private user$: UserService) {}

  ngOnInit(): void {
  }

  Post(message: string) {
    let ff = message.split(/\r\n|\r|\n/);
    let mesgSplitted = JSON.stringify(ff);
    let mediaJson = JSON.stringify(this.media);
    if(this.user$.user) {
      this.posts$.postMessage(this.user$.user.userId, mesgSplitted, mediaJson, this.parentPost?.id).subscribe({
        error: e => console.log(e)
      })
    }
  }

  Cancel() {
    if( this.parentPost) {
      this.parentPost.tryComment = false;
    }
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  insertImage() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {}
    dialogConfig.minWidth = 400;
    
    const dialogRef = this.dialog.open(MediaDialogComponent, dialogConfig);

    
    dialogRef.afterClosed().subscribe(
      data => this.addUrl(data)
  );
  }

  addUrl(url: string) {
    this.media.push(url);
  }
}
