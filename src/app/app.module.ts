import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { MatFormFieldModule , MatButtonModule , MatCardModule ,MatMenuModule , MatToolbarModule ,MatIconModule ,
  MatSidenavModule ,MatInputModule, MatOptionModule , MatSelectModule} from '@angular/material';
import { AnalyserComponent } from './analyser/analyser.component';
import { ResultComponent } from './result/result.component';

import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CountriesServies} from './services/countries.http.servies';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AnalyserComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [CountriesServies],
  bootstrap: [AppComponent]
})
export class AppModule { }
