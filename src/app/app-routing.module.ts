import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent} from './welcome/welcome.component';
import {AnalyserComponent} from './analyser/analyser.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {
    path:'welcome',
    component: WelcomeComponent
  },
  {
    path:'analyser',
    component: AnalyserComponent
  },
  {
    path:'result/:text',
    component: ResultComponent
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
