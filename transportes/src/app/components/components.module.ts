import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TransportContainerComponent } from './transport-container/transport-container.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlightTransportComponent } from './flight-transport/flight-transport.component';
import { TransportInfosItemComponent } from './transport-infos-item/transport-infos-item.component';
import { FlightTransportEditComponent } from './flight-transport-edit/flight-transport-edit.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import localePT from '@angular/common/locales/pt';
import { FlightsCardListComponent } from './flights-card-list/flights-card-list.component';
import { AirportCardComponent } from './flights-card-list/airport-card/airport-card.component';
import { IconsDescriptionsComponent } from './icons-descriptions/icons-descriptions.component';
import { PipesModule } from '../pipes/pipes.module';

registerLocaleData(localePT, "pt-br");


@NgModule({
  declarations: [
    TransportContainerComponent,
    FlightTransportComponent,
    TransportInfosItemComponent,
    FlightTransportEditComponent,
    ButtonsContainerComponent,
    FlightsCardListComponent,
    AirportCardComponent,
    IconsDescriptionsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    PipesModule,
    NgxMaskDirective,
  ],
  exports: [
    TransportContainerComponent,
  ],
  providers: [
    provideNgxMask(),
    {
      provide: LOCALE_ID,
      useValue: "pt-br",
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL",
    }
  ]
})
export class ComponentsModule { }
