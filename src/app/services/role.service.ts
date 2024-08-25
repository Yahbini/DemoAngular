import { Injectable } from "@angular/core";
import { Role } from "../entities/role.entity";

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    roles!: Role[];

    constructor() {
        this.roles = [
            {
                id: 1,
                name: 'Admin'
            },
            {
                id: 2,
                name: 'User'
            },
            {
                id: 3,
                name: 'Manage'
            }
        ]
    }

    findAll() {
        return this.roles;
    }
}