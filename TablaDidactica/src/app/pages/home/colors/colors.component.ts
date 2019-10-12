import { Component, OnInit } from '@angular/core';
import { SmartAudioService } from 'src/app/services/smart-audio.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { Languages } from 'src/app/models/enums/languages.enum';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {

  constructor(private smartAudioService: SmartAudioService, private languagesService: LanguagesService) {
  }

  ngOnInit() {}

  public emitirSonido(eleccion: string) {
    switch (eleccion) {
      case 'yellow':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Amarillo_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Amarillo_es');
        }else{
          this.smartAudioService.play('Amarillo_pr');
        }
      break;
      case 'blue':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Azul_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Azul_es');
        }else{
          this.smartAudioService.play('Azul_pr');
        }
      break;
      case 'white':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Blanco_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Blanco_es');
        }else{
          this.smartAudioService.play('Blanco_pr');
        }
      break;
      case 'lightBlue':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Celeste_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Celeste_es');
        }else{
          this.smartAudioService.play('Celeste_pr');
        }
      break;
      case 'orange':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Naranja_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Naranja_es');
        }else{
          this.smartAudioService.play('Naranja_pr');
        }
      break;
      case 'black':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Negro_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Negro_es');
        }else{
          this.smartAudioService.play('Negro_pr');
        }
      break;
      case 'red':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Rojo_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Rojo_es');
        }else{
          this.smartAudioService.play('Rojo_pr');
        }
      break;
      case 'green':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Verde_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Verde_es');
        }else{
          this.smartAudioService.play('Verde_pr');
        }
      break;
      case 'violet':
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Violeta_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Violeta_es');
        }else{
          this.smartAudioService.play('Violeta_pr');
        }
      break;
    }
  }

}
