import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {

  constructor(private readonly elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement>document.getElementById('booksy-here');
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit() {
    this.loadExternalScript('https://booksy.com/widget/code.js?id=77170&country=pl&lang=pl');
  }
}