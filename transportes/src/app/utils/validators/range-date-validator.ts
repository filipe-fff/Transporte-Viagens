import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const rangeDateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    
    const dateMax = control.get("dateMax") as FormControl;
    const dateMin = control.get("dateMin") as FormControl;

    if (dateMax.value < dateMin.value) {
        return { "rangeDateError": true };
    }
    
    return null;
}