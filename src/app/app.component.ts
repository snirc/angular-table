import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    data = [];

    constructor(private http: Http) {
        this.http.get('data/data.json')
                .subscribe(res => this.data = res.json());
    }

    settings = {
            columns: {
              id: {
                title: 'ID'
              },
              name: {
                title: 'Full Name'
              },
              username: {
                title: 'User Name'
              },
              email: {
                title: 'Email'
              }
            }
          };




    ngOnInit() {
    }

  }
