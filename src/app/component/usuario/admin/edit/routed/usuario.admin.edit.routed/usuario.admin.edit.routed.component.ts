import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../../../../model/usuario.interface';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../service/usuario.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-usuario.admin.edit.routed',
  templateUrl: './usuario.admin.edit.routed.component.html',
  styleUrls: ['./usuario.admin.edit.routed.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
  ],
})

export class UsuarioAdminEditRoutedComponent implements OnInit {
  id: number = 0;
  usuarioForm: FormGroup | undefined = undefined; // O NULL, o UNDEFINED pero undefined esq la has creado pero no la has inicializado
  oUsuario: IUsuario | null = null;

  constructor( 
    private oActivatedRoute: ActivatedRoute, 
    private oUsuarioService: UsuarioService
  ) { 
      this.oActivatedRoute.params.subscribe((params) => {
        this.id = params['id'];
      });
      
    }

  ngOnInit() {
    this.get();
    this.crearForm();
  }

  crearForm() {
    this.usuarioForm = new FormGroup({
      id : new FormControl(this.oUsuario?.id, [Validators.required], ),
      nombre: new FormControl(this.oUsuario?.nombre, [Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      apellido1: new FormControl(this.oUsuario?.apellido1, [Validators.required,Validators.minLength(1), Validators.maxLength(50)]),
      apellido2: new FormControl(''),
      email: new FormControl(this.oUsuario?.email,  [Validators.required,Validators.minLength(1), Validators.email]),
      
    });
  }

  actualizarForm() {
    this.usuarioForm?.controls['id'].setValue(this.oUsuario?.id);
    this.usuarioForm?.controls['nombre'].setValue(this.oUsuario?.nombre);
    this.usuarioForm?.controls['apellido1'].setValue(this.oUsuario?.apellido1);
    this.usuarioForm?.controls['apellido2'].setValue(this.oUsuario?.apellido2);
    this.usuarioForm?.controls['email'].setValue(this.oUsuario?.email);
   }

  get() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (oUsuario: IUsuario) => {
        this.oUsuario = oUsuario;
        this.actualizarForm();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

 

 onSubmit() {
  this.oUsuarioService.updateOne(this.usuarioForm?.value).subscribe({
    next: (oUsuario: IUsuario) => {
      alert('Actualizado correctamente');
      location.href = '/admin/usuario/plist';
    },
    error: (error) => {
      console.error(error);
    },
    
  })
    
  }
}
