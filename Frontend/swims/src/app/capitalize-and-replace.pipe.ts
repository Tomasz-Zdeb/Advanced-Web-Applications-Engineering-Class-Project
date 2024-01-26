import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeAndReplace'
})
export class CapitalizeAndReplacePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    // Replace dashes with spaces and capitalize each word
    return value.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }

}
