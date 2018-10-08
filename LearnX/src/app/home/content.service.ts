import { Content } from './../shared/content.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class ContentService {
  private content: Content[] = [
    new Content(
      'Saurav Asopa',
      // tslint:disable-next-line:max-line-length
      'Hi All! Thanks for sharing your time to interact with me. I am a Passionate Web Developer in Bengaluru, India ',
      '../../assets/bricks-brickwall-brickwork-1092364.jpg',
      '../../assets/me.jpg',
      '/saurav'
    ),
    // tslint:disable-next-line:max-line-length
    new Content(
      'Gaurav Asopa',
      'Hi All! Thanks for sharing your time to interact with me. I am a Passionate Web Developer in Bengaluru, India',
      '../../assets/alps-clouds-cold-826824.jpg',
      '../../assets/gaurav.jpg',
      '/gaurav'
    ),
    // tslint:disable-next-line:max-line-length
    new Content(
      'Dhiraj Asopa',
      'Hi All! Thanks for sharing your time to interact with me. I am a Passionate Web Developer in Bengaluru, India ',
      '../../assets/cold-daylight-hand-761268.jpg',
      '../../assets/dhiraj.jpg',
      '/dhiraj'
    ),
    // tslint:disable-next-line:max-line-length
    new Content(
      'Neeraj Asopa',
      'Hi All! Thanks for sharing your time to interact with me. I am a Passionate Web Developer in Bengaluru, India ',
      '../../assets/notebook-notepad-paper-574283.jpg',
      '../../assets/neeraj.jpg',
      '/neeraj'
    ),
    // tslint:disable-next-line:max-line-length
    new Content(
      'Rekha Asopa',
      'Hi All! Thanks for sharing your time to interact with me. I am a Passionate Web Developer in Bengaluru, India',
      '../../assets/blur-blurry-bokeh-347139.jpg',
      '../../assets/rekha.jpg',
      '/rekha'
    )
  ];

  constructor(private http: Http) {}
  getContent() {
    return this.content.slice();
  }

  saveContent(contents: Content[]) {
    return this.http
      .post('https://learnx-37e86.firebaseio.com/data.json', contents)
      .subscribe(response => {
        console.log(response);
      });
  }

  getHttpContent() {
    this.http.get('https://learnx-37e86.firebaseio.com/data.json').subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
