import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { Ng2Component } from './components/ng2/ng2.component';
import { NgxComponent } from './components/ngx/ngx.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { Ng2PdfJsComponent } from './components/ng2-pdf-js/ng2-pdf-js.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, Ng2Component, NgxComponent, Ng2PdfJsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    PdfJsViewerModule,
    InlineSVGModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
