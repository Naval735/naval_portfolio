import { Component, AfterViewInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const items = this.el.nativeElement.querySelectorAll('.col-md-4, .col-md-8');
    items.forEach((item: any) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        item.classList.add('visible');
      }
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll();
  }
}
