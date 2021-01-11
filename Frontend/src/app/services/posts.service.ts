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

  tryLogin(username: string, password: string){
    let body = {
      username: username,
      password: password
    };
    return this.http.post<User>(`${this.apiUrl}/Login`, body );
  }
}
