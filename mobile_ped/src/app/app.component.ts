import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any //= HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afauth: AngularFireAuth) {

    const authObserver = afauth.authState.subscribe(users =>{
      if(users){
        this.rootPage = PrincipalPage 
        authObserver.unsubscribe();
      }else{
        this.rootPage = HomePage
        authObserver.unsubscribe();
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

