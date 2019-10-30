import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  email:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
              
      this.email = fire.auth.currentUser.email;
    }

logout(){
  let toast = this.toastCtrl.create({duration: 2000, position: 'botom'});
  this.fire.auth.signOut();
  toast.setMessage('Deslogado com Sucesso !');
  toast.present();

  this.navCtrl.setRoot(HomePage);
}

}
