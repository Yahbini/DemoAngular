import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router"; 
import { CategoryService } from "../../services/category.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CategoryAPI } from "../../entities/categoryapi.entity";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'categoryList.component.html',
    host: {
        'collision-id': 'CategoryListComponent'
    },
    imports: [
        FormsModule,
        RouterLink,
        CommonModule
    ]
})

export class CategoryListComponent implements OnInit {

    categories: CategoryAPI[];
    keyword: string;
  
    constructor(
      private categoryService: CategoryService
    ) {}
    ngOnInit(): void {
  
      this.keyword="";
      
      this.categoryService.findall().then(
        //Khi có kết quả thì then
        (res) => {
          this.categories = res as CategoryAPI[];
        },
        (error) => {
          console.log(error);
        }
      );
    }
    search(){
      this.categoryService.findKeyWordDTO(this.keyword).then(
        //Khi có kết quả thì then
        (res) => {
          this.categories = res as CategoryAPI[];
        },
        (error) => {
          console.log(error);
        }
      );
    }
    delete(id: any){
      let result = confirm('Are You sure?');
      if(result){
        this.categoryService.delete(id).then(
          res => {
            if(res['result']){
              this.ngOnInit();
            }else{
              alert('Delete Failed');
            }
          },
          error => {
            alert('delete failed');
          }
        );
  
      }
    }
    
  }