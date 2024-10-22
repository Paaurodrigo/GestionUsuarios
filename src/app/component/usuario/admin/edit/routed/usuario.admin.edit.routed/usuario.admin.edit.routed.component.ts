import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../../../../model/usuario.interface';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../service/usuario.service';

@Component({
  selector: 'app-usuario.admin.edit.routed',
  templateUrl: './usuario.admin.edit.routed.component.html',
  styleUrls: ['./usuario.admin.edit.routed.component.css'],
  standalone: true
})
export class UsuarioAdminEditRoutedComponent implements OnInit {
  id: number = 0;
  route: string = '';
  oUsuario: IUsuario = {
    id: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
  };
  constructor( private oActivatedRoute: ActivatedRoute, private oUsuarioService: UsuarioService) { }

  ngOnInit() {
    this.id = this.oActivatedRoute.snapshot.params['id'];
    this.getOne();
  }
  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
      },
    });
  }

  delete() {
    
    this.oUsuarioService.deleteOne(this.id).subscribe({
      next: () => {
        alert('Eliminado correctamente');
        location.href = '/admin/usuario/plist';
      },
    });
  }
}
