import { inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

export class FlightController {
    _fb: FormBuilder = inject(FormBuilder);
    flightForm: FormGroup = {} as FormGroup;

    createFlightForm() {
        this.flightForm = this._fb.group({
            ticket: this._fb.group({
                ticket_min: [100],
                ticket_max: [1000]
            }),
            passengers: this._fb.group({
                adults: [0],
                child: [0]
            }),
            match: this._fb.group({
                state: [null],
                date_min: new Date("2024-06-01"),
                date_max: new Date("2025-06-01"),
            })
        });
    }
}