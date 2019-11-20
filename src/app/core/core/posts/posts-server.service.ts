import {Injectable} from '@angular/core';
import {HttpService} from '../../../../../projects/http/src/lib/http.service';
import {IGetPostResponse} from '../../../typings/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsServerService {

  constructor(private httpService: HttpService) {
  }

  getPosts(options = {limit: 10, offset: 0}): Observable<IGetPostResponse> {
    const url = `https://conduit.productionready.io/api/articles?limit=${options.limit}&offset=${options.offset}`;
    return this.httpService.makeGetReq<IGetPostResponse>(url);
  }
}
