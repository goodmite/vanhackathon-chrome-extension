import { TestBed } from '@angular/core/testing';

import { PostsServerService } from './posts-server.service';

describe('PostsServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsServerService = TestBed.get(PostsServerService);
    expect(service).toBeTruthy();
  });
});
