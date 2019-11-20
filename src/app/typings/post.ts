export interface IPost {
  'title': string;
  'slug': string;
  'body': string;
  'createdAt': string;
  'updatedAt': string;
  'tagList': [];
  'description': string;
  'author': {
    'username': string;
    'bio': null;
    'image': string;
    'following': boolean
  };
  'favorited': boolean;
  'favoritesCount': number;
}


export interface IGetPostResponse {
  articles: IPost[];
  articlesCount: number;
}
