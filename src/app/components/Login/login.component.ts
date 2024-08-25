import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'login.component.html',
    host: {
        'collision-id': 'LoginComponent'
    },
    imports: [
        RouterLink, FormsModule
    ]
})

export class LoginComponent implements OnInit{

    username!: string;
    password!: string;

    constructor(
        private accountService: AccountService,
        private router: Router
    ) {
        
    }



    ngOnInit() {
        

    }

    login() {
        if(this.accountService.login(this.username, this.password)) {
            localStorage.setItem('username', this.username);
            this.router.navigate(['welcome']);
        } else {
            alert('Fail')
        }
    }
}