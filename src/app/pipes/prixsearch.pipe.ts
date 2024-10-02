import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixsearch'
})
export class PrixsearchPipe implements PipeTransform {

  transform(items: any[], searchText: number): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(
      item => item.prix < searchText
    );
  }

}
