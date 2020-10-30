import { type } from "os"

// var types
export {}
const isMale : boolean = true 
let total : number = 0
let name : string = "Chihabeddine ahmed"
// name = true
let senetence : string = `My name is ${name}`
console.log(senetence)

// null && undefined
let n : null = null;
let u : undefined = undefined;

let iNew : boolean = null
let myNmae: string = undefined;

// array type
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

// couple type
let person1 :[string, number] = ["Chihabed",22];

// enum type
enum color {Red = 5, Green, Blue};
let c: color = color.Green;

// console.log(c)

//Any type
let randomVal : any = 30;
randomVal = true
randomVal = "Chihabeddein"
console.log(randomVal)

let myVar : any = 10
console.log(myVar.name);

// unknwn type
let unknonwVar : unknown = 10;

// check if obj as name property or not
function hasName(obj:any) :obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if(hasName(unknonwVar)){

    console.log(unknonwVar)
}
// (unknonwVar as string).toUpperCase()


// type inference
let a;
a = 10;
a = true

let b = 20;

let multiType : number | boolean
multiType = 20
multiType = true