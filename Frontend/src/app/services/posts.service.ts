import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
