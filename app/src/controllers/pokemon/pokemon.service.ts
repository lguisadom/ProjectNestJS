import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {
  // constructor(private readonly httpService: HttpService) {}
  constructor (
    @Inject('HTTP_PROVIDER') private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async listarPokemones (): Promise<string[]> {
    return ['pikachu', 'charmander', 'squartle', 'bulbasur'];
  }

  async listarPokemones2 () {
    try {
      const BASE_URL = this.configService.get('BASE_URL_API_POKEMON');
      const url = `${BASE_URL}/pokemon?limit=10`;

      console.log(`url => ${url}`);
      const response = await this.httpService.axiosRef.get(
        `${url}`,
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
