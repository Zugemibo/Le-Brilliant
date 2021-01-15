import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {

  constructor(private readonly elementRef: ElementRef,
    private renderer: Renderer2) {
}

ngOnInit() {
  const script = this.renderer.createElement('script');
  script.src = 'https://booksy.com/widget/code.js?id=77170&country=pl&lang=pl';
  script.onload = () => {
    console.log('Booksy service started...');
  };
  this.renderer.appendChild(this.elementRef.nativeElement, script);
 }
}