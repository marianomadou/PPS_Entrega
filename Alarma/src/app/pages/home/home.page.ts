import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SmartAudioService } from 'src/app/services/smart-audio.service';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  public alarmaActivada: Boolean = false;
  titulo: string;
  ultimoAlpha: number;
  ultimoBeta: number;
  ultimoGamma: number;
  private timeoutLeft: NodeJS.Timeout;
  private timeoutRight: NodeJS.Timeout;
  private timeoutVertical: NodeJS.Timeout;
  private timeoutHorizontal: NodeJS.Timeout;
  private flagLeft: boolean;
  private flagRight: boolean;
  private flagHorizontal: boolean;
  private flagVertical: boolean;
  private flagObtenerDatos: boolean;
  private eventListener;


  constructor(private smartAudioService: SmartAudioService, 
    private nativeAudio: NativeAudio,
    private screenOrientation: ScreenOrientation,
    private flashlight: Flashlight) {
    
    this.titulo = 'Alarma de Robo';
    this.flagHorizontal = false;
    this.flagVertical = false;
    this.flagRight = false;
    this.flagLeft = false;
    this.flagObtenerDatos = true;
    this.eventListener = event => {
      this.processOrientation(event);
    };

    setInterval(x => {
      this.flagObtenerDatos = true;
    }, 1000);


    this.nativeAudio.preloadSimple('activa', 'assets/sounds/activa.mp3').catch(error => { });
    this.nativeAudio.preloadSimple('inactiva', 'assets/sounds/inactiva.mp3').catch(error => { });
    this.nativeAudio.preloadSimple('sirena', 'assets/sounds/sirena.mp3').catch(error => { });
    this.nativeAudio.preloadSimple('atencion', 'assets/sounds/atencion.mp3').catch(error => { });
    this.nativeAudio.preloadSimple('epa', 'assets/sounds/epa.mp3').catch(error => { });

    this.screenOrientation.onChange().subscribe(() => {

      if (this.alarmaActivada) {

        if (this.screenOrientation.type == "landscape-primary") {

          this.flashlight.switchOff();
          navigator.vibrate(5000);
          this.nativeAudio.play("epa").catch(error => { });
          setTimeout(() => this.nativeAudio.stop('atencion').catch(error => { }), 2000);
        } else {

          navigator.vibrate(0);
          this.nativeAudio.play("atencion").catch(error => { })
          setTimeout(() => this.nativeAudio.stop('epa').catch(error => { }), 2000);
          setTimeout(() => this.flashlight.switchOn(), 500);
          setTimeout(() => this.flashlight.switchOff(), 5500);
        }
      }
    });
  }

  ngOnInit() {
  }

  ActivarAlarma() {
    navigator.vibrate(800);
    this.alarmaActivada = !this.alarmaActivada;
    this.titulo = 'Alarma de Robo';
    const elistener = this.eventListener;

    if (this.alarmaActivada) {
      this.nativeAudio.play('activa').catch(error => { });
      this.screenOrientation.unlock();

      window.addEventListener('deviceorientation', elistener, true);
    } else {
      this.nativeAudio.stop('atencion').catch(error => { });
      this.nativeAudio.stop('epa').catch(error => { });
      this.nativeAudio.stop('activa').catch(error => { });
      this.nativeAudio.play('inactiva').catch(error => { });
      this.screenOrientation.lock("portrait-primary");
      this.flagHorizontal = false;
      this.flagVertical = false;
      this.flagRight = false;
      this.flagLeft = false;
      this.stopVertical();
      this.stopHorizontal();
      navigator.vibrate(800);
      window.removeEventListener('deviceorientation', elistener, true);
    }
  }

  private startVertical() {
    this.flagVertical = true;
    this.flagHorizontal = false;
    this.flagLeft = true;
    this.flagRight = true;
    this.flashlight.switchOn();
    navigator.vibrate(5000);
    this.nativeAudio.play("sirena").catch(error => { });
  }
  private stopVertical() {
    this.flagLeft = false;
    this.flagRight = false;
    this.flashlight.switchOff();
    this.nativeAudio.stop('sirena').catch(error => { });
  }

  

  private stopHorizontal() {
    this.flagLeft = false;
    this.flagRight = false;
    navigator.vibrate(0);
  }

  private startHorizontal() {
    this.flagHorizontal = true;
    this.flagVertical = false;
    this.flagLeft = true;
    this.flagRight = true;
    navigator.vibrate(500);
  }

  private processOrientation(event: DeviceOrientationEvent) {
    const alpha = event.alpha === null ? 0 : Math.round(event.alpha);
    const beta = event.beta === null ? 0 : Math.round(event.beta);
    const gamma = event.gamma === null ? 0 : Math.round(event.gamma);
    if (this.flagObtenerDatos) {
      this.ultimoAlpha = alpha;
      this.ultimoGamma = gamma;
      this.ultimoBeta = beta;
      this.flagObtenerDatos = false;
    }

    if (this.flagVertical === false && (beta >= 80 && beta <= 100)) {
      // Vertical.
      this.stopHorizontal();
      this.startVertical();
    } else if (this.flagHorizontal === false && (beta >= -5 && beta <= 5)) {
      // Horizontal.
      this.stopVertical();
      this.startHorizontal();
    }

  }

}
