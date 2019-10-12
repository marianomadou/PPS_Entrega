import { Component, OnInit, Input } from '@angular/core';
import { SmartAudioService } from 'src/app/services/smart-audio.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { Languages } from '../../../models/enums/languages.enum';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {

  constructor(private smartAudioService: SmartAudioService, private languagesService: LanguagesService) {
  }

  ngOnInit() {}

  public emitirSonido(eleccion: string) {
    switch (eleccion) {
      case 'pig':
      if(this.languagesService.getLanguage()=== Languages.English){
        this.smartAudioService.play('Cerdo_en');
      }else if(this.languagesService.getLanguage()=== Languages.Spanish){
        this.smartAudioService.play('Cerdo_es');
      }else{
        this.smartAudioService.play('Cerdo_pr');
      }
      break;
      case 'cat': 
        if(this.languagesService.getLanguage()=== Languages.English){
          this.smartAudioService.play('Gato_en');
        }else if(this.languagesService.getLanguage()=== Languages.Spanish){
          this.smartAudioService.play('Gato_es');
        }else{
          this.smartAudioService.play('Gato_pr');
        }
      break;
      case 'giraffe':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Jirafa_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Jirafa_es');
          }else{
            this.smartAudioService.play('Jirafa_pr');
          }
      break;
      case 'lion':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Leon_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Leon_es');
          }else{
            this.smartAudioService.play('Leon_pr');
          }
      break;
      case 'monkey':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Mono_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Mono_es');
          }else{
            this.smartAudioService.play('Mono_pr');
          }
      break;
      case 'panda':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Osopanda_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Osopanda_es');
          }else{
            this.smartAudioService.play('Osopanda_pr');
          }
      break;
      case 'dog':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Perro_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Perro_es');
          }else{
            this.smartAudioService.play('Perro_pr');
          }
      break;
      case 'frog':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Rana_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Rana_es');
          }else{
            this.smartAudioService.play('Rana_pr');
          }
      break;
      case 'tiger':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('Tigre_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('Tigre_es');
          }else{
            this.smartAudioService.play('Tigre_pr');
          }
      break;
    }
  }
}
