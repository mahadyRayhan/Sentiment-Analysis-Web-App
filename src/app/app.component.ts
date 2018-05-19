import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SentimentResult} from './sentimentResult';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sentimentResult = new SentimentResult();
  constructor(private httpClient:HttpClient){  }

}


