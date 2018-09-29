import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLoginForm]'
})

export class LoginDirective {

  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('class.open') isToggle: boolean = false;

  @HostListener('click') onToggle(eventData: Event) {
    this.isToggle = true;
  }
  // @HostListener('mouseleave') mouseout(eventData: Event) {
  //   this.isToggle = false;
  // }

}
