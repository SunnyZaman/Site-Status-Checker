import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpClient
  ) {}
  title = 'user-registration';
  sendData(){
    // const headers = { 'Accept': 'application/json;odata=verbose', 'Content-Type': 'application/json;odata=verbose' };
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
