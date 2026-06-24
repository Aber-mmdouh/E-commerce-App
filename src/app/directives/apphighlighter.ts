import { Directive, ElementRef, HostListener,Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Apphighlighter]',
  standalone: true
})
export class Apphighlighter implements OnChanges {
@Input() excolor:string ='red'
@Input('Apphighlighter') defaultColor:string ='red'
  constructor(private ele:ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnchanes(){
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
@HostListener("mouseover") over(){
    this.ele.nativeElement.style.backgroundColor = 'pink' ;
}
@HostListener("mouseout") out() {
  this.ele.nativeElement.style.backgroundColor = this.excolor ;
}}
