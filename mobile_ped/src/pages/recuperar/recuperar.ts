import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})
export class RecuperarPage {

  @ViewChild('email') emailDigitado;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public fire: AngularFireAuth) {
  }

  recuperar(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'botton'});
    this.fire.auth.sendPasswordResetEmail(this.emailDigitado.value)
    .then(() => {
      toast.setMessage('Solicitação foi enviada para Email.');
      toast.present();
      this.navCtrl.pop();
    })
    .catch((error: any) =>{
      if(error.code == 'auth/invalid-email'){
        toast.setMessage('Email Invalido.');
      }else if (error.code == 'auth/user-not-found'){
        toast.setMessage ('Usuário não encontrado.');
      };
      toast.present();

  });

}

}
