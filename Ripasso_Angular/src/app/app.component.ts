import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ripasso_Angular';
  obs! : Observable<any>;
  lista=[] ;

  constructor(public http: HttpClient) {
    this.obs=http.get("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.Cerca)
  }

  Cerca(data : any){
    this.lista = data.results
  }

  

  
}

