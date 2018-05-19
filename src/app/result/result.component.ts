import { Component, OnInit  } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import {CountriesServies} from '../services/countries.http.servies';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [CountriesServies]
})
export class ResultComponent implements OnInit {

  probability
  result:string
  text_to_analysis:string

  constructor(private route:ActivatedRoute,
              private countriesServies : CountriesServies){}

  ngOnInit() {
    let textFromURL = this.route.snapshot.paramMap.get('text')
    this.text_to_analysis = textFromURL
    this.countriesServies.getCountryDetaile(this.text_to_analysis)
      .subscribe(
        data =>{
          if(data['code'] != ""){
            this.probability = (Number(data['probability'])*100).toFixed(2)
            this.result = data['result']
          }
        }
      )
  }

}
