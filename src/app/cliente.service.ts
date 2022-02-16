import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { Clientes } from './clientes/clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Cliente[]{return Clientes;}
}
