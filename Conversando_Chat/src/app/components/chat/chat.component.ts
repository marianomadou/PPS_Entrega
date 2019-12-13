import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { message } from "../../shared/message";
import { ChatsService } from '../../service/chats.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public chat: any;

  container: HTMLElement;

  public messages = [];

  public room: any;

  public msg: string;

  public name: string;

  public user: string;

  public dateNow: string;

  public usuarioActual: string;

  @Input() public backButton: Boolean;

  public url: string;



  constructor(
    private navparams: NavParams,
    private modal: ModalController,
    private chatService: ChatsService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private nativeAudio: NativeAudio) {
    this.router.events.subscribe(x => {
      this.url = this.router.url;
    });

    this.nativeAudio.preloadSimple('txt-alert', 'assets/sound/text_msg_alert.mp3').catch(error => { console.log('error al intentar cargar el del mensaje', error); });
  }



  ngOnInit() {
    this.chatService.getChatRoom(this.chat.id).subscribe(room => {
      //console.log(room);
      this.room = room;
      setTimeout(() => {
        var bottom = document.getElementById("fondo");
        bottom.scrollIntoView(true);
      }, 500);
    });

    this.chat = this.navparams.get('chat');
    var obs = this.afAuth.auth.currentUser;
    var emailUsr = obs.email;
    this.usuarioActual = emailUsr.substring(0, emailUsr.lastIndexOf("@"));

    setTimeout(() => {
      var bottom = document.getElementById("fondo");
      bottom.scrollIntoView(true);
    }, 500);
  }

  
  closeChat() {
    this.modal.dismiss();
  }

  sendMessage() {
    var obs = this.afAuth.auth.currentUser;
    console.log
    var name2 = obs.email;
    this.name = name2.substring(0, name2.lastIndexOf("@"));
    var dateG = new Date();
    this.dateNow = dateG.getHours() + ":" + dateG.getMinutes() + ":" + dateG.getSeconds();

    const mensaje: message = {
      content: this.msg,
      type: 'text',
      date: this.dateNow,
      name: this.name
    }

    this.chatService.sendMsgToFirebase(mensaje, this.chat.id);
    this.nativeAudio.play("txt-alert");
    this.msg = "";

    setTimeout(() => {
      var bottom = document.getElementById("fondo");
      bottom.scrollIntoView(true);
    }, 500);

  }
}