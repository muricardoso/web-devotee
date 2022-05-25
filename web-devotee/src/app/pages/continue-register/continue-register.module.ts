import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinueRegisterComponent } from './continue-register.component';
import { RouterModule, Routes } from '@angular/router';
import { ContinueRegisterRoutingModule } from './continue-register-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterDataComponent } from './components/register-data/register-data.component';

@NgModule({
  declarations: [
    ContinueRegisterComponent,
    RegisterDataComponent,
  ],
  imports: [
    CommonModule,
    ContinueRegisterRoutingModule,
    SharedModule,
  ]
})
export class ContinueRegisterModule { }
