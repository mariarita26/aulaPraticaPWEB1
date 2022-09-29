import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios = [
    {nome: 'Maria Rita', cpf: '123', idade: '21'},
    {nome: 'Felipe Targino', cpf: '456', idade: '22'},
    {nome: 'Julyana Alencar', cpf: '795', idade: '34'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
