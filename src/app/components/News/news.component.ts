import { Component, Input, OnInit } from "@angular/core";
import { ChildComponent } from "./Child/child.component";
import { Child2Component } from "./Child2/child2.component";
import { BroComponent } from "./Bro/bro.component";
import { Bro2Component } from "./Bro2/bro2.component";

interface CalculationResult {
    area: number;
    perimeter: number;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'news.component.html',
    host: {
        'collision-id': 'NewsComponent'
    },
    imports: [
        ChildComponent,
        Child2Component,
        BroComponent,
        Bro2Component
    ]
})
export class News implements OnInit{

    title: string;
    result: string;
    result2: CalculationResult ={ area: 0, perimeter: 0 };


    constructor() {
        
    }

    ngOnInit() {
        this.title="ABC";
        this.result = "";
    }

    getDataFromChild(fullname: string) {
        this.result = 'Hello ' + fullname
    }

    getCalculateFromChild(data: any) {
        this.result2 = data;
    }
}