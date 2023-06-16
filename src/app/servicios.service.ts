import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

  constructor(private http: HttpClient) {}

  getMargaritas(){
    return this.http.get<any>(this.url);
  }
}
