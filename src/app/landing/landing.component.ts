import { Component, OnInit } from '@angular/core';
import { blogVO } from '../bloglist/blogVO';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'Awesome work!!';
  blog:blogVO = new blogVO;
  testcolor: string =  "blue";
  constructor(){
    this.blog.author ="prabhu";
    this.blog.content ="some content from app";
    this.blog.title ="Title";
    this.blog.displayImage='display Image';
    this.testcolor = "blue";
  }
  

  ngOnInit() {
  }

}
