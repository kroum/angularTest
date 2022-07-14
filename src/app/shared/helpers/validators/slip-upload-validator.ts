import {FormControl} from "@angular/forms";

export const SLIPS_ALLOWED = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

export class SlipUploadValidator {
  static checkForExtension(types: string[], mimeType: string):boolean {
    return types.some(type => type.toLowerCase() === mimeType.toLowerCase());
  }

  static requiredFileType( types: string[] ):Function {
    return (control: FormControl) => {
      const file = control.value;
      if (file && file.type) {
        const mimeType = file.type.toLowerCase();
        if (this.checkForExtension(types, mimeType)) {
          return null;
        }
        return {
          requiredFileType: true
        };
      }

      return null;
    };
  }
}
