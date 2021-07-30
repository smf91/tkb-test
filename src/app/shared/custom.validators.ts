import { FormControl } from "@angular/forms";

interface ResultBik {
  validateBik: boolean,
  err: string
}
interface ResultRs {
  validateRs: boolean,
  err: string
}

let bik : FormControl

export class CustomValidators {

  static validateBik (control: FormControl): ResultBik | null {
    if (/[^0-9]/.test(control.value)) {
      return {
        validateBik: true,
        err: 'БИК может состоять только из цифр'
      }
    } else if (control.value.length !== 9) {
      return {
        validateBik: true,
        err: 'БИК может состоять только из 9 цифр'
      }
    }
    bik = control
    return null
  }

  static validateRs (control: FormControl): ResultRs | null {
    if (/[^0-9]/.test(control.value)) {
        return {
          validateRs: true,
          err: 'р/с может состоять только из цифр'
        }
      } else if (control.value.length !== 20) {
        return {
          validateRs: true,
          err: 'р/с может состоять только из 20 цифр'
        }
      } else {
        let bikAcc: any = bik.value.toString().slice(-3) + control.value;
        let checksum = 0;
        let coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
        for (let i in coefficients) {
          checksum += coefficients[i] * (bikAcc[i] % 10);
        }
        if (checksum % 10 === 0) {
          return null
        } else {
          return {
            validateRs: true,
            err: 'Неправильное контрольное число'
          }
        }
      }
  }
} 