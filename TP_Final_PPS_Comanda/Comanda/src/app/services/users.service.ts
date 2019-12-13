import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';
import { showAlert } from '../../environments/environment';
import { MesasService } from './mesas.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usuariosFirebase: AngularFirestoreCollection<any>;
  public usuariosObservable: Observable<any>;

  private listaEsperaFirebase: AngularFirestoreCollection<string>;
  private listaEsperaObservable: Observable<string[]>;
 public usuarioActual;


  dbRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, 
    public alertCtrl: AlertController,
     ) {
    this.usuarioActual = null;
    this.dbRef = this.db.collection("users");
  }


  traerUnUsuarioPorMail(mail) {
   return this.dbRef.snapshotChanges().subscribe(e => {
      e.map(a => {
        const data = a.payload.doc.data() as User;

        if (data.email == mail) {
          this.usuarioActual = data;
          localStorage.setItem('usuario',  JSON.stringify(this.usuarioActual))
          console.info("traerUnUsuarioPorMail(mail)", this.usuarioActual);
        }

      });

    })
  }

  traerUnUsuarioPorMailMozo(mail) {
    let usuario = new User();
   this.dbRef.snapshotChanges().subscribe(e => {
      e.map(a => {
        const data = a.payload.doc.data() as User;

        if (data.email == mail) {
          usuario= data;      
          console.info("traerUnUsuarioPorMail(mail)", this.usuarioActual);
        }
      });
    })
    return usuario;
  }

  limpiarDescuento(usuario:User)
  {
    let ref = this.dbRef.doc(usuario.uid).collection('descuentos').doc('juego').set(
      {
        jugadas: 0,
        descuento: 0
      }
    );
  }


  limpiarUsuarioActual() {
  
    return this.usuarioActual=null;
  }

  traerUsuarioActual() {
     return this.usuarioActual;
  }


  actualizarUsuario(nuevoUsuario: User) {
    return this.dbRef.doc(nuevoUsuario.uid).set(JSON.parse(JSON.stringify(nuevoUsuario)), { merge: true });
  }

  enviarUsuario(nuevoUsuario: User) {
    let id = this.db.createId();
    nuevoUsuario.uid = id;
    this.usuarioActual = nuevoUsuario;
    return this.dbRef.doc(id).set(JSON.parse(JSON.stringify(nuevoUsuario)), { merge: true });
  }

  traerTodosUsuarios() {
    return this.dbRef.snapshotChanges();
  }

  traerUnUsuarios(uid) {
    return this.dbRef.doc(uid).valueChanges();
  }

  saveUsuario(usuario: User) {
    let id = this.db.createId();
    usuario.uid = id;
    console.info("this.dbRef", this.dbRef)
    return this.dbRef.doc(id).set(usuario);
  }


  TraerUsuariosOrdenMailAsc() {
    this.usuariosFirebase = this.db.collection<User>("users", ref => ref.orderBy('email', 'asc'));
    this.usuariosObservable = this.usuariosFirebase.valueChanges();
    return this.usuariosObservable;
  }

  ///////////////////////////////// recurso sin usar

    cargarUsuario(usuarioAGuardarJSON: any) {
      let id = this.db.createId();
      usuarioAGuardarJSON.id = id;
      return this.db.collection<User>("users").doc(id).set(usuarioAGuardarJSON);
    }

    validarUsuarioExiste(usuarios: User[], email: string) {
      if (usuarios.filter(function (user) {
        return user.email === email
      }).length >= 1) {
        //
        showAlert(this.alertCtrl, "Error", "Ya existe un usuario con ese email en el sistema");
        return true;
      }
      return false;
    }

    traerListaDeEspera() {
      this.listaEsperaFirebase = this.db.collection<any>("listaEspera", ref => ref.orderBy('fecha', 'asc'));
      this.listaEsperaObservable = this.listaEsperaFirebase.valueChanges();
      return this.listaEsperaObservable;
    }

    cargarRegistroListaDeEspera(registroAGuardarJSON: any) {
      return this.db.collection<any>("listaEspera").add(registroAGuardarJSON);
    }

    EliminarUsuario(id) {
      return this.db.collection<User>("users").doc(id).delete();
    }

    cargarUsuarioAnonimo(usuarioAGuardarJSON: any, id: string) {
      usuarioAGuardarJSON.id = id;
      return this.db.collection<User>("users").doc(id).set(usuarioAGuardarJSON);
    }

    /* RelacionUsuarioMesa(){
      let usuario = JSON.parse(sessionStorage.getItem('usuario'));

      //console.log(usuario);

      let ocupaMesa: boolean = false;

      this.mesaService.mesas.forEach(mesa => {

        if (mesa.usuario !== undefined && mesa.usuario !== null) {
          if (mesa.usuario.uid == usuario.uid) {
            ocupaMesa = true;
            sessionStorage.setItem("mesaOcupada", JSON.stringify(mesa));
          }
        }
      });


      return ocupaMesa;

      
    } */
    
  }
