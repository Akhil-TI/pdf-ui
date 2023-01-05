import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng2-pdf-js',
  templateUrl: './ng2-pdf-js.component.html',
  styleUrls: ['./ng2-pdf-js.component.scss'],
})
export class Ng2PdfJsComponent implements OnInit {
  // path = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  // path = 'assets/pdf-test.pdf';
  path = 'pdf-test.pdf';
  @ViewChild('externalPdfViewer') public externalPdfViewer:any;
  constructor() {}
  public openPdf() {
    console.log('opening pdf in new tab!');
    this.externalPdfViewer.pdfSrc = 'pdf-test.pdf';
    // this.externalPdfViewer.refresh();
  }

  ngOnInit(): void {
    // this.openPdf()
  }
}
