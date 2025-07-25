import { AfterViewInit, ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const counters: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.circle-number');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLElement;
            const target = Number(counter.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();

            const updateCount = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.round(easedProgress * target);
              counter.innerText = currentValue.toString();

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target.toString();
              }
            };

            requestAnimationFrame(updateCount);
            observer.unobserve(counter); // Ne pas relancer à chaque scroll
          }
        });
      },
      {
        threshold: 0.5 // Lance quand au moins 50% de l’élément est visible
      }
    );

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
}
