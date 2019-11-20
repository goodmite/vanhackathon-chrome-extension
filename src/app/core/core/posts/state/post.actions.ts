import {IPost} from '../../../../typings/post';

export class GetPosts$ {
  static readonly type = '[Global feed] Get Posts';

  constructor(public payload: { limit: 10, offset: 0 }) {
  }
}

export class AddPosts {
  static readonly type = '[Global feed] Add Posts to the list';
  constructor(public payload: { posts: IPost[], articlesCount: number }) {
  }
}
