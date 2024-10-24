import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportContainerComponent } from './transport-container/transport-container.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TransportContainerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    TransportContainerComponent,
  ]
})
export class ComponentsModule { }
