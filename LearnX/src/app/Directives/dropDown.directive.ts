import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector : '[appDropDown]'
})
export class DropDownDirective {
  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('style.backgroundColor') backGround: string = 'transparent';

  constructor() {}

@HostListener('mouseenter') toggleOpen(eventData: Event) {
  this.backGround = 'green';
}
}
