import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth, private nativeAudio: NativeAudio) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
    this.nativeAudio.preloadSimple('txt-alert', 'assets/sound/text_msg_alert.mp3').catch(error => { console.log('error al intentar cargar el del mensaje', error); });
  }

  async onLogin(user: User) {
    var contenido = document.getElementById('contenido');
    try {
      this.nativeAudio.play("txt-alert");
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

    } catch (error) {
      console.log('Error on login user: ', error);
      if (error.code == "auth/wrong-password") {
        contenido.innerHTML = `
        <div class="container mt-5" >
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>El password es incorrecto.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
        `;
      } else if (error.code == "auth/user-not-found") {
        contenido.innerHTML = `
        <div class="container mt-5">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>El usuario ${user.email} no está registrado en la base de datos.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
        `;
      }
      else{
        contenido.innerHTML = `
        <div class="container mt-5">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4>ERROR: debe ingresar email y contraseña válidos.</h4>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
        `;
      }

    }
  }

  async onRegister(user: User) {
    var contenido = document.getElementById('contenido');
    try {
      this.nativeAudio.play("txt-alert");
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error on Register: ', error);
      if (error.code == "auth/invalid-email") {
        contenido.innerHTML = `
        <div class="container mt-5" >
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <h4>El email <strong>${user.email}</strong> que acaba de ingresar es erroneo .</h4><br>
        <strong>El email debe ser del tipo "ejemplo@email.com" .</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
        `;
      }else if (error.code == "auth/weak-password") {
        contenido.innerHTML = `
        <div class="container mt-5">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4>El password debe tener al menos 6 caracteres.</h4> <br><strong>Reingrese una clave válida</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
        `;
      }
      else{
        contenido.innerHTML = `
        <div class="container mt-5">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <h4>ERROR: debe ingresar email y contraseña válidos.</h4>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      </div>
        `;
      }


    }
  }


}
