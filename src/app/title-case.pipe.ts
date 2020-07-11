import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {
  transform(value:string, args?:any) {
    if (!value)
      return null;

      let ignoredWords = ['and', 'the', 'of', 'a', 'an']
      return value.split(' ').map(function(val, index){ 
        if (ignoredWords.indexOf(val.toLowerCase()) >= 0 && index > 0) {
          return val.toLowerCase();
        } else {
          return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
        }
      }).join(' ');
  }
}