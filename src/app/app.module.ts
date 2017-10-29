import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { RoomsComponent } from './components/rooms/rooms.component';

import { RoomService } from './services/room.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddRoomComponent } from './components/add-room/add-room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavbarComponent,
    AddRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'bloc-chat-ng4'),
    AngularFirestoreModule

  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
