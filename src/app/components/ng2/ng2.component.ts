import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  PDFProgressData,
  PdfViewerComponent,
  PDFDocumentProxy,
  PDFSource,
} from 'ng2-pdf-viewer';

declare var jQuery: any;

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Ng2Component implements OnInit {
  pdfSrc: any | string | PDFSource | ArrayBuffer =
    // 'https://www.africau.edu/images/default/sample.pdf';
    'assets/pdf-test.pdf';
  // 'https://drive.google.com/file/d/1-0dGYcgBcK4yxPdviyOFEs3NtfMJzLKv';

  error: any;
  page = 1;
  rotation = 0;
  zoom = 1.0;
  originalSize = true;
  pdf: any;
  renderText = true;
  progressData!: PDFProgressData;
  isLoaded = false;
  stickToPage = false;
  showAll = true;
  autoresize = true;
  fitToPage = false;
  zoomScale = false;
  outline: any[] = [];
  isOutlineShown = false;
  pdfQuery = '';
  totalPages: number = 0;
  disableCopy = 0;

  @ViewChild(PdfViewerComponent)
  private pdfComponent!: PdfViewerComponent;

  ngOnInit(): void {
    // fetch(`http://172.27.80.1:8788/api/books/1`).then((res) => {
    //   console.log(res.body);
    //   res.blob().then((myBlob) => {
    //     const objectURL = URL.createObjectURL(myBlob);
    //     this.pdfSrc = objectURL;
    //   });
    // });
  }

  openLocalFile() {
    jQuery('#file').trigger('click');
  }

  toggleOutline() {
    this.isOutlineShown = !this.isOutlineShown;
  }

  incrementPage(amount: number) {
    this.page += amount;
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }

  rotate(angle: number) {
    this.rotation += angle;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  /**
   * Render PDF preview on selecting file
   */
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  /**
   * Get pdf information after it's loaded
   * @param pdf
   */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.isLoaded = true;
    this.totalPages = pdf.numPages;

    this.loadOutline();
  }

  /**
   * Get outline
   */
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }

  /**
   * Handle error callback
   *
   * @param error
   */
  onError(error: any) {
    this.error = error; // set error

    if (error.name === 'PasswordException') {
      const password = prompt(
        'This document is password protected. Enter the password:'
      );

      if (password) {
        this.error = null;
        this.setPassword(password);
      }
    }
  }

  setPassword(password: string) {
    let newSrc;
    if (this.pdfSrc instanceof ArrayBuffer) {
      newSrc = { data: this.pdfSrc };
    } else if (typeof this.pdfSrc === 'string') {
      newSrc = { url: this.pdfSrc };
    } else {
      newSrc = { ...this.pdfSrc };
    }
    newSrc = { ...newSrc, password: password };
    this.pdfSrc = newSrc;
  }

  /**
   * Pdf loading progress callback
   * @param {PDFProgressData} progressData
   */
  onProgress(progressData: PDFProgressData) {
    console.log(progressData);
    this.progressData = progressData;
    this.isLoaded = false;
    this.error = null; // clear error
  }

  getInt(value: number): number {
    return Math.round(value);
  }

  /**
   * Navigate to destination
   * @param destination
   */
  navigateTo(destination: any) {
    // this.pdfComponent.pdfLinkService.navigateTo(destination);
  }

  /**
   * Scroll view
   */
  scrollToPage() {
    this.pdfComponent.pdfViewer.scrollPageIntoView({
      pageNumber: 3,
    });
  }

  /**
   * Page rendered callback, which is called when a page is rendered (called multiple times)
   *
   * @param {CustomEvent} e
   */
  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  searchQueryChanged(newQuery: any) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.eventBus.dispatch('find', {
        caseSensitive: false,
        findPrevious: undefined,
        highlightAll: true,
        phraseSearch: true,
        query: this.pdfQuery,
      });
    } else {
      this.pdfComponent.eventBus.dispatch('find', {
        caseSensitive: false,
        findPrevious: undefined,
        highlightAll: true,
        phraseSearch: true,
        query: this.pdfQuery,
      });
    }
  }
}
