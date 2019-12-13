

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Route } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ChatsService, chat } from '../service/chats.service';
import { ModalController } from "@ionic/angular";
import { ChatComponent } from '../components/chat/chat.component';
import { ActionSheetController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, AfterViewInit {

  //user: User = new User();

  public chatRooms: any = [];
  public comprobador: any = [];

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private chatSvc: ChatsService,
    public actionSheetController: ActionSheetController,
    private modal: ModalController
    , private nativeAudio: NativeAudio
  ) {
    this.nativeAudio.preloadSimple('txt-alert', 'assets/sound/text_msg_alert.mp3').catch(error => { console.log('error al intentar cargar el del mensaje', error); });
    this.chatSvc.getChatRooms().subscribe(chats => {

      this.chatRooms = chats;
      
      if (this.chatRooms == ['']) {
        setTimeout(() => {
          console.log('chatRooms vacios', this.chatRooms)
        }, 3000);
      }

    });
  }



  ngOnInit() {

    console.log(this.chatRooms)
  }

  ngAfterViewInit() {

    setTimeout(() => {
      console.log(this.chatRooms)
    }, 1000);

  }



  openChat(chat) {

    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then((modal) => modal.present())
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {

          this.onlogout();

        },
      }]
    });
    await actionSheet.present();
  }

  onlogout() {
    console.log('Usted está deslogueado');
    this.afAuth.auth.signOut();
    this.nativeAudio.play("txt-alert");
    this.router.navigateByUrl('/login');
  }


}
