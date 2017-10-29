import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Room } from '../models/Room';


@Injectable()
export class RoomService {
  roomsCollection: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>
  roomDoc: AngularFirestoreDocument<Room>;

  constructor(public afs: AngularFirestore) {
    //this.rooms = this.afs.collection('rooms').valueChanges();

    this.roomsCollection = this.afs.collection('rooms', ref => ref.orderBy('title', 'asc'));

    this.rooms = this.roomsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Room;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getRooms() {
    return this.rooms;
  }

  addRoom(room: Room) {
    this.roomsCollection.add(room);
  }

  deleteRoom(room: Room) {
    this.roomDoc = this.afs.doc(`rooms/${room.id}`);
    this.roomDoc.delete();
  }

  updateRoom(room: Room) {
    this.roomDoc = this.afs.doc(`rooms/${room.id}`);
    this.roomDoc.update(room);
  }

}
