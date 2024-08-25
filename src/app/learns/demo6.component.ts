import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductService } from "../services/product.service";
import { CountryService } from "../services/country.service";
import { Product } from "../entities/product.entity";
import { Country } from "../entities/country.entity";
import { City } from "../entities/city.entity";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo6.component.html',
    imports: [
        FormsModule
    ] 
})

export class Demo6Component implements OnInit{

    categoryId!: string;
    flag!: string;
    products!: Product[];
    product! : Product;
    countries!: Country[];
    cities!: City[];
    country!: Country;

    constructor(
        private productService: ProductService,
        private countryService: CountryService) 
    {}

    ngOnInit() {
        this.categoryId = '';
        this.flag  = 'a.png';
        this.products = this.productService.findAll();
        this.product = this.products[0];
        this.countries = this.countryService.findAll();
        this.cities = this.countries[0].cities;
    }

    selectCategory(event: any) {
        this.categoryId = event.target.value;
    }

    selectCountry(event: any) {
        this.flag = event.target.value;
    }

    findProductDetail(event: any) {
        let id = parseInt(event.target.value)
        this.product = this.productService.findById(id);
    }

    findCountry(event: any) {
        let id = parseInt(event.target.value);
        this.cities = this.countryService.findById(id)?.cities || [];
    }

    selectFile(event: any) {
        let fileInfo = event.target.files[0]
        console.log(fileInfo);
        
    }

    selectFiles(event: any) {
        console.log("Files: " + event.target.files.length);

        for(let i=0; i < event.target.files.length; i++) {
            console.log("name: " +  event.target.files[i].name);
            console.log("size: " +  event.target.files[i].size);
            console.log("type: " +  event.target.files[i].type);
            console.log("-------------------------");
            
        }
        
        
    }

}