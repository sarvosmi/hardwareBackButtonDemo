import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {
  }

  exitApp()
  {
    App.exitApp();
  }

  aboutPage()
  {
    this.router.navigateByUrl("/about");
  }
  contactusPage()
  {
    this.router.navigateByUrl("/contactus");
  }

}
