import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  avatarUrl;

  baseUrl = 'https://api.github.com/users/';
  profileDataUrl = new FormControl('');
  repoUrl;

  constructor(private http: HttpClient) {
  }

  profileData() {
    return this.http.get(this.profileDataUrl.value);
  }

  repoData() {
    return this.http.get(this.repoUrl);
  }

  get(url) {
    return this.http.get(url);
  }

  setAvatarUrl(url) {
    this.avatarUrl = url;
  }

  setReposUrl(url) {
    this.repoUrl = url;
  }

  setUserId(userId) {
    this.profileDataUrl.setValue(this.baseUrl + userId);
  }

  resetData() {
    this.avatarUrl = null;
    this.profileDataUrl.setValue(null, {emitEvent: false});
    this.repoUrl = null;
  }
}
