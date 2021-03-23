import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiGetService } from 'src/app/services/apiGet.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = 'Site Status Tracker';
  count: number = 0;
  amount: number; 
  results: any; 

  constructor(
    private http: HttpClient,
    private apiGet: ApiGetService

  ) {}

  ngOnInit(): void {
    this.count = 0; 
  }

  counter() {
    this.count++;
  }

  decrease() {
    this.count--; 
  }

  currencyConverter(e){
    const rate = 0.74; 
    const {value} = e.target;
    this.amount = value * rate;
    
  }

  sendData() {
    const headers = { 'Accept': 'application/json;odata=verbose', 'Content-Type': 'application/json;odata=verbose' };
    const body = {
      url: "https://youtube.com"
    };
    this.http.post<any>('http://localhost:3000/sites', body, { headers }).subscribe(data => {
      console.log('Sending data...');
      console.log('data: ', data);
    }, err => {
      console.log('Error..', err);
    });
  }
  addUser() {
    const body = {
      name: "Sunny",
      email: "sun@gmail.com",
      password: "testpass12"
    };
    this.http.post<any>('http://localhost:3000/users', body).subscribe(data => {
      console.log('Sending data...');
      console.log('data: ', data);
    }, err => {
      console.log('Error in Registering..');
    });
  }
  handleGet(){
    this.apiGet.getData().pipe(
      map(res=>{
       this.results= JSON.stringify(res);
      })
    ).subscribe()
  }

}
