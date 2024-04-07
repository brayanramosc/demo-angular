import { MatNavList, MatListItem } from "@angular/material/list";
import { MatButton } from '@angular/material/button';
import { Component } from '@angular/core';

import { POKEMONS } from '../models/constants';
import { IPokemon } from "../models/pokemon.interface";
import { PokemonComponent } from "./pokemon/pokemon.component";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [PokemonComponent, MatButton, MatNavList, MatListItem],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})

export class PokemonsComponent {
  pokemons = [...POKEMONS];
  selectedPokemon?: IPokemon;

  handleClickRestore(): void {
    this.pokemons = [...POKEMONS];
  }

  handleClickPokemon(pokemon: IPokemon) {
    this.selectedPokemon = pokemon;
  }

  deletePokemon(pokemon: IPokemon) {
    this.pokemons = this.pokemons.filter(pok => pokemon.nombre !== pok.nombre);
    this.selectedPokemon = undefined;
  }
}
