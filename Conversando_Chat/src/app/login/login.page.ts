import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../shared/user.class';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  tipoDeUsuario: string;

  constructor(private router: Router, private authSvc: AuthService, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('txt-alert2', 'assets/sound/text_msg_alert2.mp3').catch(error => { console.log('error al intentar cargar el del mensaje', error); });
  }

  ngOnInit() {
  }

  async onLogin() {
    const user = await this.authSvc.onLogin(this.user);
    console.log(user);

    if (user) {
      console.log('Usuario logueado exitosamente!');
      this.nativeAudio.play("txt-alert2");
      this.router.navigateByUrl('/chat');

    }

  }

  cargarDatos(name: string) {
    switch (name) {
      case "Mariano":
        this.user.email = 'mariano@gmail.com';
        this.user.password = "123456";
        break;
      case "Lucila":
        this.user.email = 'lucila@gmail.com';
        this.user.password = "123456";
        break;
      case "Mecha":
        this.user.email = 'mecha@gmail.com';
        this.user.password = "123456";
        break;
      case "Nano":
        this.user.email = 'nano@gmail.com';
        this.user.password = "123456";
        break;
      case "Santiago":
        this.user.email = 'santiago@gmail.com';
        this.user.password = '123456';
        break;
    }
  }


}
