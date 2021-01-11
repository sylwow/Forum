import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ForumService } from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  maxMessageLen = 3000;
  constructor(private _ngZone: NgZone, private posts$: ForumService) {}

  ngOnInit(): void {
  }

  Post(message: string) {
    this.posts$.postMessage(1, message).subscribe({
      error: e => console.log(e)
    })
  }

  Cancel() {
    console.log("cancel");
  }
}
