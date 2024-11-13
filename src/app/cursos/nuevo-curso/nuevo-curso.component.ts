

import { Component } from '@angular/core';

import { InterfaceCurso } from '../mis-cursos/interface/interface.curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../services/curso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
})
export class NuevoCursoComponent {
  cursoForm: FormGroup;
nombreCurso: any;

  constructor(
    private cursoService: CursoService,
    private fb: FormBuilder
  ) {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', [Validators.required, Validators.min(1)]]
    });
  }

  guardarCurso() {
    if (this.cursoForm.valid) {
      const nuevoCurso: CursoService = this.cursoForm.value;
      this.cursoService.agregarCurso(nuevoCurso).subscribe({
        next: (response) => {
          console.log('Curso guardado:', response);
        },
        error: (error) => {
          console.error('Error al guardar el curso:', error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}

