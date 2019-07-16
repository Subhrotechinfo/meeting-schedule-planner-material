import { FormGroup } from '@angular/forms';
export function mustMatch(password: string, cnfrmpassword: string) {
  return (formgroup: FormGroup) => {
    const pswd = formgroup.controls[password];
    const cnfmpwd = formgroup.controls[cnfrmpassword];

    if (cnfmpwd.errors && !cnfmpwd.errors.mustMatch) {
      return null;
    }

    if (pswd.value != cnfmpwd.value) {
      cnfmpwd.setErrors({ mustMatch: true });
    } else {
      cnfmpwd.setErrors(null);
    }
    return null;
  };
}
