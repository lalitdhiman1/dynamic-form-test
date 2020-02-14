import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createid',
  pure: false
})
export class CreateIdPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(/ /g, '').toLowerCase();
  }

}
