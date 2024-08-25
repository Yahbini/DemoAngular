import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"; 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'aboutus.component.html',
    host: {
        'collision-id': 'AboutUsComponent'
    }
})

export class AboutUsComponent implements OnInit{



    constructor(
        private router: Router
    ) {     
    }

    ngOnInit() {
        
    }

    redirectToHome() {
        this.router.navigate(['home'])
    }

    redirectToNewDetails() {
        this.router.navigate(['news-details', {id: 433, username: 'acc2'}])
    }
}