import {State, Action, StateContext, Store} from '@ngxs/store';
import {AddPosts, GetPosts$} from './post.actions';
import {PostsServerService} from '../posts-server.service';
import {IGetPostResponse, IPost} from '../../../../typings/post';
import {map} from 'rxjs/operators';
import {IPostStateModel} from '../../../../typings/store/post';

@State<IPostStateModel>({
  name: 'posts',
  defaults: {
    items: [],
    totalItems: 0
  }
})
export class PostState {

  constructor(private postsServerService: PostsServerService, private store: Store) {

  }


  /**
   * addPosts: Check if old version of any post already exists.
   * If yes, update old version of the post
   *
   */
  @Action(AddPosts)
  addPosts(ctx: StateContext<IPostStateModel>, action: AddPosts) {
    const state = ctx.getState();
    const newPostList = action.payload.posts;
    const articlesCount = action.payload.articlesCount;
    const postList: IPost[] = state.items.map((post: IPost) => {
      const oldVersionOfPostIndex = newPostList.findIndex((dispatchedPost) => {
        return dispatchedPost.slug === post.slug;
      });
      if (oldVersionOfPostIndex !== -1) {
        const x = newPostList[oldVersionOfPostIndex];
        newPostList.splice(oldVersionOfPostIndex, 1);
        return x;
      } else {
        return post;
      }
    });
    ctx.setState({items: [...postList, ...newPostList], totalItems: articlesCount});
  }


  /**
   * getPostsFromBackend: Get posts from backend and store in store
   */
  @Action(GetPosts$)
  // @ts-ignore
  getPostsFromBackend(ctx: StateContext<IPostStateModel>, {payload}: GetPosts$) {
    return this.postsServerService.getPosts(payload)
      .pipe(map((articleResponse: IGetPostResponse) => {
        return this.store.dispatch(new AddPosts({posts: articleResponse.articles, articlesCount: articleResponse.articlesCount}));
      }));
  }
}
