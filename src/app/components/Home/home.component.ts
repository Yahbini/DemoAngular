import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'home.component.html',
    host: {
        'collision-id': 'HomeComponent'
    }
})

export class HomeComponent implements OnInit{



    constructor() {
        
    }

    ngOnInit() {
        
    }

}