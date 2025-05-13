import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {
  private API='http://localhost:3000/formulas';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]>{
    return this.http.get<any[]>(this.API);
  }
}
