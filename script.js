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

const assignAsKey = "Miljo";
console.log(agenda["in" + assignAsKey]);
console.log(agenda["ut" + assignAsKey]);

// a SUPER EXAMPLE  for usage of bracket notation

const searchInAsAssignedKey = prompt(
    "choose options among agenda objects' properties: friends, utexaminert, inMiljo, utMiljo"
);

if (agenda[searchInAsAssignedKey]) {
    console.log(agenda[searchInAsAssignedKey]);
} else {
    prompt(
        "spelling error. choose one, as written: friends, utexaminert, inMiljo, utMiljo"
    );
}

//add property to object
agenda.location = "nikaragua";
agenda["color"] = "red";
//console.log(agenda);
console.log(
    `agenda has ${agenda.friends.length} friends and they are ${agenda.friends} the first one is ${agenda.friends[0]} !`
);

*/
//function attached to object is method.
const anyWorker = {
    birth: 1000,
    hometown: "krekobo",
    married: false,
    numbers: [3, 5, 7],
    ////function is a method in an object
    // pensjonerer: function(birth) {
    //     // return console.log("pensonerer paa ", birth + 65);
    //     return birth + 65;
    // },
    //// use this
    // pensjonerer: function() {
    //     return this.birth + 65;
    // },
    //// RETURN/RESULT of a function as a NEW PROPERTY
    pensjonerer: function(birth) {
        this.obligRetireYear = this.birth + 65 + 4;
        return this.birth + 65;
    },

    getSummary: function() {
        return ` born in ${this.birth}, hometown is ${this.hometown}, numbers are ${
      this.numbers
    }, is ${
      this.married ? "married" : "single"
    }, pensonerer ${this.pensjonerer()}, absolutePensonerer ${
      this.obligRetireYear
    }`;
    },
};

//console.log(anyWorker);

////access method/function as a property
console.log(anyWorker.pensjonerer(2000));
//console.log(anyWorker["pensjonerer"]);
console.log(anyWorker.obligRetireYear);
console.log(anyWorker.getSummary(3000));