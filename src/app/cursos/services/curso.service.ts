import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceCurso } from '../mis-cursos/interface/interface.curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  // Método para agregar un nuevo curso
  agregarCurso(curso: CursoService): Observable<CursoService> {
    return this.http.post<CursoService>(this.apiUrl, curso);
  }
}

