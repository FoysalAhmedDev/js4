// parameter pass function
function radio(name, age) {
  // console.log(`My name is ${name}. I am ${age} years old.`);
  console.log(
    "My name is" + " " + name + "." + "I am" + " " + age + " " + "years old."
  );
}
radio("foysal", 25);

let country = [
  "Argentina",
  "Spain",
  420,
  "Pakistan",
  210,
  "China",
  "Brazil",
  "Mexico",
  "Bangladesh",
];
console.log(country);
console.log(country.length);
console.log(typeof country);

// for loop
for (let i = 0; i < country.length; i++) {
  console.log(country[i]);
}

// map
country.map((item) => {
  console.log(item);
});

// forEach
country.forEach((item) => {
  console.log(item);
});

// Document Object Model (DOM)

let black = document.querySelector(".black");
let teal = document.querySelector(".teal");
let tomato = document.querySelector(".tomato");
let heading = document.querySelector("h1");
let position = document.querySelector(".position");
black.addEventListener("click", () => {
  document.body.style.background = "black";
  black.style.background = "white";
  black.style.color = "black";
  position.style.color = "white";
  heading.style.color = "white";
  heading.innerHTML = "আল-আমিন স্যার";
  heading.style.color = "tomato";
  heading.style.fontSize = "70px";
});
teal.addEventListener("click", () => {
  document.body.style.background = "teal";
  teal.style.background = "black";
  teal.style.color = "teal";
  position.style.color = "white";
  heading.style.color = "black";
});
tomato.addEventListener("click", () => {
  document.body.style.background = "tomato";
  tomato.style.background = "black";
  tomato.style.color = "tomato";
  position.style.color = "white";
  heading.style.color = "white";
});
