import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Root } from '../model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  obs_carta!:Observable<Root>
  carta!: String |null
  data: Root|undefined
  

  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }


  getRouterParam = (params: ParamMap) =>
  {
    this.carta = params.get('url'); //ottengo l'url dell tipo che premo 
    console.log (this.carta); 

    this.obs_carta = this.http.get<Root>('https://pokeapi.co/api/v2/url=' + this.carta); //in base al tipo scelto legge e mi restituisce tutte le informazioni su di esso(pokemon di quel tipo)
    this.obs_carta.subscribe(this.getData)

  }

  getData = (d : Root) =>
   {
     this.data = (d);
   }

}
