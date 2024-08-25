import { Injectable } from "@angular/core";
import { Cert } from "../entities/cert.entity";

@Injectable({
    providedIn: 'root'
})
export class CertService {
    certs!: Cert[];

    constructor() {
        this.certs = [
            {
                id: 1,
                name: 'Cert 1'
            },
            {
                id: 2,
                name: 'Cert 2'
            },
            {
                id: 3,
                name: 'Cert 3'
            },
            {
                id: 4,
                name: 'Cert 4'
            }
        ]
    }

    findAll() {
        return this.certs;
    }
}