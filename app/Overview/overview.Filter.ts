import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rowFilter'
})
export class OverviewFilter implements PipeTransform {
    transform(items: Array<any>, category: string): Array<any> {
        return items;
    }
}