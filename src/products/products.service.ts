import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

     private products = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      description: 'Business laptop',
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 1500,
      description: 'Mechanical keyboard',
    },
  ];

  getProducst()
  {
    return this.products
  }
}
