import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx.component.html',
  styleUrls: ['./ngx.component.css']
})
export class NgxComponent implements OnInit {
  pdfSrc!: string;

  constructor() { }

  ngOnInit(): void {
    fetch(`http://172.27.80.1:8788/api/books/1`).then((res) => {
      console.log(res.body);
      res.blob().then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        this.pdfSrc = objectURL;
      });
    });
  }

}
