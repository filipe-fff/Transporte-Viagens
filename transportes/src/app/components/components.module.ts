import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportContainerComponent } from './transport-container/transport-container.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlightTransportComponent } from './flight-transport/flight-transport.component';
import { TransportInfosItemComponent } from './transport-infos-item/transport-infos-item.component';
import { FlightTransportEditComponent } from './flight-transport-edit/flight-transport-edit.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    TransportContainerComponent,
    FlightTransportComponent,
    TransportInfosItemComponent,
    FlightTransportEditComponent,
    ButtonsContainerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    HttpClientModule,
    NgxMaskDirective,
  ],
  exports: [
    TransportContainerComponent,
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class ComponentsModule { }
