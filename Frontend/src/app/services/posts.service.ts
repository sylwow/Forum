import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Classes/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = '/api/Posts';
  constructor(private http: HttpClient) { }

  postMessage(userId: number, message: string) {
    let body = {
      userId: userId,
      message: message
    };
    return this.http.post(this.apiUrl, body);
  }
  
  getPosts(offset: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/${offset}`);
  }
}
