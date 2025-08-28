import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap, take, of } from 'rxjs';
import { RentersHttpService } from '../service/renters-http.service';

export function usernameAvailableValidator(api: RentersHttpService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const value = (control.value ?? '').trim();
    if (!value) return of<ValidationErrors | null>(null); // לא בודק אם ריק
    return of(value).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(v => api.isUsernameTaken(v)),
      map(res => (res.taken ? { usernameTaken: true } : null)),
      take(1)
    );
  };
}
