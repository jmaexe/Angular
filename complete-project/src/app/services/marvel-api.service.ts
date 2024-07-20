import { Injectable, OnInit } from '@angular/core';
import {CharacterData} from '../models/CharacterData.interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvelApiService implements OnInit {
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  
  }

  getAllCharacters = () : Observable<CharacterData[]> => {
    return this.http.get<CharacterData[]>('http://localhost:5000/characters');
  }

  getCharacterByName = (name: string) => {
    return this.http.get<CharacterData[]>('http://localhost:5000/characters/' + name).subscribe(data => data)
  }
}
