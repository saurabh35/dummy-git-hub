import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navBarForm = new FormGroup({
    userIdInput: new FormControl()
  });

  constructor(public restService: RestService) {
  }

  ngOnInit() {
  }

  setUserId() {
    if (this.navBarForm.get('userIdInput').value) {
      this.restService.setUserId(this.navBarForm.get('userIdInput').value);
    } else {
      this.restService.setUserId('supreetsingh247');
    }
  }
}
