import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild(IonRouterOutlet) outlet;

  constructor(private platform:Platform) {

      //Back and exit with hardware back button
    
      this.platform.backButton.subscribeWithPriority(-1, () => {
        //alert(this.outlet?.canGoBack())
        if (!this.outlet?.canGoBack()) {       
          App.exitApp();
        }
      });

    }
}
