import { Directive, HostListener, Input } from '@angular/core';
import { AppOverviewEdit} from '../edit/app.overview.edit';

@Directive({
    selector: "[appConfirm]"
})
export class ConfirmDirective {
    constructor(public overviewEdit:AppOverviewEdit) {

    }
    //confirmFirst() {
    //    this.overviewEdit.openDirective();
    //}
    @Input() appConfirm = () => { };

   // @Input() confirmMessage = 'Are you sure you want to do this?';

    @HostListener('click', ['$event'])
    Ok() {
        this.overviewEdit.openDirective();
            //this.appConfirm();
        
    }
}