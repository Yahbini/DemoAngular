import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router"; 
import { FormsModule } from "@angular/forms";
import { CategoryAPI } from "../../../entities/categoryapi.entity";
import { CategoryService } from "../../../services/category.service";
import { ProductAPI } from "../../../entities/productapi.entity";
import { ProductAPIService } from "../../../services/productAPI.service";

@Component({
    standalone: true,
    templateUrl: 'categoryDetails.component.html',
    host: {
        'collision-id': 'CategoryDetailsComponent'
    },
    imports: [
        RouterLink
    ]
})

export class CategoryDetailsComponent implements OnInit{

    category: CategoryAPI;
    products: ProductAPI[];
    
  
    constructor(
        private categoryService: CategoryService,
        private productApiService: ProductAPIService,
        private activeRouter: ActivatedRoute
    ) {     
    }

    ngOnInit() {
        this.activeRouter.paramMap.subscribe(p => {

            let id = p.get('id');    
            console.log(id);
            
            this.categoryService.findById(id).then(
                res => {
                    this.category =  res as CategoryAPI;
                    console.log(this.category);
                    
                }, 
                error => {
                    console.log(error);
                    
                }
            );
            this.productApiService.findByCategoryId(id).then(
                res => {
                    this.products = res as ProductAPI[];
                },error => {
                    console.log(error);
                    
                }
    
            )
        });
        
    }

    
}