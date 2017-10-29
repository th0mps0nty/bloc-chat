import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[];
  editState: boolean = false;
  roomToEdit: Room;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms => {
      //console.log(rooms);
      this.rooms = rooms;
    });
  }

  deleteRoom(event, room: Room) {
    this.clearState();
    this.roomService.deleteRoom(room);
  }

  editRoom(event, room: Room) {
    this.editState = true;
    this.roomToEdit = room;
  }

  updateRoom(room: Room) {
    this.roomService.updateRoom(room);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.roomToEdit = null;
  }

}
