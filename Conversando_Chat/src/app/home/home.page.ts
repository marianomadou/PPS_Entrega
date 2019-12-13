import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../service/auth.service';
import { User } from '../shared/user.class';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = new User();

  

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) { 

    }

    ngOnInit() {
      this.bienvenido();
    }
  
    async bienvenido(){
      var obs= this.afAuth.auth.currentUser;
      var email = obs.email;
      var name = document.getElementById('name');
      name.innerHTML = `<strong>${email}</strong>`;
    }
    
  

  onLogout() {
    console.log('Usted está deslogueado');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}

