import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profileData;
  repoData;
  notFound = false;

  selectedTab = 'repositories';
  starredCount = 0;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.restService.profileDataUrl.valueChanges.subscribe(_ => {
      if (!this.restService.profileDataUrl) {
        return;
      }

      this.profileData = null;
      this.repoData = null;
      this.restService.profileData().subscribe(response => {
        this.notFound = false;
        console.log(response);
        this.profileData = response;
        this.restService.setAvatarUrl(this.profileData.avatar_url);
        this.restService.setReposUrl(this.profileData.repos_url);

        this.restService.repoData().subscribe(reply => {
          console.log(reply);
          this.repoData = reply;
        });

        const starredUrl = this.profileData.starred_url.replace(new RegExp('(.*?)({.*)'), '$1');
        this.restService.get(starredUrl).subscribe(reply => {
          this.starredCount = (reply as any).length;
        });
      }, error => {
        this.notFound = true;
        this.restService.resetData();
      });
    });


    this.restService.setUserId('supreetsingh247');
  }

  setTab(tabName) {
    this.selectedTab = tabName;
  }
}
