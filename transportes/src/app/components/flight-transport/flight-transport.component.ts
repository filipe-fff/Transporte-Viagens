import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IFlightFormResponse } from '../../interfaces/flight-form/flight-form-response.interface';
import { onPrepareFlightsFormDisplay } from '../../utils/prepare-flights-form-display';

@Component({
  selector: 'app-flight-transport',
  templateUrl: './flight-transport.component.html',
  styleUrl: './flight-transport.component.scss'
})
export class FlightTransportComponent implements OnChanges {
  @Input({ required: true }) flightForm!: IFlightFormResponse;
  flightFormDisplay: IFlightFormResponse = {} as IFlightFormResponse;


  ngOnChanges(changes: SimpleChanges): void {
      if (changes["flightForm"] && changes["flightForm"].currentValue) {
        onPrepareFlightsFormDisplay(this.flightForm, (flightDisplay) => {
          this.flightFormDisplay = flightDisplay;
        });
      }
  }

  get economy(): string | null {
    return this.flightFormDisplay.price.economy;
  }

  get business(): string | null {
    return this.flightFormDisplay.price.business;
  }

  get firstClass(): string | null {
    return this.flightFormDisplay.price.firstClass;
  }
}