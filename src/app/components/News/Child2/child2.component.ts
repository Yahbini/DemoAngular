import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'child2-component',
    standalone: true,
    templateUrl: 'child2.component.html',
    host: {
        'collision-id': 'Child2Component'
    },
    imports: [
        FormsModule
    ]
})

export class Child2Component implements OnInit{

    fullname: string;
    a: string;

    @Output()
    updateFullname = new EventEmitter<string>();

    @Output()
    updateCalculate = new EventEmitter<{area: number, perimeter: number}>();

    constructor() {
        
    }

    ngOnInit() {
        this.fullname = '';
        this.a = '';
    }

    hello() {
        this.updateFullname.emit(this.fullname);
    }

    calculate() {
        let canh = parseFloat(this.a);
        let area = canh * canh;

        let perimeter = canh*4;
        this.updateCalculate.emit({
            area: area,
            perimeter: perimeter
        })
    }

}