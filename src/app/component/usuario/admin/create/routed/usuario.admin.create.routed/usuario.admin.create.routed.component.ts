import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../../../../../model/usuario.interface';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../service/usuario.service';
@Component({
  selector: 'app-usuario.admin.create.routed',
  templateUrl: './usuario.admin.create.routed.component.html',
  styleUrls: ['./usuario.admin.create.routed.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class UsuarioAdminCreateRoutedComponent implements OnInit {
  usuarioForm: FormGroup | undefined = undefined; // O NULL, o UNDEFINED pero undefined esq la has creado pero no la has inicializado
  oUsuario: IUsuario = {
    id: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    email: '',
  };
  constructor(
    private oActivatedRoute: ActivatedRoute, 
    private oUsuarioService: UsuarioService
  ) { 
    
  }

  ngOnInit() {
    this.crearForm();
  }

  crearForm() {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl('', [Validators.required]),
      apellido2: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  onSubmit() {
    console.log(this.usuarioForm?.value);
    this.oUsuarioService.createOne(this.usuarioForm?.value).subscribe({
      next: (oUsuario: IUsuario) => {
        alert('Creado correctamente');
        location.href = '/admin/usuario/plist';
      },
      error: (error) => {
        console.error(error);
      },
      
    })
      
    }


}
