import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Classes/Post';
import { ForumService } from 'src/app/services/forum.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  currentColor = 'white';
  bumped = false;
  spinner = false;
  offset = 0;
  end = false;
  posts: Post[] = [];
  constructor(
    private post$: ForumService,
    private user$: UserService) { }
  
  ngOnInit(): void {
    this.getMorePosts();
  }
    
  @HostListener("window:scroll", [])
  onScroll(): void {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
     if(pos == max && !this.end)   {
       this.spinner = true;
       this.getMorePosts();
     }
  }

  getMorePosts(){
    this.spinner = true;
    let userId = this.user$.user?.userId ?? -1; 
    this.post$.getPosts(this.offset, userId).subscribe(
      {
        next: res => {
          this.spinner = false;
          this.offset++;
          if (res.length == 0) {
            this.end = true;
          }
          res.forEach( val => {
            val.message = JSON.parse(val.message as unknown as string);
            val.media = JSON.parse(val.media as unknown as string);
          })
          this.posts = this.posts.concat(res);
        },
        error: error => {
          console.log(error);
          this.spinner = false;
        } 
      }
    )
  }

  getHoursDiff(dateStr: string): number {
    let date = new Date(dateStr);
    let current = Date.now();
    let diff = current - date.getTime();
    let hoursDiff = diff / (3600 * 1000);
    return Math.floor(hoursDiff);
  }

  getavatarPath(post: Post): string {
    return `${this.post$.getApiDataUrl()}/${post.avatarFilePath}`;
  }

  bump(post: Post) {
    if(!post.bumpedByYou) {
      this.post$.bumpRate(post.id, this.user$.user.userId).subscribe( res => {
        if(res) {
          post.rate++;
          post.bumpedByYou = true;
        }
      })
    } else {
      this.post$.deBumpRate(post.id, 1).subscribe( res => {
        if(res) {
          post.rate--;
          post.bumpedByYou = false;
        }
      })
    }
  }

  getComments(post: Post) {
    if(post.commentList) {
      post.commentList = null;
      return;
    }
    this.post$.getComments(post.id, 1).subscribe( {
      next: res => {
        if (res && res.length > 0) {
          res.forEach( val => {
            val.message = JSON.parse(val.message as unknown as string);
            val.media = JSON.parse(val.media as unknown as string);
          })
          post.commentList = res;
        }
      },
      error: error => {
        console.log(error);
      } 
    });
  }
}
