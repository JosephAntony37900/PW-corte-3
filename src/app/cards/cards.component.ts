import { Component, OnInit } from '@angular/core';
import { CaractersService } from '../services/caracters.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  characters: any[] = [];

  constructor(private caractersService: CaractersService) {}

  ngOnInit(): void {
    this.caractersService.getCharacters().subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }
}
