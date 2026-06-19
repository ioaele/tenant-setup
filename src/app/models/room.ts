import { Bed } from "./bed"


export class Room{
    name:string=""
    beds:Bed[]=[]
    bedCount:number=1



constructor (name:string){
    this.name=name
}
}