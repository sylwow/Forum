import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  spinner = false;
  offset = 0;
  end = false;
  posts: Post[] = [];
  constructor(private post$: PostsService) { }
  
  ngOnInit(): void {
    this.getMorePosts();
  }
    
  @HostListener("window:scroll", [])
  onScroll(): void {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
     if(pos == max && !this.end)   {
     //Do your action here
       this.spinner = true;
       this.getMorePosts();
     }
  }

  getMorePosts(){
    this.spinner = true;
    this.post$.getPosts(this.offset).subscribe(
      {
        next: res => {
          this.spinner = false;
          this.offset++;
          if (res.length == 0) {
            this.end = true;
          }
          this.posts = this.posts.concat(res);
        },
        error: error => {
          console.log(error);
          this.spinner = false;
        } 
      }
    )
  }
}
