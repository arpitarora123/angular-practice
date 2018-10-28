import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';
import { Post } from '../post/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, AfterViewInit {

@ViewChild(PostComponent) postComponent: PostComponent;
@ViewChildren(PostComponent) postComponents: PostComponent[];

  posts: Post[] = [
    new Post(1, 'My first post!', 'Arpit'),
    new Post(2, 'My second post!', 'Rashmi')
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('Child:' + this.postComponent.post.content);
    console.log(`Child2: ${this.postComponent}`);
    console.log('Children:' + this.postComponents.toString());
  }


}
