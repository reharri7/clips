import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ManageComponent } from './video/manage/manage.component';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ClipsListComponent } from './clips-list/clips-list.component';
import { FbTimestampPipe } from './pipes/fb-timestamp.pipe';
import { VideoModule } from './video/video.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ManageComponent,
    ClipComponent,
    NotFoundComponent,
    ClipsListComponent,
    FbTimestampPipe,

  ],
  imports: [
    BrowserModule,
    VideoModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
