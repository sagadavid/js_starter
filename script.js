/*
const friends = ["joe", "jack", "jimmy"];
console.log(friends);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

console.log(friends[3]); //results undefined

friends.push("joelin");
console.log(friends);

const unshifted = friends.unshift("koneva");
console.log(friends + " -> koneva added/unshifted");

const shifted = friends.shift();
console.log(shifted + "-> removed/shifted ");
console.log(friends);

const popped = friends.pop();
console.log(friends);
console.log(popped);
*/

//objects, dot notation

const agenda = {
    friends: ["martin", "olav", "henrik"],
    utexaminert: 2006,
    inMiljo: "kristiansand",
    utMiljo: "norge",
};

console.log(agenda.inMiljo);

//objects, brackets notation

console.log(agenda["utexaminert"]);

//using bracket notation instedof object properties

const propertyKey = "Miljo";
console.log(agenda["in" + propertyKey]);
console.log(agenda["ut" + propertyKey]);

// a SUPER EXAMPLE  for usage of bracket notation

const searchDetail = prompt(
    "choose the detail in the agenda, friends, utexaminert, inMiljo or utMiljo"
);
console.log(agenda[searchDetail]);