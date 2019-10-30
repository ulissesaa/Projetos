import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { Users } from './users';
import { RecuperarPage } from '../recuperar/recuperar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Users = new Users();

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, 
              public toastCrtl: ToastController,
              public fire: AngularFireAuth) {

  }

  entrar(){

    let toast = this.toastCrtl.create({duration: 3000, position: 'bottom'});

    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      console.log('Data do Login: ' ,data);
      this.users.email = this.email.value;
      this.users.senha = this.password.value;
      this.navCtrl.setRoot(PrincipalPage);
    })
    .catch((error: any) =>{
      if(error.code == 'auth/email-already-in-use'){
        toast.setMessage('O email digitado já está em uso.')
      }else if(error.code == 'auth/invalid-email'){
        toast.setMessage('E-mail invalido.') 
	    }else if(error.code == 'auth/operation-not-allowed'){
	    toast.setMessage('Não está habilitado para criar usuários.')
	    }else if(error.code == 'auth/weak-password'){
        toast.setMessage('A senha informada é muito fraca.') 
      }else if(error.code == 'auth/wrong-password'){  
        toast.setMessage('Senha invalida.') 
     }
     toast.present();
    });
  }

  cadastrar(){
    this.navCtrl.push(RegisterPage);
  }
  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }

}
