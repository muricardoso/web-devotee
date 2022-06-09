import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedComponent } from './logged.component';


const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('src/app/pages/user-configurations/user-configurations.module').then(m => m.UserConfigurationsModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }