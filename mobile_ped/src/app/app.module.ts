import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { RegisterPage } from '../pages/register/register';
import { RecuperarPage } from '../pages/recuperar/recuperar';

import { AngularFireModule } from '@angular/fire';
/*import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';*/
import { AngularFireAuthModule } from '@angular/fire/auth';

//Ligação com o APP FireBase
const firebaseAuth = {
  /*apiKey: "AIzaSyAOryXfoFRRhzTV03P-xGl_HcM6GrRJuOo",
  authDomain: "miloteam-4bb67.firebaseapp.com",
  databaseURL: "https://miloteam-4bb67.firebaseio.com",
  projectId: "miloteam-4bb67",
  storageBucket: "miloteam-4bb67.appspot.com",
  messagingSenderId: "415221153079"*/
  apiKey: "AIzaSyD_et1NFGoLSX2ZRtNzxCsS30R0vvwLVtE",
  authDomain: "agropet-5c654.firebaseapp.com",
  databaseURL: "https://agropet-5c654.firebaseio.com",
  projectId: "agropet-5c654",
  storageBucket: "agropet-5c654.appspot.com",
  messagingSenderId: "444092086253",
  appId: "1:444092086253:web:4676f7a9810411d53899e4",
  measurementId: "G-PCX0QZC6PS"  
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage,
    RecuperarPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    /*AngularFireDatabaseModule,*/
    AngularFireAuthModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage,
    RecuperarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
