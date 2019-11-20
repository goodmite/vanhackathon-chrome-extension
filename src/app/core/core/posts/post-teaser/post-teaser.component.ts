import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from '../../../../typings/post';

@Component({
  selector: 'ngp-post-teaser',
  templateUrl: './post-teaser.component.html',
  styleUrls: ['./post-teaser.component.scss']
})
export class PostTeaserComponent implements OnInit {

  @Input() post: IPost | undefined;
  @Output() toggleFavorite$ = new EventEmitter();
  @Output() showCommentsc$ = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
