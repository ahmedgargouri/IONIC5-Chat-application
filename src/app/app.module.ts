import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth/auth.service';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { UserService } from './services/user/user.service';
import { UtilService } from './services/util/util.service';
import { CameraService } from './services/camera/camera.service';
import { ChatsService } from './services/chats/chats.service';


var firebaseConfig = {
  apiKey: "AIzaSyA2mjJuplMvWoh3nUOm_d3K56bSywS9OQM",
  authDomain: "udemyproject-a0bd1.firebaseapp.com",
  projectId: "udemyproject-a0bd1",
  storageBucket: "udemyproject-a0bd1.appspot.com",
  messagingSenderId: "940536683000",
  appId: "1:940536683000:web:0c1432cbea7ac376891e0d",
  measurementId: "G-9Y4MK3LNNX"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     AngularFirestoreModule,
     IonicStorageModule.forRoot(),
    ],
  providers: [
    StatusBar,
    AuthService,
    AngularFireAuth,
    Storage,
    Camera,
    AuthService,
    UserService,
    ChatsService,
    UtilService,
    CameraService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
