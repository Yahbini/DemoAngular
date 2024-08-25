import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo8.component.html',
    styleUrl: "demo8.component.css",
    imports: [
        FormsModule,
        ReactiveFormsModule
    ] 
})

export class Demo8Component implements OnInit{

    registerForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(10),
                this.checkUsernameValidator
            ]],
            password: ['', [
                Validators.required,
                Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$')
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            website: ['', [
                Validators.pattern(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)
            ]],
            age: ['', [
                Validators.required,
                Validators.min(18),
                Validators.max(60),
                Validators.pattern('^[0-9]+$')
            ]],
        })
    }

    // * Custom validator

    checkUsernameValidator(control: AbstractControl) {
        let username = control.value;
        if(username == 'abc') {
            return {
                exist: true
            }
        }

        return null;
    }

    save() {
        console.log('saved');
    }
    

}