import { Room } from "./room";

export class Ward {
id:number =0
name:string=""
rooms:Room[]=[]
roomCount:number=1

    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }


}
