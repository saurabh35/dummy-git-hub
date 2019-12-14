import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private profileData;
  private repoData;

  selectedTab = 'repositories';
  starredCount = 0;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.restService.profileData().subscribe(response => {
      console.log(response);
      this.profileData = response;
      const starredUrl = this.profileData.starred_url.replace(new RegExp('(.*?)({.*)'), '$1');
      this.restService.get(starredUrl).subscribe(reply => {
        this.starredCount = (reply as any).length;
      });
    });

    this.restService.repoData().subscribe(response => {
      console.log(response);
      this.repoData = response;
    });
  }

  setTab(tabName) {
    this.selectedTab = tabName;
  }
}
