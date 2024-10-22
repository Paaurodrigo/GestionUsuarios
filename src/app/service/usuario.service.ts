import { Injectable } from '@angular/core';
import { IUsuario } from '../model/usuario.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { IPage } from '../model/model.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
  constructor(private oHttp: HttpClient) {}

  getPage(
    page: number,
    size: number,
    field: string,
    dir: string,
    filter : string
    
  ): Observable<IPage<IUsuario>> {
    let URL: string = '';
    URL += 'http://localhost:8085';
    URL += '/usuario';
    if (!page) {
      page = 0;
    }
    URL += '?page=' + page;
    if (!size) {
      size = 10;
    }
    URL += '&size=' + size;
    if (field) {
      URL += '&sort=' + field;
      if (dir === 'asc') {
        URL += ',asc';
      } else {
        URL += ',desc';
      }
    }if (filter) {
      URL += '&filter=' + filter;
    }
    return this.oHttp.get<IPage<IUsuario>>(URL);
  }
  

  getOne(id: number): Observable<IUsuario> {
    let URL: string = '';
    URL += 'http://localhost:8085';
    URL += '/usuario';
    URL += '/' + id;
    return this.oHttp.get<IUsuario>(URL);
  }
  deleteOne(id: number): Observable<any> {
    let URL: string = '';
    URL += 'http://localhost:8085';
    URL += '/usuario';
    URL += '/' + id;
    return this.oHttp.delete(URL);
  }

  updateOne(oUsuario: IUsuario): Observable<IUsuario> {
    let URL: string = '';
    URL += 'http://localhost:8085';
    URL += '/usuario';
    URL += '/' + oUsuario.id;
    return this.oHttp.put<IUsuario>(URL, oUsuario);
  }
}
