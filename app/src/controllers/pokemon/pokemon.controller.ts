import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { ConfigService } from '@nestjs/config';

@Controller('pokemones')
export class PokemonController {
  constructor (
    private readonly pokemonService: PokemonService,
    private readonly configService: ConfigService) {}

  @Get()
  async listarPokemones (): Promise<string[]> {
    console.log(`Imprimiendo variable de entorno => ${this.configService.get('BASE_URL_API_POKEMON')}`);
    console.log('Listando pokemones');
    const pokemones = await this.pokemonService.listarPokemones2();
    return pokemones;
  }
}
