import { Ward } from "./ward";

export class Floor{
     id:number=0
    name:string=""
    wards:Ward[]=[]
    wardCount:number=1
constructor(id: number, name: string = "Floor " + id) {
        this.id=id
        this.name=name
    }

}