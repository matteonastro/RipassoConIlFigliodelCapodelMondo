import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Root } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ripasso_Angular';
  obs! : Observable<Root>;
  lista : Result[]=[];

  constructor(public http: HttpClient) {
    this.obs=http.get<Root>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.Cerca)
  }

  Cerca = (data : Root) => {
    this.lista = data.results
  }
  
  getlastpart(url:string){
    const parts =url.split('/')
    return parts.at(-2)
  }

  


}

