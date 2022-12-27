import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  // constructor(private readonly httpService: HttpService) {}
  constructor(
    @Inject('HTTP_PROVIDER') private readonly httpService: HttpService
  ) {}

  async listarPokemones(): Promise<string[]> {
    return ['pikachu', 'charmander', 'squartle', 'bulbasur'];
  }

  async listarPokemones2() {
    try {
      const response = await this.httpService.axiosRef.get(
        'https://pokeapi.co/api/v2/pokemon?limit=10',
        {
          headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
        },
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log('Error');
      console.log(error);
    }
  }
}
