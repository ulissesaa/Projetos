import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/*import { HomePage } from '../home/home';*/
import { PrincipalPage } from '../principal/principal';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController ) {
  }

  registrar(){
    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'});
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data =>{
      console.log('Aqui temos a data' ,data);
      toast.setMessage('Usuário criado com Sucesso !');
      toast.present();
      this.navCtrl.setRoot(PrincipalPage);
    })
    .catch((error:any) => {
      if(error.code == 'auth/email-already-in-use'){
        toast.setMessage('O email digitado já está em uso.')
      }else if(error.code == 'auth/invalid-email'){
        toast.setMessage('E-mail invalido.') 
	    }else if(error.code == 'auth/operation-not-allowed'){
	    toast.setMessage('Não está habilitado para criar usuários.')
	    }else if(error.code == 'auth/weak-password'){
        toast.setMessage('A senha informada é muito fraca.') 
     }		      
     toast.present();

    })
  }

}
