import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})

export class CocktailsComponent implements OnInit {

  datos: any;

  constructor(private ServiciosService: ServiciosService){}

  ngOnInit(): void {
    this.ServiciosService.getMargaritas().subscribe(data =>{
      console.log(data.drinks);
      this.datos = data.drinks;
    })
  }

}
