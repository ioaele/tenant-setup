import { Component, OnInit, inject } from '@angular/core';
import { AccommondationM } from '../../models/accommondation-m';
import { Building } from '../../models/building';
import { Floor } from '../../models/floor';
import { Ward } from '../../models/ward';
import { Room } from '../../models/room';
import { Bed } from '../../models/bed';
import { Numbering } from '../../models/numbering';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Facilities } from '../facilities-service';

@Component({
  selector: 'app-accommondation',
  standalone: false,
  templateUrl: './accommondation.html',
  styleUrl: './accommondation.css',
})
export class Accommondation implements OnInit {
  numberings: Numbering[] = []
  selectedNumbering: Numbering = { numbering: '[1,2,3]', value: 1 }
  constructor(private router: Router,private accServicee:Facilities) { }
  ngOnInit(): void {
    this.BuildingName = "Building" + " " + (this.accommondations.buildings.length + 1);

const acc = this.accServicee.getAcc();


    this.numberings = [
      { numbering: '[1,2,3]', value: 1 },
      { numbering: '[A,B,C]', value: 2 },
    ];

  }

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  selectedBuildingIndex: number = 0;
  selectedFloorIndex: number = 0;

  visibleLabels: boolean = false;
  visibleBuilding: boolean = false;
  visibleRooms: boolean = false;
  visibleBeds: boolean = false
  accommondations: AccommondationM = new AccommondationM();
  BuildingName: string = ""
  wards: Ward[] = [];
  rooms: Room[] = [];

  selectedWardIndex: number = 0;


  makeVisibleBed(wardIndex: number) {
    this.selectedWardIndex = wardIndex;

    this.visibleBeds = true;
  }

  makeVisibleBuilding() {
    this.visibleBuilding = true;
    this.BuildingName = "Building" + " " + (this.accommondations.buildings.length + 1);
  }
  makeVisibleRoom(buildingIndex: number, floorIndex: number) {
    this.visibleRooms = true;
    this.selectedBuildingIndex = buildingIndex;
    this.selectedFloorIndex = floorIndex;
  }





  AddBuilding() {
    const name = this.BuildingName.trim() || "Building" + " " + (this.accommondations.buildings.length + 1);
    const building = new Building(this.accommondations.buildings.length + 1, name)

    this.accommondations.buildings.push(building)
    console.log(this.accommondations)

    this.BuildingName = " "
    this.visibleBuilding = false
  }

  deleteBuilding(buildingIndex: number) {
    this.accommondations.buildings.splice(buildingIndex, 1)
    let buildingCount = this.accommondations.buildings.length
    for (let i = 0; i < buildingCount; i++) {
      let building = this.accommondations.buildings[i]
      if (building.name === ("Building " + building.id))
        building.name = "Building " + i

      building.id = i
    }
    console.log(this.accommondations)
  }


  AddFloor(buildingIndex: number) {


    const floor = new Floor(this.accommondations.buildings[buildingIndex].floors.length)

    this.accommondations.buildings[buildingIndex].floors.push(floor)
    console.log(this.accommondations)
  }


  deleteFloor(buildingIndex: number, floorIndex: number) {
    this.accommondations.buildings[buildingIndex].floors.splice(floorIndex, 1)
    let floorCount = this.accommondations.buildings[buildingIndex].floors.length
    for (let i = 0; i < floorCount; i++) {
      let floor = this.accommondations.buildings[buildingIndex].floors[i]
      if (floor.name === ("Floor " + floor.id))
        floor.name = "Floor " + i

      floor.id = i
    }

    console.log(this.accommondations)
  }


  setWards(buildingIndex: number, floorIndex: number) {
    const floor = this.accommondations.buildings[buildingIndex].floors[floorIndex];
    floor.wards = [];
    for (let i = 0; i < floor.wardCount; i++) {
      floor.wards.push(new Ward(i, this.accommondations.wardName + ' ' + (i + 1)));
    }

    console.log(this.accommondations);
  }

  AddFloorAndSet1WardAnd1Room(buildingIndex: number) {

    this.AddFloor(buildingIndex)
    const FirstFloor = this.accommondations.buildings[buildingIndex].floors.length - 1;

    this.setWards(buildingIndex, FirstFloor)
    const FirstWard = this.accommondations.buildings[buildingIndex].floors[FirstFloor].wards.length - 1;

    this.setRooms(buildingIndex, FirstFloor, FirstWard)

      const FirstRoom =this.accommondations.buildings[buildingIndex].floors[FirstFloor].wards[FirstWard].rooms.length-1;

      this.setBeds (buildingIndex, FirstFloor, FirstWard,FirstRoom)


     console.log(this.accommondations)

}
  



  setRooms(buildingIndex: number, floorIndex: number, wardIndex: number) {



    const ward = this.accommondations.buildings[buildingIndex].floors[floorIndex].wards[wardIndex];

    ward.rooms = [];
    for (let i = 0; i < ward.roomCount; i++) {
      const roomNumber = (floorIndex + 1) * 100 + (i + 1);  // floor 0:101,102 | floor 1:201,202
      ward.rooms.push(new Room(roomNumber.toString()));
    }
     console.log(this.accommondations)
  }




  setBeds(buildingIndex: number, floorIndex: number, wardIndex: number, roomIndex: number) {



    const room = this.accommondations.buildings[buildingIndex].floors[floorIndex].wards[wardIndex].rooms[roomIndex];

    room.beds = [];
    for (let i = 0; i < room.bedCount; i++) {
      if (this.selectedNumbering.value === 1) {
        room.beds.push(new Bed(i.toString(), this.accommondations.bedName));
      }
      else {
        room.beds.push(new Bed(String.fromCharCode(65 + i), this.accommondations.bedName));



      }
    }
     console.log(this.accommondations)
  }


  back() {
    this.accServicee.addAccom(this.accommondations);

    this.router.navigate(['/packages']);
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to submit this tenant?',
      header: 'Confirm Submission',
      icon: 'pi pi-check-circle',

      rejectLabel: 'Cancel',

      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },

      acceptButtonProps: {
        label: 'Confirm',
        severity: 'success'
      },

      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Tenant submitted successfully'
          
        });
    
      },

      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Cancelled',
          detail: 'Submission was cancelled'
        });
      }
    });
  }
}


