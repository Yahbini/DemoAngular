import { Injectable } from "@angular/core";
import { Account } from "../entities/account.entity";
import { Country } from "../entities/country.entity";


@Injectable({
    providedIn: 'root'
})

export class CountryService {

    countries!: Country[];

    constructor() {
        this.countries = [
            {
                id: 1,
                name: 'Country 1',
                cities: [
                    {
                        id: 1,
                        name: 'City 1',
                        area: 10
                    },
                    {
                        id: 2,
                        name: 'City 2',
                        area: 50
                    },
                    {
                        id: 3,
                        name: 'City 3',
                        area: 10
                    },
                ]
                
            },
            {
                id: 2,
                name: 'Country 2',
                cities: [
                    {
                        id: 1,
                        name: 'City 1',
                        area: 10
                    },
                    {
                        id: 2,
                        name: 'City 2',
                        area: 50
                    },
                ]
                
            },
            {
                id: 3,
                name: 'Country 3',
                cities: [
                    {
                        id: 2,
                        name: 'City 2',
                        area: 50
                    },
                    {
                        id: 3,
                        name: 'City 3',
                        area: 10
                    },
                    {
                        id: 4,
                        name: 'City 4',
                        area: 150
                    },
                ]
                
            },
        ]
    }

    findAll() {
        return this.countries;
    }

   findById(id: number) {
    return this.countries.find(c => c.id == id);
   }
}