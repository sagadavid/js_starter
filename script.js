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