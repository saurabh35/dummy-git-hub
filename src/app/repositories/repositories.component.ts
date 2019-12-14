import {Component, Input, OnInit} from '@angular/core';
import {RestService} from '../rest.service';
import {color} from '../color';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repoData;
  languageColorMap;

  types = ['All', 'Sources', 'Forks'];

  languages = ['All'];

  typeControl = new FormControl('All');
  languageControl = new FormControl('All');
  searchTextControl = new FormControl('');

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.languageColorMap = color;
    this.repoData.forEach(repo => {
      if (!this.languages.includes(repo.language)) {
        if (repo.language) {
          this.languages = this.languages.concat(repo.language);
        } else {
          this.languages = this.languages.concat('None');
        }
      }
    });
  }

  formatDate(date) {
    return new Date(date).toDateString();
  }

  passesTextFilter(name, description) {
    if (!this.searchTextControl.value) {
      return true;
    }
    return (name ? !!name.match(new RegExp(this.searchTextControl.value, 'gi')) : false)
      || (description ? !!description.match(new RegExp(this.searchTextControl.value, 'gi')) : false);
  }

  passesTypeFilter(repo) {
    switch (this.typeControl.value) {
      case 'All':
        return true;
      case 'Forks':
        return repo.fork;
      case 'Sources':
        return !repo.fork;
    }
  }

  passesLanguageFilter(repo) {
    if (this.languageControl.value === 'All') {
      return true;
    } else if (this.languageControl.value === 'None') {
      return repo.language === null;
    }
    return repo.language === this.languageControl.value;
  }
}
