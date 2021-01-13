import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Classes/Post';
import { User } from '../Classes/User';


@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl = '/api/Forum';
  private apiData = '/api/Data';
  constructor(private http: HttpClient) { }

  postMessage(userId: number, message: string, media: string) {
    let body = {
      userId: userId,
      message: message,
      media: media
    };
    return this.http.post(this.apiUrl, body);
  }
  
  getPosts(offset: number, userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/${offset}/${userId}`);
  }

  tryLogin(username: string, password: string){
    let body = {
      username: username,
      password: password
    };
    return this.http.post<User>(`${this.apiUrl}/Login`, body );
  }

  getApiUrl(): string {
    return this.apiUrl
  }

  getApiDataUrl(): string {
    return this.apiData;
  }

  bumpRate(postId: number, userId: number) {
    return this.http.get<User>(`${this.apiUrl}/BumpRate/${postId}/${userId}`);
  }

  deBumpRate(postId: number, userId: number) {
    return this.http.get<User>(`${this.apiUrl}/DeBumpRate/${postId}/${userId}`);
  }
}
