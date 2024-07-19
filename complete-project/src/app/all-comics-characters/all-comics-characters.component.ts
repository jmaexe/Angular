import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import {CharacterData} from '../models/CharacterData.interface';


@Component({
  selector: 'app-all-comics-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-comics-characters.component.html',
  styleUrl: './all-comics-characters.component.css'
})



export class AllComicsCharactersComponent {

  characters: CharacterData[] = [];

  constructor(marvelApiService: MarvelApiService) {
    this.characters = marvelApiService.characters;

  }


}
