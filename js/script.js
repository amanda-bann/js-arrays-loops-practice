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
//stuff.forEach(function (item, index) {
//  if(index % 2 === 0) {
//    console.log(item);
// }
//});

// Exercise #2 - Remove an element from an array
var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(
      `Sorry, no such item found in this array.`
    );
  } else {
    array.splice(index, 1);
    console.log(`Removed ${item} from the array.`);
  }
  };

  removeItem(stuff, "coffee");
  console.log(stuff);
  removeItem(stuff, "sugar");
  console.log(stuff);