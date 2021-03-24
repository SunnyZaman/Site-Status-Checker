import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: "root",
  })
  export class ApiGetService {
    constructor(
        private http: HttpClient
    ) {
      }
      getData(): Observable<any> {
        return this.http.get<any>("https://randomuser.me/api").pipe(
          catchError((error) =>throwError(error || error.message))
        );
      }
  }