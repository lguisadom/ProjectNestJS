import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  async listarPokemones(): Promise<string[]> {
    return ['pikachu', 'charmander', 'squartle', 'bulbasur'];
  }
}
