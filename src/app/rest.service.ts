import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  profileDataUrl = 'https://api.github.com/users/supreetsingh247';
  repoUrl = 'https://api.github.com/users/supreetsingh247/repos';

  constructor(private http: HttpClient) {
  }

  profileData() {
    return this.http.get(this.profileDataUrl);
  }

  repoData() {
    return this.http.get(this.repoUrl);
  }

  get(url) {
    return this.http.get(url);
  }

}
