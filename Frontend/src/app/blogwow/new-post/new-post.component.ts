import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ForumService } from '../../services/posts.service';
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
  constructor(private _ngZone: NgZone, private posts$: ForumService, private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  Post(message: string) {
    let ff = message.split(/\r\n|\r|\n/);
    let mesgSplitted = JSON.stringify(ff);
    let mediaJson = JSON.stringify(this.media);
    this.posts$.postMessage(1, mesgSplitted, mediaJson).subscribe({
      error: e => console.log(e)
    })
  }

  Cancel() {
    console.log("cancel");
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
