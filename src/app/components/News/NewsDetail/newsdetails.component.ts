import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'newsdetailsPage.component.html',
    host: {
        'collision-id': 'NewsPageComponent'
    }
})

export class NewsDetailComponent implements OnInit{

    constructor(
        private activatedRoute: ActivatedRoute
    ) {
        
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(p => {
            let id = p.get('id');
            let username = p.get('username')
            console.log("id: " + id);
            console.log("username: " + username);
            
            
        })
    }

}