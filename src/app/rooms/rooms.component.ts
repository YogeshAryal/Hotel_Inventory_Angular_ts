import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Big Boss";
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [{
    roomType: 'Deluxe Room',
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
    price: 1500,
    photos: "https://www.hotelroomsearch.net/im/hotel/uk/london/ibis-london-earls-court-2.jpg",
    checkInTime: new Date("11-Nov-2020"),
    checkOutTime: new Date("12-Nov-2020"),
    roomNumber: 231
  },
  {
    roomType: 'Normal Room',
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
    price: 500,
    photos: "https://www.hotelroomsearch.net/im/hotel/uk/london/ibis-london-earls-court-2.jpg",
    checkInTime: new Date("11-Nov-2020"),
    checkOutTime: new Date("12-Nov-2020"),
    roomNumber: 232
  },
  {
    roomType: 'King Room',
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
    price: 2500,
    photos: "https://www.hotelroomsearch.net/im/hotel/uk/london/ibis-london-earls-court-2.jpg",
    checkInTime: new Date("11-Nov-2020"),
    checkOutTime: new Date("12-Nov-2020"),
    roomNumber: 233
  }
  ]
  handleToggle() {
    this.hideRooms = !this.hideRooms;
  }
}
