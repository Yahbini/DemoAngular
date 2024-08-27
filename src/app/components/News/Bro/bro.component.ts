import { Component, Input, OnInit } from "@angular/core";
import { BroService } from "../../../services/bro.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'bro-component',
    standalone: true,
    templateUrl: 'bro.component.html',
    host: {
        'collision-id': 'broComponent'
    }, 
    imports: [
        FormsModule
    ]
})

export class BroComponent implements OnInit{

    fullname: string;

    constructor(private  broService: BroService) {}

    ngOnInit() {
        this.fullname = '';
    }

    hi() {
        this.broService.updateFullname(this.fullname);
    }
}