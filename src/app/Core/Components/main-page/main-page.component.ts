import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Shared/apiservice.service';
import { Product } from '../../../Models/product.model';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor, etc.



@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MainPageComponent implements OnInit {
  products: Product[] = [];
  totalPages: number = 0;
  totalItems: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  sortDirection: string = 'asc';
  searchTitle: string = '';

  constructor(private productService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.GetProducts(this.currentPage, this.pageSize, this.searchTitle, this.sortDirection)
      .then(response => {
        this.products = response.products;
        this.totalPages = response.totalPages;
        this.totalItems = response.totalItems;
      })
      .catch(error => {
        console.error('Error loading products', error);
      });
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.loadProducts();
  }

  sortByName(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.loadProducts();
  }

  search(): void {
    this.currentPage = 1;
    this.loadProducts();
  }
}