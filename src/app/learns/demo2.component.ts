import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Category } from "../entities/category.entity";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo2.component.html',
    imports: [
        FormsModule
    ]
})
// Data binding
export class Demo2Component implements OnInit{

    fullName!: string;
    gender!: string;
    status!: boolean;
    categoryId!: string;
    categoryId2!: string;
    categories!: Category[];



    ngOnInit() {
        this.fullName = "abc";
        this.gender = '';
        this.status = true;
        this.categoryId = '3';
        this.categoryId2 = '2'
        this.categories = [
            {
                id: 1,
                name: "Category 1"
            },
            {
                id: 2,
                name: "Category 2"
            },
            {
                id: 3,
                name: "Category 3"
            },
            {
                id: 4,
                name: "Category 4"
            }

        ]    
    }

}