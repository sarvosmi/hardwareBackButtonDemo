import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  contactusPage()
  {
    this.router.navigateByUrl("/contactus");
  }
  homePage()
  {
    this.router.navigateByUrl("/home");
  }

}
