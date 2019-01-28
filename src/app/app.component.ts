import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appTitle = 'بوابة الرحلات';
  public appPages = [
    {
      title: 'الصفحة الرئسية',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'البحث',
      url: '/home',
      icon: 'search'
    },
    {
      title: 'المفضلة',
      url: '/home',
      icon: 'star'
    },
    {
      title: 'من نحن',
      url: '/home',
      icon: 'information'
    },
    {
      title: 'اتصل بنا',
      url: '/home',
      icon: 'contact'
    },
    {
      title: 'أخبر صديق',
      url: '/home',
      icon: 'share'
    },

    {
      title: 'تقييم التطبيق ',
      url: '/home',
      icon: 'star-half'
    },    {
      title: 'الإعدادات ',
      url: '/home',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
