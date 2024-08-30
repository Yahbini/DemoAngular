import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { __param } from 'tslib';
import { CategoryAPI } from '../../../entities/categoryapi.entity';

@Component({
  standalone: true,
  templateUrl: 'categoryEdit.component.html',
  host: {
    'collision-id': 'CategoryEditComponent',
  },
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
})
export class CategoryEditComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((p) => {
      let id = p.get('id');
      this.categoryService.findById(id).then(
        (res) => {
          let category = res as CategoryAPI;
          this.formGroup = this.formBuilder.group({
            id: category.id,
            name: category.name,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  save() {
    let category = this.formGroup.value as CategoryAPI;
    this.categoryService.edit(category).then(
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
