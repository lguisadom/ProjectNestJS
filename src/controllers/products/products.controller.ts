import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getHelloInProducts(): string {
        return "Estamos en productos!";
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
    findByIdAndSize2(@Param("id") id: number, @Param("size") size: string): string {
        return `Estás consultando el producto con id: ${id}, con tamaño: ${size}`;
    }

    @Get("/hot")
    getSpecialProducts() : string {
        return "Te vamos a mostrar los productos más calientes!!!";
    }

    @Get("/numeros")
    getNumeros(): string {
        return "1, 2, 3, 4, 5";
    }

}
