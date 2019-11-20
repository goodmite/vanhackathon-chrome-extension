import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetPosts$} from '../state/post.actions';
import {Observable} from 'rxjs';
  import {IPostStateModel} from '../../../../typings/store/post';

@Component({
  selector: 'ngp-post-teaser-list',
  templateUrl: './post-teaser-list.component.html',
  styleUrls: ['./post-teaser-list.component.scss']
})
export class PostTeaserListComponent implements OnInit {

  @Select('posts') posts$: Observable<IPostStateModel> | undefined;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetPosts$({offset: 0, limit: 10}));
  }

}
