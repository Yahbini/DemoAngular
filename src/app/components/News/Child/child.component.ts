import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'child-component',
    standalone: true,
    templateUrl: 'child.component.html',
    host: {
        'collision-id': 'ChildComponent'
    }
})

export class ChildComponent implements OnInit{

    @Input()
    id: number;

    @Input()
    title: string;

    @Input()
    details: string;


    constructor() {
        
    }

    ngOnInit() {
        
    }

}