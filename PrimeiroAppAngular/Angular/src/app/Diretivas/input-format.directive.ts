import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@Input('appInputFormat') format: any;

  constructor(private _el: ElementRef) { }

@HostListener('focus') onFocus()
{
  console.log("Foquei mesmo");
}

@HostListener('blur') onBlur()
{
  if(this.format == 'lowercase')
    this._el.nativeElement.value = this._el.nativeElement.value.toLowerCase();
  else
    this._el.nativeElement.value = this._el.nativeElement.value.toUpperCase();

}

}
