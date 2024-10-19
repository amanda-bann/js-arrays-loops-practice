var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

// Exercise #1 - Log out even index items
stuff.forEach(function (item, index) {
  if(index % 2 === 0) {
    console.log(item);
  }
});