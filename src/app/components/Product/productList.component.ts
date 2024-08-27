import { Component, OnInit } from '@angular/core';
import { ProductAPI } from '../../entities/productapi.entity';
import { ProductAPIService } from '../../services/productAPI.service';
import { CommonModule } from '@angular/common';

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
  products: ProductAPI[]

  constructor(private productApiService: ProductAPIService) {}

  ngOnInit() {
    this.productApiService.findallProduct().then(
        res => {
            this.products =  res as ProductAPI[];
        }, 
        error => {
            console.log(error);
            
        }
    )
  }
}
