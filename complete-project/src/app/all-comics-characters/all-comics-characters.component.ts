import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';
import {CharacterData} from '../models/CharacterData.interface';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-all-comics-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-comics-characters.component.html',
  styleUrl: './all-comics-characters.component.css',
  providers: [MarvelApiService]
})



export class AllComicsCharactersComponent {

  characters: CharacterData[] = [];

  constructor(private marvelApiService: MarvelApiService) {
    this.characters = marvelApiService.characters;

  }


}
