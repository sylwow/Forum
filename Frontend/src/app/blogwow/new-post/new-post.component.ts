import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  maxMessageLen = 3000;
  constructor(private _ngZone: NgZone) {}

  ngOnInit(): void {
  }

  Post(message: string) {
    console.log("post");
  }

  Cancel() {
    console.log("cancel");
  }
}
