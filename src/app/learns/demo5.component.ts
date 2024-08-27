import { Component, numberAttribute, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo5.component.html',
    imports: [
        FormsModule
    ] 
})

export class Demo5Component implements OnInit{

    result!: string;
    resultF!: number;
    products!: Product[];
    name!: string;

    constructor(private productService: ProductService) {

    }

    ngOnInit() {
        this.result = '';
        this.products = this.productService.findAll();
    }

    display(event: any) {
        console.log(event.target.value);
        this.result = event.target.value;
        
    }

    convertToF(event: any) {
        this.resultF = ((event.target.value)*1.8)+32
    }
    
    filterByName(event: any) {
        this.products = this.productService.findByKeyword(event.target.value);
    }

    filterCategory(event: any) {
        var category = event.target.value
        console.log("category: " + category);
        if(category == 'All') {
            this.products = this.productService.findAll();
        } else {
            this.products = this.productService.findByCategory(category)
        }
    }
}