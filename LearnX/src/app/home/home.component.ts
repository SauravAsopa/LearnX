import { ContentService } from './content.service';
import { Content } from './../shared/content.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: Content[];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.content = this.contentService.getContent();
  }



}
