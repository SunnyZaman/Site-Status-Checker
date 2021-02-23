import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
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

}
