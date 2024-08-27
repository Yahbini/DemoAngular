import { Injectable } from "@angular/core";
import { Data } from "../entities/data.entity";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BroService {
    private subject = new Subject<string>();
    getFullname$ = this.subject.asObservable();

    updateFullname(fullname: string) {
        this.subject.next(fullname)
    } 
}