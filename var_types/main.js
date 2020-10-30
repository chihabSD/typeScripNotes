"use strict";
exports.__esModule = true;
var isMale = true;
var total = 0;
var name = "Chihabeddine ahmed";
// name = true
var senetence = "My name is " + name;
console.log(senetence);
// null && undefined
var n = null;
var u = undefined;
var iNew = null;
var myNmae = undefined;
// array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// couple type
var person1 = ["Chihabed", 22];
// enum type
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
// console.log(c)
//Any type
var randomVal = 30;
randomVal = true;
randomVal = "Chihabeddein";
console.log(randomVal);
var myVar = 10;
console.log(myVar.name);
// unknwn type
var unknonwVar = 10;
// check if obj as name property or not
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(unknonwVar)) {
    console.log(unknonwVar);
}
// (unknonwVar as string).toUpperCase()
// type inference
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
