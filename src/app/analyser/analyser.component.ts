import { Component, OnInit } from '@angular/core';
import {SentimentResult} from '../sentimentResult';

import { CountriesServies} from '../services/countries.http.servies';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-analyser',
  templateUrl: './analyser.component.html',
  styleUrls: ['./analyser.component.css'],
  providers: [CountriesServies]
})
export class AnalyserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private countriesServies : CountriesServies,) { }
  sentimentResult = new SentimentResult();

  text:string

  GetNextpage(){
    this.router.navigate(['/result',this.text])
  }

  ngOnInit() {}

}
