import { LoginService } from './../services/login.service';
import { ContentService } from './content.service';
import { Content } from './../shared/content.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showLogin = false;
  content: Content[];
  constructor(
    private contentService: ContentService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.content = this.contentService.getContent();
    this.loginService.showLoginSubject.subscribe((showLogin: boolean) => {
      this.showLogin = !this.showLogin;
    });
  }

  onSaveData() {
    this.contentService.saveContent(this.content);
    this.contentService.getHttpContent();
  }
}
