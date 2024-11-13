import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InterfaceCurso } from '../mis-cursos/interface/interface.curso';
import { CursoService } from '../services/curso.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [TableModule,
    NgFor],
  templateUrl: './mis-cursos.component.html'
})
export class MisCursosComponent implements OnInit{

  cursos : InterfaceCurso[]=[];

  constructor(private cursoService: CursoService){
  }

  ngOnInit(): void {
    this.cargaCursos();
  }

  cargaCursos(): void {
    this.cursoService['getCursos']().subscribe((data: InterfaceCurso[]) => {
      this.cursos = data;
      console.log(data)
    });
  }
}

