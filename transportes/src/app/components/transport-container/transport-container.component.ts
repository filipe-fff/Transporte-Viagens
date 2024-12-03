import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { take } from 'rxjs';
import { FlightsList } from '../../types/flights-list';
import { StatesService } from '../../services/states.service';
import { FlightController } from './flight-controller';
import { StatesList } from '../../types/states-list';
import { IFlightFormResponse } from '../../interfaces/flight-form/flight-form-response.interface';
import { dateObjToDateString } from '../../utils/date-obj-to-date-string';

@Component({
  selector: 'app-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrl: './transport-container.component.scss'
})
export class TransportContainerComponent extends FlightController implements OnInit {
  _flightsService = inject(FlightsService);
  _statesService = inject(StatesService);

  isInEditModel: boolean = true;
  flightFormDisplay: IFlightFormResponse = {} as IFlightFormResponse;
  statesList: StatesList = [];
  flightsList: FlightsList = [];
  flightsListCount: number = 0;

  ngOnInit(): void {
      this.getStatesList();
      this.createFlightForm();
      this.onFlightForm();
      this.watchFlightValueChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onFlightForm() {
    // this.flightForm.valueChanges.subscribe(this.onFlightFormValueChanges);
  }

  watchFlightValueChanges() {
    this.flightForm.valueChanges.subscribe(() => this.onFlightFormValueChanges());
  }

  onFlightFormValueChanges() {
      if (this.flightForm.invalid) return;

      this.onFlightFormToFlightDisplay();
  }

  onFlightFormToFlightDisplay() {
    this.flightFormDisplay = {
        price: {
            economy: this.economy.getRawValue(),
            business: this.business.getRawValue(),
            firstClass: this.firstClass.getRawValue(),
        },
        location: {
            state: this.state.getRawValue(),
        },
        date: {
            dateMin: dateObjToDateString(this.dateMin.getRawValue()),
            dateMax: dateObjToDateString(this.dateMax.getRawValue()),
        },
    };
  }

  onCancelButton() {
    this.flightForm.reset();
  }

  onFindButton() {
    this.flightForm.markAllAsTouched();

    if (this.flightForm.invalid) return;

    this.getFlightsList();
    this.isInEditModel = false;
  }

  onEditButton() {
    this.isInEditModel = true;
  }

  getStatesList() {
    this._statesService.getStates("Brazil").pipe(take(1)).subscribe((statesResponse) => this.statesList = statesResponse);
  }

  getFlightsList() {
    
    this._flightsService.getFlightsLit(
      this.state.value,
      dateObjToDateString(this.dateMin.value),
      dateObjToDateString(this.dateMax.value),
      this.economy.value,
      this.business.value,
      this.firstClass.value,
    ).subscribe((flightsResponse) => {
      if (flightsResponse) {
        this.flightsList = flightsResponse;
        this.flightsListCount = this.flightsList.length;
      }
    });
  }
}