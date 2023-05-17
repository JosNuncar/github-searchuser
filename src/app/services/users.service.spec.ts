import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

describe('UserService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a user', () => {
    const mockUser: User = {
      login: 'josnuncar',
      id: 123,
      avatar_url: 'https://example.com/avatar.png',
      html_url: 'https://example.com/testuser',
      name: 'Test User',
      node_id: '',
      gravatar_id: '',
      url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      company: '',
      blog: '',
      location: '',
      email: '',
      hireable: false,
      bio: '',
      twitter_username: '',
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '',
      updated_at: ''
    };

    service.getUser('testuser').subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne('https://api.github.com/users/testuser');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should retry the request twice and handle errors', () => {
    service.getUser('nonexistentuser').subscribe(
      user => fail('should have failed with 404 error'),
      error => expect(error.status).toBe(404)
    );
})});
