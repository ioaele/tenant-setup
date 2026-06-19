import { Component,inject} from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
    providers: [ConfirmationService, MessageService],
    
})
export class App {
  currentStep = 1;
  constructor(private router: Router) {}

  ngOnInit() {
    this.setStepFromUrl(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.setStepFromUrl(event.urlAfterRedirects);
      });
  }

  private setStepFromUrl(url: string) {
    if (url.includes('tenant')) this.currentStep = 1;
    else if (url.includes('admin')) this.currentStep = 2;
    else if (url.includes('packages')) this.currentStep = 3;
    else if (url.includes('facilities')) this.currentStep = 4;
  }
}

