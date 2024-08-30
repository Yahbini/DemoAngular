import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router"; 
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryService } from "../../../services/category.service";
import { CategoryAPI } from "../../../entities/categoryapi.entity";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'categoryAdd.component.html',
    host: {
        'collision-id': 'CategoryAddComponent'
    },
    imports: [
        FormsModule,
        RouterLink,
        ReactiveFormsModule,
        
    ]
})

export class CategoryAddomponent implements OnInit{

   formGroup: FormGroup;

    constructor(
        private categoryService: CategoryService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {     
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            name: ''
        })
    }

    save() {
        let category = this.formGroup.value as CategoryAPI;
        this.categoryService.create(category).then(
            res => {
                if(res['result']) {
                    this.router.navigate(['/category-list'])
                } else {
                    alert('Failed')
                }
                console.log(res);
                
            },
            error => {
                console.log(error);
                
            }
        );
        
    }   

    
}