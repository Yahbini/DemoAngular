import { Injectable } from '@angular/core';
import { Cert } from '../entities/cert.entity';
import { HttpClient } from '@angular/common/http';
import { BaseURLService } from './baseURL.service';
import { lastValueFrom } from 'rxjs';
import { CategoryAPI } from '../entities/categoryapi.entity';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private httpClient: HttpClient,
    private baseURLService: BaseURLService
  ) {}

  async findall() {
    return lastValueFrom(
      this.httpClient.get(this.baseURLService.BASE_URL + '/category/findalldto')
    );
  }

  async findKeyWordDTO(keyword: string) {
    return lastValueFrom(
      this.httpClient.get(
        this.baseURLService.BASE_URL + '/category/findKeyWordDTO/' + keyword
      )
    );
  }

  async findById(id: string) {
    return lastValueFrom(
      this.httpClient.get(
        this.baseURLService.BASE_URL + '/category/finddto/' + id
      )
    );
  }

  async create(category: CategoryAPI) {
    return lastValueFrom(this.httpClient.post(this.baseURLService.BASE_URL + '/category/createDTO', category))
  }

  async delete(id: string) {
    return lastValueFrom(this.httpClient.delete(this.baseURLService.BASE_URL + '/category/delete/' + id))
  }

  async edit(category: CategoryAPI) {
    return lastValueFrom(this.httpClient.put(this.baseURLService.BASE_URL + '/category/updateDTO', category))
  }
}
