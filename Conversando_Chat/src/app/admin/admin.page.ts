import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  trustedVideoUrl: SafeResourceUrl;
    arrayDeVideos:any = [{vid_link:"https://www.youtube.com/embed/acEOASYioGY"},{vid_link:"https://www.youtube.com/embed/2j3x0VYnehg"}]
    
    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer
                ) {}

  ngOnInit() {

  }

  ionViewWillEnter(): void {
    for(let i of this.arrayDeVideos){
      i.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.vid_link);
    }
  }

  

}


