import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'profile.component.html',
    host: {
        'collision-id': 'ProfileComponent'
    },
    imports: [
        ReactiveFormsModule, FormsModule
    ]
})

export class ProfileComponent implements OnInit{

    profileForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService
    ) {
        
    }



    ngOnInit() {
        let account = this.accountService.findByUsername(localStorage.getItem('username') ?? '')
        this.profileForm = this.formBuilder.group({
            username: account?.username,
            password: '',
            fullName: account?.fullName
        })

    }

    save() {

    }

}