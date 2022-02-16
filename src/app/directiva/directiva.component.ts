import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {


  listaCurso: string[]= ['typeScript', 'Java','c#'];

  habilitar:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
