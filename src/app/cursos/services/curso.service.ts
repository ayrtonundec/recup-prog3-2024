import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfaceCurso } from '../mis-cursos/interface/interface.curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  [x: string]: any;
  private url = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  agregarCurso(curso: CursoService): Observable<CursoService> {
    return this.http.post<CursoService>(this.url, curso);
  }
}

