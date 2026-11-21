import { Controller, Injectable,Get } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')

export class ProductsController {
    constructor(private productService:ProductsService)
    {
        // this.productService=productService;
    }

    @Get()
    getProducts()
    {
        return this.productService.getProducst();
    }
}
