import { Component } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lottieConfig: any;
  constructor() {
    LottieAnimationViewModule.forRoot();
    this.lottieConfig = {
      path: 'assets/chargeMoney.json',
      autoplay: true,
      loop: true
    }
  }

}
