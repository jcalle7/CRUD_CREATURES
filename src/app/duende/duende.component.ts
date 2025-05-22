import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NzCardComponent, NzCardMetaComponent } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { DuendeService } from '../services/duende.service';

@Component({
  selector: 'app-duende',
  standalone: true,
  imports: [HttpClientModule, NgFor, NzCardComponent, NzCardMetaComponent],
  templateUrl: './duende.component.html',
  styleUrl: './duende.component.css'
})
export class DuendeComponent implements OnInit {

  duendes : any[] = [];

  
  constructor(private duendeService : DuendeService){}
  
  ngOnInit(): void {
    this.duendeService.getDuende().subscribe(data =>{
      if(Array.isArray(data)){
        this.duendes = data;
      } else {
        console.error('La respuesta no contiene un array en la propiedad results:', data)
      }
    })
  }
}
