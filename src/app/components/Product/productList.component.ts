import { Component, OnInit } from '@angular/core';
import { ProductAPI } from '../../entities/productapi.entity';
import { ProductAPIService } from '../../services/productAPI.service';
import { CommonModule } from '@angular/common';
import { CategoryAPI } from '../../entities/categoryapi.entity';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'productList.component.html',
  host: {
    'collision-id': 'ProductListComponent',
  },
  imports: [
    CommonModule
  ]
})
export class ProductListomponent implements OnInit {
  products: ProductAPI[];
  categories: CategoryAPI[];

  constructor(private productApiService: ProductAPIService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.findall().then(
      res => {
        this.categories = res as CategoryAPI[];
      }, 
      error => {
        console.log(error);
        
      }
    )
    this.productApiService.findallProduct().then(
        res => {
            this.products =  res as ProductAPI[];
        }, 
        error => {
            console.log(error);
            
        }
    )
  }

  filterByCategory(evt: any) {
    let categoryId = evt.target.value;
    this.productApiService.findByCategoryId(categoryId).then(
      res => {
          this.products = res as ProductAPI[];
      },error => {
          console.log(error);
          
      }

  )
  }
}
