import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})


// clico de vida 
export class CadastroUsuarioComponent implements OnInit {

  
  usuario: Usuario;
  usuarios: Array<Usuario>;

  
  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }
  
  //metodo da interface
  // colocar códigos que queira executar logo após o componente ter todos
  // os atributos e o construtor ter sido executado
  // pode fazer qualquer código, logo após vai cair aqui:
  ngOnInit(): void {
  }



  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

}
