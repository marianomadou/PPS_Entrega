import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';
import { Languages } from 'src/app/models/enums/languages.enum';
import { SmartAudioService } from 'src/app/services/smart-audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  language: string;

  constructor(private languagesService: LanguagesService, private smartAudioService: SmartAudioService) {
    this.language = this.languagesService.getLanguage().toString();
  }

  ngOnInit() {
  }

  languageChanged(event) {
    //const language: Languages = event.detail.value === 'English' ? Languages.English : Languages.Spanish  ;
    var language: Languages=Languages.English;

    if (event.detail.value === 'English'){
      language=Languages.English;
    }else if (event.detail.value === 'Spanish'){
      language=Languages.Spanish;
    }else if (event.detail.value === 'Portugues'){
      language=Languages.Portugues;
    }


    this.languagesService.changeLanguage(language);
    //this.smartAudioService.play(language === Languages.English ? 'emma' : 'Isabella');
  }

}
