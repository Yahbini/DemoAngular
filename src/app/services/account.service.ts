import { Injectable } from "@angular/core";
import { Account } from "../entities/account.entity";


@Injectable({
    providedIn: 'root'
})

export class AccountService {
   accounts!: Account[];

   constructor() {
        this.accounts = [
            {
                username: "acc1",
                password: "123",
                fullName: "abc"
            },
            {
                username: "acc2",
                password: "123",
                fullName: "abc"
            },
            {
                username: "acc3",
                password: "123",
                fullName: "abc"
            },
        ]
   }

   login(username: string, password: string) {
    return this.accounts.some(a => a.username == username && a.password == password)
   }

   findByUsername(username: string) {
    return this.accounts.find(a => a.username == username)
   }
}