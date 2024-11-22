import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class locationService{
    url:string = 'https://rickandmortyapi.com/api/location'

    constructor(private http: HttpClient) {}

    getLocations(): Observable<any> {
        return this.http.get(`${this.url}`)
    }

    getUniqueLocation(id: number): Observable<any>{
        return this.http.get(`${this.url}/${id}`)
    }
}

