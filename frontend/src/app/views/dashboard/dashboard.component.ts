import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError, concat } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { ApiGetService } from 'src/app/services/apiGet.service';
import { randomUserService } from 'src/app/services/randomUser.service';
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
  randomUser: any; 

  constructor(
    private http: HttpClient,
    private apiGet: ApiGetService, 
    private randomUserService: randomUserService
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
    const getData = this.apiGet.getData().pipe(
      map(res=>{
        console.log("Getting data...");   
       this.results= JSON.stringify(res);
      })
    );
    const randomUser =this.randomUserService.getRandomUser().pipe(
      map(res=>{
        console.log("Getting random user data...");   
       this.randomUser= JSON.stringify(res);
      }),
      finalize(()=>{
        console.log("finalize")
      })
    );
    concat(getData, randomUser)
    .subscribe({
      complete:()=>{
        console.log("Completed");  
      }
    })
  }

  getRandomUser(): void{
    this.randomUserService.getRandomUser().subscribe(
      data => this.randomUser = JSON.stringify(data)
    )
  }
}
