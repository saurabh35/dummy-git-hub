import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() profileData;

  constructor() {
  }

  ngOnInit() {
  }

}
