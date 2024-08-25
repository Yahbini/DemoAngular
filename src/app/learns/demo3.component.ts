import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DemoService } from "../services/demo.service";
import { CalculateService } from "../services/calculate.service";
import { RectangleService } from "../services/rectangle.service";
import { ProductService } from "../services/product.service";
import { Product } from "../entities/product.entity";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo3.component.html',
    imports: [
        FormsModule
    ]
})
// injection
export class Demo3Component implements OnInit{

    result1!: string;
    result2!: string;
    result3!: number;
    result4!: number;
    result5!: number;
    result6!: number;
    result7!: number;

    product!: Product;
    products!: Product[];
    productStatus!: Product[];
    productPrices!: Product[];
    productByKeyword!: Product[];
    productDesbystatus!: Product[];
    productLimit!: Product[];
    productLimit2!: Product[];
    
    result8!: boolean;
    result9!: number;







    constructor(private demoService: DemoService, private calculate: CalculateService,
        private rectangle: RectangleService, private productService: ProductService
    ) {
        
    }



    ngOnInit() {
        this.result1 = this.demoService.hello();
        this.result2 = this.demoService.hi("PA");
        this.result3 = this.demoService.add(5, 5);
        this.result4 = this.calculate.add(10, 5);
        this.result5 = this.calculate.mul(5, 5);
        this.result6 = this.rectangle.area(5, 1);
        this.result7 = this.rectangle.perimeter(10, 2);
        this.product = this.productService.find();
        this.products = this.productService.findAll();
        this.productStatus = this.productService.findByStatus(true);
        this.productPrices = this.productService.findByPrice(4, 6);
        this.productByKeyword = this.productService.findByKeyword("1");
        this.productDesbystatus = this.productService.sortDESCByStatus(true);
        this.productLimit = this.productService.limit(3);
        this.productLimit2 = this.productService.limit2(1, 3);

        this.result8 = this.productService.exist(1);
        this.result9 = this.productService.countByStatus(true);

    }

}