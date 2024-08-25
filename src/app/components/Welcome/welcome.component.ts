import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'welcome.component.html',
    host: {
        'collision-id': 'WelcomeComponent'
    },
    imports: [
        RouterLink, FormsModule
    ]
})

export class welcomeComponent implements OnInit{

    username!: string;

    constructor(
        private router: Router
    ) {
        
    }



    ngOnInit() {
        if (localStorage.getItem('username')!=null) {
            this.username = localStorage.getItem('username') ?? ''
        }

    }

    logout() {
        localStorage.removeItem('username');
        this.router.navigate(['login'])
    }
}