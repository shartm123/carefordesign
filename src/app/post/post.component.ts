import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  blogPosts: any
  errorMessage: any

  constructor(private blogService: BlogService) { }

  ngOnInit(){
    this.getPosts()
  }
  getPosts() {
    this.blogService.getPosts().subscribe(
      data => {
        this.blogPosts = data;
      },
        (error) => {
        this.errorMessage = error.message
        console.log(error);
      });
  }
}
