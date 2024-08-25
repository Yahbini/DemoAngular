import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo9.component.html',
    imports: [
        RouterLink,
        RouterOutlet
    ] 
})

export class Demo9Component implements OnInit{

    registerForm!: FormGroup;
    ls = localStorage;


    constructor(
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
      this.ls  = localStorage  
    } 

    

    save() {
        console.log('saved');
    }
    

}