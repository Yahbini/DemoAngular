import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
import { max } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'tivi',
        price: 5.4,
        quantity: 20,
        status: true,
        photo: 'b.png',
        category: 'Category 1'
      },
      {
        id: 2,
        name: 'laptop',
        price: 5.4,
        quantity: 20,
        status: true,
        photo: 'c.png',
        category: 'Category 2'
      },
      {
        id: 3,
        name: 'phone',
        price: 8.12,
        quantity: 28,
        status: false,
        photo: 'c.png',
        category: 'Category 3'
      },
    ];
  }

  find(): Product {
    return {
      id: 1,
      name: 'tivi',
      price: 5.4,
      quantity: 20,
      status: true,
      photo: 'b.png',
      category: 'Category 1'
    };
  }

  findAll(): Product[] {
    return this.products;
  }

  findByStatus(status: boolean): Product[] {
    return this.products.filter((p) => p.status == status);
  }

  findByPrice(min: number, max: number): Product[] {
    return this.products.filter((p) => p.price >= min && p.price <= max);
  }

  findByKeyword(keyword: string): Product[] {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }


  findById(id: number): Product {
    return this.products.find(p => p.id == id) || { 
      id: 1, 
      name: 'Default Product',
      photo: 'default-photo.jpg',
      price: 0, 
      quantity: 0,
      status: true,
      category: 'Category 1'
    };
  }

  findByCategory(category: string) {
    return this.products.filter(p => p.category == category);
  }

  sortASC() {
    return this.products.sort((p1, p2) => p1.price - p2.price)
  }

  sortDESC() {
    return this.products.sort((p1, p2) => p2.price - p1.price)
  }

  sortDESCByStatus(status: boolean) {
    return this.products.filter(p=>p.status == status).sort((p1, p2) => p2.price - p1.price)
  }

  limit(n: number) {
    return this.products.sort((p1, p2) => p2.price - p1.price).slice(0, n)
  }

  limit2(start: number, n: number) {
    return this.products.sort((p1, p2) => p2.price - p1.price).slice(start, n+1)
  }

  exist(id: number): boolean {
    return this.products.some(p => p.id == id) // * trả về true nếu tìm thấy
  }

  countByStatus(status: boolean): number {
    return this.products.filter(p => p.status == status).length;

  }
}
