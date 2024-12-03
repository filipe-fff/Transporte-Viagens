import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StatesList } from '../../types/states-list';
import { FormControl, FormControlStatus, FormGroup } from '@angular/forms';
import { onStatesListFilter } from '../../utils/states-list-filter';

@Component({
  selector: 'app-flight-transport-edit',
  templateUrl: './flight-transport-edit.component.html',
  styleUrl: './flight-transport-edit.component.scss'
})
export class FlightTransportEditComponent implements OnChanges {
    @Input({ required: true }) statesList: StatesList = [];
    @Input({ required: true}) flightForm: FormGroup = {} as FormGroup;

    statesListFilter: StatesList = [];

    ngOnInit(): void {
      this.watchStateValueChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.statesListFilter = this.statesList;
    }

    watchStateValueChanges() {
      this.state.valueChanges.subscribe((value) => this.onStateValueChanges(value));
    }

    onStateValueChanges(state: string) {
      if (!state) {
        this.statesListFilter = this.statesList;
        return;
      }
      this.statesListFilter = onStatesListFilter(state, this.statesList);
    }

    get price(): FormGroup {
      return this.flightForm.get("price") as FormGroup;
    }

    get location(): FormGroup {
      return this.flightForm.get("location") as FormGroup;
    }

    get date(): FormGroup {
      return this.flightForm.get("date") as FormGroup;
    }

    get economy(): FormControl {
       return this.price.get("economy") as FormControl;
    }

    get business(): FormControl {
      return this.price.get("business") as FormControl;
    }

    get firstClass(): FormControl {
      return this.price.get("firstClass") as FormControl;
    }

    get state(): FormControl {
      return this.location.get("state") as FormControl;
    }

    get dateMin(): FormControl {
      return this.date.get("dateMin") as FormControl;
    }

    get dateMax(): FormControl {
      return this.date.get("dateMax") as FormControl;
    }
}