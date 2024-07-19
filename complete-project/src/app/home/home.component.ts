import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AllComicsCharactersComponent } from "../all-comics-characters/all-comics-characters.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AllComicsCharactersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
