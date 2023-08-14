import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fieldmodule } from './fieldmodule.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldserviceService {
  URL='http://localhost:8090/api';
  constructor(private http: HttpClient) { }
  getAllData():Observable<Fieldmodule[]>{
    return this.http.get<Fieldmodule[]>(this.URL);
  }
}
