import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { mustMatch } from '../common/util';

@Directive({
  selector: '[appMustMatch]'
})
export class MustMatchDirective implements Validator {
  @Input() controls: any;
  constructor() {}
  validate(form: FormGroup): ValidationErrors {
    return mustMatch(this.controls[0], this.controls[1])(form);
  }
}
