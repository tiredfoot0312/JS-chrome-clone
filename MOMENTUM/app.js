const me = "Jase";
const array = [1, 2, 3, "four", true, false, me];
console.log(array);
array[2] = "two";
console.log(array);
array.push("add");
console.log(array);

// object : value having meaning
const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("Lynn");
