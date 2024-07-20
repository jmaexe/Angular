import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import {CharacterData} from '../models/CharacterData.interface';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perform } from '../classes/perform.class';


@Component({
  selector: 'app-all-comics-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-comics-characters.component.html',
  styleUrl: './all-comics-characters.component.css',
  providers: [MarvelApiService]
})





export class AllComicsCharactersComponent implements OnInit {

  // characters: CharacterData[] = []; 
  characters = new Perform<CharacterData[]>();

  constructor(private marvelApiService: MarvelApiService) {

  }
  ngOnInit(): void {
    // this.characters.load(this.marvelApiService.getAllCharacters())
    // this.marvelApiService.getAllCharacters().subscribe(data => this.characters = data)
  }




}
