import { Floor } from "./floor";
export class Building {
    id:number=0
    name:string=""
    floors:Floor[]=[]

    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
}
