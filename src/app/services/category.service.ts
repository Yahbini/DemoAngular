import { Injectable } from '@angular/core';
import { Cert } from '../entities/cert.entity';
import { HttpClient } from '@angular/common/http';
import { BaseURLService } from './baseURL.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private httpClient: HttpClient,
    private baseURLService: BaseURLService
  ) {}

  async findall() {
    return lastValueFrom(this.httpClient.get(
      this.baseURLService.BASE_URL + '/category/findalldto'
    ));
  }
}
