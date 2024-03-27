import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './models/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Posts[];
  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
