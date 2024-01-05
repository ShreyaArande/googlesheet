import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css',
})
export class PreviewComponent implements OnInit {
  constructor(private http: HttpClient) {}
  range = 'Sheet1';
  spreadsheetId = '16KFhONQK9W4_-rOTWlXPyZYAe4HyAwOy4Xyvvl2ldB8';
  apiKey = 'AIzaSyCg8Xa6Kqq4ziNmjDHBlfTPiFqNhHJFGME';
  data:any

  getData() {
    this.http
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${this.range}?key=${this.apiKey}`
      )
      .subscribe(
        (res) => {
          console.log(res, 'response from sheet');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.getData();
  }
}
