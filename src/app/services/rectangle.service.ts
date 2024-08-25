import { Injectable } from "@angular/core";
import { CalculateService } from "./calculate.service";

@Injectable({
    providedIn: 'root'
})
export class RectangleService {
    constructor(private calculate: CalculateService) {}

    area(a: number, b: number): number {
        return this.calculate.mul(a, b);
    }

    perimeter(a: number, b: number): number {
        return this.calculate.mul(this.calculate.add(a,b), 2);
    }
}