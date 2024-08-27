import { Injectable } from "@angular/core";
import { Cert } from "../entities/cert.entity";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class BaseURLService {
    public BASE_URL = 'http://localhost:5108/api'
}