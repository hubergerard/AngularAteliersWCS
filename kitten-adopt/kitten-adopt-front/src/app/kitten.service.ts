import { Injectable } from '@angular/core';
import { Kitten } from './models/kitten';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KittenService {

  private static readonly API_URL = 'http://localhost:8080/kittens';

  constructor(private http: HttpClient) { }

  findAllUnadoptedCats(): Observable<Kitten[]> {
    return this.http.get<Kitten[]>(KittenService.API_URL + '?isAdopted=false');
  }

}
