import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Product } from "../../entities/product.entity";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'productsPage.component.html',
    host: {
        'collision-id': 'ProductComponent'
    },
    imports: [
        RouterLink
    ]
})

export class ProductPageComponent implements OnInit{

    products!: Product[]

    constructor(
        private productsService: ProductService
    ) {
        
    }

    ngOnInit() {
        this.products = this.productsService.findAll()
        
    }

}