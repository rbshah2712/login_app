import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  lstposts : Posts[];
  
  constructor(private postservice:PostsService){

  }

  ngOnInit(){

    this.postservice.getPosts().subscribe(
      data => 
      {
        this.lstposts = data;
      }
    );

  }
}
