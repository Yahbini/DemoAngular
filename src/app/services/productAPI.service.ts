import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseURLService } from './baseURL.service';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  products: Product[];

  constructor(
    private httpClient: HttpClient,
    private baseURLService: BaseURLService
  ) {}

  async findallProduct() {
    return lastValueFrom(this.httpClient.get(
      this.baseURLService.BASE_URL + '/product/findall'
    ));
  }
}
