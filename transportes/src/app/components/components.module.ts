import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportContainerComponent } from './transport-container/transport-container.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlightTransportComponent } from './flight-transport/flight-transport.component';
import { TransportInfosItemComponent } from './transport-infos-item/transport-infos-item.component';
import { FlightTransportEditComponent } from './flight-transport-edit/flight-transport-edit.component';



@NgModule({
  declarations: [
    TransportContainerComponent,
    FlightTransportComponent,
    TransportInfosItemComponent,
    FlightTransportEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  exports: [
    TransportContainerComponent,
  ]
})
export class ComponentsModule { }
