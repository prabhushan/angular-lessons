import { Component, OnInit, Input } from '@angular/core';
import { blogVO } from './blogVO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  @Input("displayText")
  displayTextChanged :string;

  @Input("blog")
  blog: blogVO;

  @Input("testcolor")
  testcolor: string = "red";


  sampleData:string;


  constructor(private route: ActivatedRoute) { 
   console.log("entered constructor");
   this.testcolor = "green";
   console.log("entered constructor -"+this.displayTextChanged);


  }

  ngOnInit() {
    this.route.data.subscribe(v=> {console.log(v);
    this.displayTextChanged = v["displayText"];
    
    });
    
    console.log("entered NgInit -"+this.displayTextChanged);
    console.log("entered NgInit -"+this.testcolor);
  }

}
