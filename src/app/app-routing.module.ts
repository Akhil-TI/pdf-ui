import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PdfJsComponent } from './components/ng2-pdf-js/ng2-pdf-js.component';
import { Ng2Component } from './components/ng2/ng2.component';
import { NgxComponent } from './components/ngx/ngx.component';

const routes: Routes = [
  { path: 'ng2-ui', component: Ng2Component },
  { path: 'ngx-ui', component: NgxComponent },
  { path: 'pdfJs', component: Ng2PdfJsComponent },
  { path: '**', component: Ng2PdfJsComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
