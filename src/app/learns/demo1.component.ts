import { Component, OnInit } from "@angular/core";
import { Product } from "../entities/product.entity";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo1.component.html',
    styleUrls: [
        './demo1.component.css'
    ]
})

export class Demo1Component implements OnInit{

    id!: number;
    username!: string;
    status!: boolean;
    phone: any;
    price!: number;
    photo!: string;
    width!: number;
    height!: number;
    dtb!: number;
    
    product!: Product;

    names!: string [];
    photos!: string [];
    products!: Product[];


    constructor() {
        
    }

    ngOnInit() {
        this.id = 123;
        this.username = 'acc1';
        this.status = false;
        this.phone = '1234'
        this.price = 3.2;
        this.photo = 'a.png';
        this.width = 100;
        this.height = 100; 
        this.dtb = 3.2;
        this.names = [
            'Name 1', "Name 2", "Name 3", "Name 4"
        ]
        this.photos = [
            'a.png', "b.png", "c.png"
        ]

        this.product = {
            id: 1,
            name: 'acc1',
            price: 5.4,
            quantity: 20,
            status: true,
            photo: 'b.png',
            category: ""
        }

        this.products = [
            {
                id: 1,
                name: 'acc1',
                price: 5.4,
                quantity: 20,
                status: true,
                photo: 'b.png',
                category: ""
            },
            {
                id: 2,
                name: 'acc2',
                price: 5.4,
                quantity: 20,
                status: true,
                photo: 'c.png',
                category: ""
            },
            {
                id: 3,
                name: 'acc3',
                price: 8.12,
                quantity: 28,
                status: false,
                photo: 'c.png',
                category: ""
            }
        ]
    }

}