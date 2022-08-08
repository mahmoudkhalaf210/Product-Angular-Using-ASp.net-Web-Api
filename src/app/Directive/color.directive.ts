import { Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private template: TemplateRef<any>, private viewcontainer: ViewContainerRef) {
  }

  ngOnInit(): void{
    for (let index = 0; index < 5; index++) {
      this.viewcontainer.createEmbeddedView(this.template)
    }
  }

}
