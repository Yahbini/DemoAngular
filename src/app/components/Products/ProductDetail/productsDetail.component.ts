import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Product } from "../../../entities/product.entity";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'productsDetailPage.component.html',
    host: {
        'collision-id': 'ProductComponent'
    },
    imports: [
        RouterLink
    ]
})

export class ProductsDetailComponent implements OnInit{

    product!: Product

    constructor(
        private productsService: ProductService,
        private activatedRoute: ActivatedRoute

    ) {
        
    }

    ngOnInit() {
       this.activatedRoute.paramMap.subscribe(p => {
        const idParam = p.get('id');
        if (idParam !== null) {
            const id = parseInt(idParam, 10); // Add base 10 for clarity
            this.product = this.productsService.findById(id);
        } else {
            // Handle the case where id is null
            console.error('Product ID is null');
        }
       })
        
    }

}