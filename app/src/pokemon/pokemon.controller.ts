import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemones')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async listarPokemones(): Promise<string[]> {
    console.log('Listando pokemones');
    const pokemones = await this.pokemonService.listarPokemones();
    return pokemones;
  }
}
