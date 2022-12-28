import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { UsersController } from './controllers/users/users.controller';
import { PokemonController } from './controllers/pokemon/pokemon.controller';
import { PokemonService } from './controllers/pokemon/pokemon.service';
import { HttpProvider } from 'src/utils/http.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, 
    ConfigModule.forRoot()],
  controllers: [
    AppController,
    ProductsController,
    UsersController,
    PokemonController,
  ],
  providers: [
    AppService, 
    PokemonService,
    ...HttpProvider],
})
export class AppModule {}
