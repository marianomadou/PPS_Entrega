import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SmartAudioService } from './services/smart-audio.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { timer } from 'rxjs/internal/observable/timer';
import { SpinnerService } from './services/spinner.service';
import { Sound } from './models/sound';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showSplash: Boolean = true;
  showSpinner: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private smartAudioService: SmartAudioService,
    private router: Router,
    private spinner: SpinnerService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe( () => {
        this.showSplash = false;
      });

      let sounds: Sound[] = new Array<Sound>();
      sounds.push(new Sound('login', 'assets/sounds/login.mp3'));
      sounds.push(new Sound('error', 'assets/sounds/error-wooden.mp3'));
      sounds.push(new Sound('boop', 'assets/sounds/click.mp3'));
      sounds.push(new Sound('confirmation', 'assets/sounds/confirmation.mp3'));

      ///sonidos de numeros
      sounds.push(new Sound('1_en', 'assets/sounds/voices/1_en.mp3'));
      sounds.push(new Sound('1_es', 'assets/sounds/voices/1_es.mp3'));
      sounds.push(new Sound('1_pr', 'assets/sounds/voices/1_pr.mp3'));
      sounds.push(new Sound('2_en', 'assets/sounds/voices/2_en.mp3'));
      sounds.push(new Sound('2_es', 'assets/sounds/voices/2_es.mp3'));
      sounds.push(new Sound('2_pr', 'assets/sounds/voices/2_pr.mp3'));
      sounds.push(new Sound('3_en', 'assets/sounds/voices/3_en.mp3'));
      sounds.push(new Sound('3_es', 'assets/sounds/voices/3_es.mp3'));
      sounds.push(new Sound('3_pr', 'assets/sounds/voices/3_pr.mp3'));
      sounds.push(new Sound('4_en', 'assets/sounds/voices/4_en.mp3'));
      sounds.push(new Sound('4_es', 'assets/sounds/voices/4_es.mp3'));
      sounds.push(new Sound('4_pr', 'assets/sounds/voices/4_pr.mp3'));
      sounds.push(new Sound('5_en', 'assets/sounds/voices/5_en.mp3'));
      sounds.push(new Sound('5_es', 'assets/sounds/voices/5_es.mp3'));
      sounds.push(new Sound('5_pr', 'assets/sounds/voices/5_pr.mp3'));
      sounds.push(new Sound('6_en', 'assets/sounds/voices/6_en.mp3'));
      sounds.push(new Sound('6_es', 'assets/sounds/voices/6_es.mp3'));
      sounds.push(new Sound('6_pr', 'assets/sounds/voices/6_pr.mp3'));
      sounds.push(new Sound('7_en', 'assets/sounds/voices/7_en.mp3'));
      sounds.push(new Sound('7_es', 'assets/sounds/voices/7_es.mp3'));
      sounds.push(new Sound('7_pr', 'assets/sounds/voices/7_pr.mp3'));
      sounds.push(new Sound('8_en', 'assets/sounds/voices/8_en.mp3'));
      sounds.push(new Sound('8_es', 'assets/sounds/voices/8_es.mp3'));
      sounds.push(new Sound('8_pr', 'assets/sounds/voices/8_pr.mp3'));
      sounds.push(new Sound('9_en', 'assets/sounds/voices/9_en.mp3'));
      sounds.push(new Sound('9_es', 'assets/sounds/voices/9_es.mp3'));
      sounds.push(new Sound('9_pr', 'assets/sounds/voices/9_pr.mp3'));
      //sonidos de colores
      sounds.push(new Sound('Amarillo_en', 'assets/sounds/voices/Amarillo_en.mp3'));
      sounds.push(new Sound('Amarillo_es', 'assets/sounds/voices/Amarillo_es.mp3'));
      sounds.push(new Sound('Amarillo_pr', 'assets/sounds/voices/Amarillo_pr.mp3'));
      sounds.push(new Sound('Azul_en', 'assets/sounds/voices/Azul_en.mp3'));
      sounds.push(new Sound('Azul_es', 'assets/sounds/voices/Azul_es.mp3'));
      sounds.push(new Sound('Azul_pr', 'assets/sounds/voices/Azul_pr.mp3'));
      sounds.push(new Sound('Blanco_en', 'assets/sounds/voices/Blanco_en.mp3'));
      sounds.push(new Sound('Blanco_es', 'assets/sounds/voices/Blanco_es.mp3'));
      sounds.push(new Sound('Blanco_pr', 'assets/sounds/voices/Blanco_pr.mp3'));
      sounds.push(new Sound('Celeste_en', 'assets/sounds/voices/Celeste_en.mp3'));
      sounds.push(new Sound('Celeste_es', 'assets/sounds/voices/Celeste_es.mp3'));
      sounds.push(new Sound('Celeste_pr', 'assets/sounds/voices/Celeste_pr.mp3'));
      sounds.push(new Sound('Naranja_en', 'assets/sounds/voices/Naranja_en.mp3'));
      sounds.push(new Sound('Naranja_es', 'assets/sounds/voices/Naranja_es.mp3'));
      sounds.push(new Sound('Naranja_pr', 'assets/sounds/voices/Naranja_pr.mp3'));
      sounds.push(new Sound('Negro_en', 'assets/sounds/voices/Negro_en.mp3'));
      sounds.push(new Sound('Negro_es', 'assets/sounds/voices/Negro_es.mp3'));
      sounds.push(new Sound('Negro_pr', 'assets/sounds/voices/Negro_pr.mp3'));
      sounds.push(new Sound('Rojo_en', 'assets/sounds/voices/Rojo_en.mp3'));
      sounds.push(new Sound('Rojo_es', 'assets/sounds/voices/Rojo_es.mp3'));
      sounds.push(new Sound('Rojo_pr', 'assets/sounds/voices/Rojo_pr.mp3'));
      sounds.push(new Sound('Verde_en', 'assets/sounds/voices/Verde_en.mp3'));
      sounds.push(new Sound('Verde_es', 'assets/sounds/voices/Verde_es.mp3'));
      sounds.push(new Sound('Verde_pr', 'assets/sounds/voices/Verde_pr.mp3'));
      sounds.push(new Sound('Violeta_en', 'assets/sounds/voices/Violeta_en.mp3'));
      sounds.push(new Sound('Violeta_es', 'assets/sounds/voices/Violeta_es.mp3'));
      sounds.push(new Sound('Violeta_pr', 'assets/sounds/voices/Violeta_pr.mp3'));
      //sounds animals
      sounds.push(new Sound('Cerdo_en', 'assets/sounds/voices/Cerdo_en.mp3'));
      sounds.push(new Sound('Cerdo_es', 'assets/sounds/voices/Cerdo_es.mp3'));
      sounds.push(new Sound('Cerdo_pr', 'assets/sounds/voices/Cerdo_pr.mp3'));
      sounds.push(new Sound('Gato_en', 'assets/sounds/voices/Gato_en.mp3'));
      sounds.push(new Sound('Gato_es', 'assets/sounds/voices/Gato_es.mp3'));
      sounds.push(new Sound('Gato_pr', 'assets/sounds/voices/Gato_pr.mp3'));
      sounds.push(new Sound('Jirafa_en', 'assets/sounds/voices/Jirafa_en.mp3'));
      sounds.push(new Sound('Jirafa_es', 'assets/sounds/voices/Jirafa_es.mp3'));
      sounds.push(new Sound('Jirafa_pr', 'assets/sounds/voices/Jirafa_pr.mp3'));
      sounds.push(new Sound('Leon_en', 'assets/sounds/voices/Leon_en.mp3'));
      sounds.push(new Sound('Leon_es', 'assets/sounds/voices/Leon_es.mp3'));
      sounds.push(new Sound('Leon_pr', 'assets/sounds/voices/Leon_pr.mp3'));
      sounds.push(new Sound('Mono_en', 'assets/sounds/voices/Mono_en.mp3'));
      sounds.push(new Sound('Mono_es', 'assets/sounds/voices/Mono_es.mp3'));
      sounds.push(new Sound('Mono_pr', 'assets/sounds/voices/Mono_pr.mp3'));
      sounds.push(new Sound('Osopanda_en', 'assets/sounds/voices/Osopanda_en.mp3'));
      sounds.push(new Sound('Osopanda_es', 'assets/sounds/voices/Osopanda_es.mp3'));
      sounds.push(new Sound('Osopanda_pr', 'assets/sounds/voices/Osopanda_pr.mp3'));
      sounds.push(new Sound('Perro_en', 'assets/sounds/voices/Perro_en.mp3'));
      sounds.push(new Sound('Perro_es', 'assets/sounds/voices/Perro_es.mp3'));
      sounds.push(new Sound('Perro_pr', 'assets/sounds/voices/Perro_pr.mp3'));
      sounds.push(new Sound('Rana_en', 'assets/sounds/voices/Rana_en.mp3'));
      sounds.push(new Sound('Rana_es', 'assets/sounds/voices/Rana_es.mp3'));
      sounds.push(new Sound('Rana_pr', 'assets/sounds/voices/Rana_pr.mp3'));
      sounds.push(new Sound('Tigre_en', 'assets/sounds/voices/Tigre_en.mp3'));
      sounds.push(new Sound('Tigre_es', 'assets/sounds/voices/Tigre_es.mp3'));
      sounds.push(new Sound('Tigre_pr', 'assets/sounds/voices/Tigre_pr.mp3'));

      sounds.push(new Sound('emma', 'assets/sounds/emma.mp3'));
      sounds.push(new Sound('Isabella', 'assets/sounds/Isabella.mp3'));
      this.smartAudioService.preload(sounds);

      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
          if (urlAfterRedirects !== '/home' && urlAfterRedirects !== '/login') {
            this.smartAudioService.play('boop');
          }
        });
      });

      this.showSpinner = false;
      this.spinner.observableSpinner().subscribe( x => {
          this.showSpinner = x;
      });
  }
}
