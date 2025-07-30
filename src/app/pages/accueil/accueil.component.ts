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
    const counterSection: HTMLElement | null = this.el.nativeElement.querySelector('#counter-section');

    if (!counterSection) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(counter => {
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
            });

            observer.unobserve(entry.target); // Stop observing after trigger
          }
        });
      },
      {
        threshold: 0.1 // Déclenche quand au moins 10% de la section est visible
      }
    );

    observer.observe(counterSection);
  }
}
