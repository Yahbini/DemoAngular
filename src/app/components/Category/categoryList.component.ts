import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"; 
import { CategoryService } from "../../services/category.service";
import { CategoryAPI } from "../../entities/categoryapi.entity";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'categoryList.component.html',
    host: {
        'collision-id': 'CategoryListComponent'
    }
})

export class CategoryListomponent implements OnInit{

    categories: CategoryAPI[]

    constructor(
        private categoryService: CategoryService
    ) {     
    }

    ngOnInit() {
        this.categoryService.findall().then(
            res => {
                this.categories =  res as CategoryAPI[];
            }, 
            error => {
                console.log(error);
                
            }
        )
    }
}