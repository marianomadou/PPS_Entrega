import { Component, OnInit } from '@angular/core';
import { SmartAudioService } from 'src/app/services/smart-audio.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { Languages } from 'src/app/models/enums/languages.enum';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {

  constructor(private smartAudioService: SmartAudioService, private languagesService: LanguagesService) {
  }

  ngOnInit() {}

  public emitirSonido(eleccion: string) {
    switch (eleccion) {
      case 'one':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('1_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('1_es');
          }else{
            this.smartAudioService.play('1_pr');
          }
        //this.smartAudioService.play(this.languagesService.getLanguage() === Languages.English ? 'one' : 'uno');
      break;
      case 'two':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('2_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('2_es');
          }else{
            this.smartAudioService.play('2_pr');
          }
        //this.smartAudioService.play(this.languagesService.getLanguage() === Languages.English ? 'two' : 'dos');
      break;
      case 'three':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('3_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('3_es');
          }else{
            this.smartAudioService.play('3_pr');
          }
        //this.smartAudioService.play(this.languagesService.getLanguage() === Languages.English ? 'three' : 'tres');
      break;
      case 'four':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('4_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('4_es');
          }else{
            this.smartAudioService.play('4_pr');
          }
        //this.smartAudioService.play(this.languagesService.getLanguage() === Languages.English ? 'four' : 'cuatro');
      break;
      case 'five':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('5_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('5_es');
          }else{
            this.smartAudioService.play('5_pr');
          }
      break;
      case 'six':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('6_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('6_es');
          }else{
            this.smartAudioService.play('6_pr');
          }
      break;
      case 'seven':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('7_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('7_es');
          }else{
            this.smartAudioService.play('7_pr');
          }
      break;
      case 'eight':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('8_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('8_es');
          }else{
            this.smartAudioService.play('8_pr');
          }
      break;
      case 'nine':
          if(this.languagesService.getLanguage()=== Languages.English){
            this.smartAudioService.play('9_en');
          }else if(this.languagesService.getLanguage()=== Languages.Spanish){
            this.smartAudioService.play('9_es');
          }else{
            this.smartAudioService.play('9_pr');
          }
      break;
    }
  }

}
