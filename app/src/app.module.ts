import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { UsersController } from './controllers/users/users.controller';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';

@Module({
  imports: [HttpModule],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    PokemonController,
  ],
  providers: [AppService, PokemonService],
})
export class AppModule {}
