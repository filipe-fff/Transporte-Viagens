import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { rangeDateValidator } from "../../utils/validators/range-date-validator";

export class FlightController {
    _fb: FormBuilder = inject(FormBuilder);
    flightForm: FormGroup = {} as FormGroup;
    

    createFlightForm() {
        this.flightForm = this._fb.group({
            price: this._fb.group({
                economy: [null],
                business: [null],
                firstClass: [null],
            }),
            location: this._fb.group({
                state: ["", Validators.required],
            }),
            date: this._fb.group({
                dateMin: [null, Validators.required],
                dateMax: [null, Validators.required],
            }, { validators: rangeDateValidator}),
        });
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