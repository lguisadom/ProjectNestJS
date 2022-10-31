import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ppid } from 'process';
import { ProductRequest } from './product.request';

@Controller('products')
export class ProductsController {
  @Get()
  getHelloInProducts(): string {
    return 'Estamos en productos!';
  }

  @Get(':id')
  findById(@Param() params): string {
    return `Estás consultando el producto con id: ${params.id}`;
  }

  @Get(':id/:size')
  findByIdAndSize(@Param() params): string {
    return `Estás consultando el producto con id: ${params.id}, con tamaño: ${params.size}`;
  }

  @Get('/v2/:id/:size')
  findByIdAndSize2(
    @Param('id') id: number,
    @Param('size') size: string,
  ): string {
    return `Estás consultando el producto con id: ${id}, con tamaño: ${size}`;
  }

  @Get('/hot')
  getSpecialProducts(): string {
    return 'Te vamos a mostrar los productos más calientes!!!';
  }

  @Get('/numeros')
  getNumeros(): string {
    return '1, 2, 3, 4, 5';
  }

  @Post()
  createPost(): string {
    return `Estamos atendiendo una solicitud de tipo POST`;
  }

  @Post('/create')
  createProduct(@Body() body): string {
    return `Nombre: ${body.name} y Descripcion: ${body.description}`;
  }

  @Post('/createv2')
  createProductv2(
    @Body('name') name: string,
    @Body('description') description: string,
  ): string {
    return `Nombre: ${name} y Descripcion: ${description}`;
  }

  @Post('/createv3')
  createProductv3(@Body() body: ProductRequest): string {
    if ((body as any).isError) {
      return 'Error';
    }

    return `Nombre: ${body.name} y Descripcion: ${body.description}`;
  }
}
