import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/Room';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room: Room = {
    title: '',
    description: ''
  }

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.room.title != '' && this.room.description != '') {
      this.roomService.addRoom(this.room);
      this.room.title = '';
      this.room.description = '';
    }
  }

}
