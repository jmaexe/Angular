import { Injectable, OnInit } from '@angular/core';
import {CharacterData} from '../models/CharacterData.interface'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarvelApiService implements OnInit {
  characters : CharacterData[] = [
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },
    {
      id: 1017303,
      name: "Hulk (Marvel: Avengers Alliance)",
      description: "",
      modified: "2013-09-18T10:17:06-0400",
      resourceURI: "http://gateway.marvel.com/v1/public/characters/1017303"
    },  
 

  ]
  constructor(private http: HttpClient) { }

  ngOnInit() {
  
  }
  getAllCharacters = () => {

  }
  getCharacterByName = (name: string) => {
      this.http.get('localhost:5000/characters/' + name).subscribe(data => console.log(data))
  }
}
