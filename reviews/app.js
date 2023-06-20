// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

/*
 *
 * select items from index
 *
 */

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// Load intial item

window.addEventListener("DOMContentLoaded", function () {
  // console.log("shake and bake!!!")
  showPerson();
});

/*
 * Show person based on itme
 */

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

/*
 * Show next person
 */

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem >= reviews.length) currentItem = 0;
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) currentItem = reviews.length - 1;
  showPerson();
});

function getTotalRandom() {
  randomIndex = currentItem;
  while (randomIndex != currentItem) {
    randomIndex = Math.floor(Math.random() * (reviews.length - 1));
    console.log("Random: ", randomIndex);
  }
  currentItem = randomIndex;
}

randomBtn.addEventListener("click", function () {
  console.log("here at random");
  let randomIndex = currentItem;
  while (randomIndex == currentItem) {
    randomIndex = Math.floor(Math.random() * (reviews.length));
  }
  currentItem = randomIndex;
  showPerson();
});
