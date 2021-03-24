import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})

export class randomUserService {
    constructor(private http: HttpClient){

    }

    getRandomUser(): Observable<any>{
        return this.http.get<any>("https://randomuser.me/api").pipe(
            catchError((error)=>throwError(error || error.message))
        ) 
    }
}

