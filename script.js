// const cat1 = document.getElementById("cat1");
// const cat2 = document.getElementById("cat2");
// const clickCountercat1 = document.getElementById("clickcountercat1");
// const clickCountercat2 = document.getElementById("clickcountercat2");
const catList = document.getElementById("cat-list");

const cats = [
  {
    name: "Johnny",
    imgsrc: "./cat1.jpg",
    clickscount: 0
  },
  {
    name: "Phony",
    imgsrc: "./cat2.jpg",
    clickscount: 0
  },
  {
    name: "Tony",
    imgsrc: "./cat3.jpg",
    clickscount: 0
  },
  {
    name: "Donny",
    imgsrc: "./cat4.jpeg",
    clickscount: 0
  },
  {
    name: "Jerry",
    imgsrc: "./cat5.jpg",
    clickscount: 0
  }
];

(function() {
  cats.map(cat => {
    const catListItem = document.createElement("li");
    catListItem.innerHTML = cat.name;
    catListItem.addEventListener("click", showCatDetails);
    catList.appendChild(catListItem);
  });
})();

function showCatDetails(e) {
  const clickedCat = e.target.innerHTML;
  const cat = getCatFromData(clickedCat);
  populateCatDetails(cat);
}

function getCatFromData(catName) {
  return cats.find(cat => cat.name === catName);
}

function populateCatDetails(cat) {
  const cat_name = document.getElementById("cat_name");
  const clickscount = document.getElementById("clickcounter");
  const catimg = document.getElementById("catimage");
  cat_name.innerHTML = cat.name;
  clickscount.innerHTML = cat.clickscount;
  catimg.setAttribute("src", cat.imgsrc);
  catimg.addEventListener("click", incrementCatCounter);
}

function incrementCatCounter(e) {
  const imgsrc = e.target.getAttribute("src");
  const clickedCat = cats.find(cat => cat.imgsrc === imgsrc);
  clickedCat.clickscount++;
  updateCatsClickCount(clickedCat);
}

function updateCatsClickCount(cat) {
  const clickscount = document.getElementById("clickcounter");
  clickscount.innerHTML = cat.clickscount;
}
