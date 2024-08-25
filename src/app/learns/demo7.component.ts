import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CertService } from "../services/cert.service";
import { RoleService } from "../services/role.service";
import { Cert } from "../entities/cert.entity";
import { Role } from "../entities/role.entity";
import { Employee } from "../entities/employee.entity";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'demo7.component.html',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ] 
})

export class Demo7Component implements OnInit{

    // đem đối tượng map vào form
    registerForm!: FormGroup;
    
    certs!: Cert[];
    roles!: Role[];

    constructor(
        private formBuilder: FormBuilder,
        private certService: CertService,
        private roleService: RoleService,

    ) 
    {}

    ngOnInit() {
        this.certs = this.certService.findAll();

        this.roles = this.roleService.findAll();

        this.registerForm = this.formBuilder.group({
                username: 'acc1',
                password: '',
                description: '',
                gender: '',
                certId: '2',
                status: true,
                roleId: '1',
                address: this.formBuilder.group({
                    street: '',
                    ward: ''  
                }),
                id: '123'
        })
    }

    save() {
        console.log(this.registerForm.value);
        console.log(this.registerForm.value.username);
        
        let employee: Employee = this.registerForm.value as Employee;
        console.log('username: ' + employee.username);
        console.log('username: ' + employee.password);
        console.log('description: ' + employee.description);
        console.log('gender: ' + employee.gender);
        console.log('cert: ' + employee.certId);
        console.log('status: ' + employee.status);
        console.log('roleId: ' + employee.roleId);
        console.log('ward: ' + employee.address.ward);
        console.log('street: ' + employee.address.street);
        console.log('id: ' + employee.id);




    }
    

}