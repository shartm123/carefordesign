import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  singlePosts: any;
  errorMessage: any;
  id!: string

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getSinglePosts()
  }
    getSinglePosts() {
    this.blogService.getSinglePosts(this.id).subscribe(
      data => {
    this.singlePosts = data;
  },
  (error) => {
    this.errorMessage = error.message
    console.log(error);
  });
  }}
