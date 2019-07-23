import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
// metadata, decorator function
@Component({
  selector: 'app-heroes', // components css element selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css']// location of private css
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
