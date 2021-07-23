export class Hero{

    id?:number;
    username:any;
    classType:string;
    strength: number;
    dexterity: number;
    intelligence: number;
    charisma: number;
    wisdom: number;
    willpower: number;
    constitution: number;
    name: string;
    race: string;
    gender:string;
    hairColor: string;
    eyeColor: string;
    skinTone:string;

    constructor(classType:string, username:string, strength:number, dexterity:number, intelligence:number, charisma:number, 
                    wisdom:number, willpower:number, constitution:number, name:string, race:string, gender:string,
                    hairColor:string, eyeColor:string, skinTone:string) {

        this.classType = classType; 
        this.username = username; 
        this.strength = strength; 
        this.dexterity = dexterity; 
        this.intelligence = intelligence; 
        this.charisma = charisma; 
        this.wisdom = wisdom; 
        this.willpower = willpower; 
        this.constitution = constitution;

        this.name = name; 
        this.race = race; 
        this.gender = gender; 
        this.hairColor = hairColor; 
        this.eyeColor = eyeColor; 
        this.skinTone = skinTone; 

    }
}