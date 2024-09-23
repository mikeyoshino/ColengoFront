import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { GetProductResponse } from '../Models/get-product-response.model';
import { AppConstants } from '../Core/Constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
    private readonly appConstants: AppConstants
  ) {}

  public async handleGetRequest(url: string): Promise<any> {
    const obs = this.http.get<GetProductResponse>(url);  // Update type to GetProductResponse
    const data = await lastValueFrom(obs);
    return data;
  }

  async GetProducts(page: number = 1, pageSize: number = 10, title: string = '', sortDirection: string = 'asc'): Promise<GetProductResponse> {
    let url = `${this.appConstants.apiEndpoint}/start?page=${page}&pageSize=${pageSize}&title=${title}&sort=${sortDirection}`;
    const data = await this.handleGetRequest(url);
    return data;
  }
}
