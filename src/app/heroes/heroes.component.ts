import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// metadata, decorator function
@Component({
  selector: 'app-heroes', // components css element selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css']// location of private css
})
export class HeroesComponent implements OnInit {


  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
