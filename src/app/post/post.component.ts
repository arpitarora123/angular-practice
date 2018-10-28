import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  isDisabled: boolean;

  name: string;
  classes = {
    alert: true,
    div: true
  };

  constructor() {
    this.name = 'Arpit';
    this.isDisabled = true;

  }

  ngOnInit() {
  }

}
