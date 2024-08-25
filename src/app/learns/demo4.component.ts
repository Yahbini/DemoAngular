import { Component, numberAttribute, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AccountService } from "../services/account.service";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo4.component.html',
    imports: [
        FormsModule
    ] // dùng với data biding
})
// injection
export class Demo4Component implements OnInit{

    photo!: string;
    width: number = 300;
    height: number = 300;
    a!: string;
    area!: number;
    perimeter!: number;
    username!: string;
    password!: string;
    msg!: string;

    constructor(
        private accountService: AccountService
    ) {}

    ngOnInit() {
        this.photo = 'images/a.png';
        this.a = '';
        this.password = '';
        this.username = '';
        this.msg = '';
    }

    hello() {
        alert("Hello world")
    }

    changeBg(event: any) {
        var color = event.target.value;
        console.log(color);  
        document.bgColor = color
    }

    changePhoto(event: any) {
        this.photo = event.target.src;
        this.area = 0;
        this.perimeter = 0;
    }

    resize(event: any) {
        let value = event.target.value.split("*");
        this.width = value[0];
        this.height = value[1];
    }

    calculate() {
        let a = parseFloat(this.a);

        if(this.a.length == 0) {
            alert('Enter a')
        } else {
            if(isNaN(a)) {
                alert("Enter number")
            }
        }
       
        this.area = a * a;
        this.perimeter = a * 4;
    }

    login() {
        if(this.accountService.login(this.username, this.password)) {
            this.msg = "Valid";
        } else {
            this.msg = "Invalid";
        }
    }

    clear() {
        this.username = '';
        this.password = '';
    }

}