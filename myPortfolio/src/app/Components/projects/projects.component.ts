import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'TODO List',
      description: 'A web-based application to manage daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The app helps in organizing work and tracking progress in a simple and intuitive interface.',
      image: 'assets/todoimg.webp',
      link: 'https://github.com/Naval735/Todo-list'
    },
    {
      title: 'Tour And Travel',
      description: 'ML project predicting laptop prices using Python, Pandas, and Seaborn.',
      image: 'assets/tourandtravel.jpeg',
      link: 'https://github.com/Naval735/tour-and-travel-website'
    },
    {
      title: 'Foodie Website',
      description: 'Frontend fast-food website built with HTML, CSS, and JavaScript.',
      image: 'assets/projects/foodie.jpg',
      link: 'https://github.com/Naval735/Foodie'
    }
  ];

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const cards = this.el.nativeElement.querySelectorAll('.project-card');
    cards.forEach((card: any) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add('visible');
      }
    });
  }

  ngAfterViewInit() {
    this.onWindowScroll(); // trigger animation on load
  }
}
