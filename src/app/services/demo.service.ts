import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DemoService {
    hello(): string {
        return 'Hello'
    }

    hi(fullName: string): string {
        return 'Hi ' + fullName;
    }

    add(a: number, b: number) : number {
        return a + b;
    }
}