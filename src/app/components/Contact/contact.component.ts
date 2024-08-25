import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'contact.component.html',
    host: {
        'collision-id': 'ContactComponent'
    },
    imports: [
        RouterLink,
        RouterOutlet
    ]
})

export class ContactComponent implements OnInit{



    constructor() {
        
    }

    ngOnInit() {
        
    }

}