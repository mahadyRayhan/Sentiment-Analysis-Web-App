import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CountriesServies {
  constructor(private _http:HttpClient){}
  public getCountryDetaile(text_to_analyse){
    let _url:string = 'http://mahadyrayhan.pythonanywhere.com/book/'+ text_to_analyse;
    return this._http.get(_url);
  }


}
