import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector : '[appDropDown]'
})
export class DropDownDirective {
  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('class.open') isToggle: boolean = false;

  constructor() {}

@HostListener('mouseenter') toggleOpen(eventData: Event) {
  this.isToggle = !this.isToggle;
}
}
