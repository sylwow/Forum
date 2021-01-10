import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  maxMessageLen = 3000;
  constructor(private _ngZone: NgZone, private posts$: PostsService) {}

  ngOnInit(): void {
  }

  Post(message: string) {
    this.posts$.postMessage(12, message).subscribe({
      error: e => console.log(e)
    })
  }

  Cancel() {
    console.log("cancel");
  }
}
