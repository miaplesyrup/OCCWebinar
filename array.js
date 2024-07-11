// Array
let colors = ["red", "yellow", "blue",1];
console.log(colors);

// accessing individual elements
console.log("First color: ", colors[0]);
console.log("Last element: ", colors[colors.length - 1]);

// modifying elements
colors[2] = "black";
console.log(colors);

// .push() - adds element at the end of an array
colors.push("blue");
console.log(colors);

// .pop() 
colors.pop()
console.log(colors);

// .unshift()
colors.unshift("blue");
console.log(colors);

// .shift()
colors.shift();
console.log(colors);


// array iteration
for(let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// forEach
colors.forEach(function(color){
  console.log(color)
})

// indexOf
let pets = ["dog", "cat", "rabbit", "fish"];
console.log(pets.indexOf("cat"));

// .join()
console.log(pets.join("-"));