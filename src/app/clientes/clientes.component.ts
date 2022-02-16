import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente';
import { Clientes } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes:Cliente[]= [
    {id:1,nombre:'Jose',apellido:'Mendez',email:'jmendez@gmail.com',createAt:'2017-12-11'},
    {id:2,nombre:'Jose',apellido:'Mendez',email:'jmendez@gmail.com',createAt:'2017-12-11'},
    {id:3,nombre:'Jose',apellido:'Mendez',email:'jmendez@gmail.com',createAt:'2017-12-11'},
    {id:4,nombre:'Jose',apellido:'Mendez',email:'jmendez@gmail.com',createAt:'2017-12-11'}
    ];

  constructor( private service:ClienteService) { }

  ngOnInit(): void {
   
  }

}
