(function main() {
  var model = {
    init: function() {
      this.cats = [
        {
          name: "Johnny",
          imgsrc: "./images/cat1.jpg",
          clickscount: 0
        },
        {
          name: "Phony",
          imgsrc: "./images/cat2.jpg",
          clickscount: 0
        },
        {
          name: "Tony",
          imgsrc: "./images/cat3.jpg",
          clickscount: 0
        },
        {
          name: "Donny",
          imgsrc: "./images/cat4.jpeg",
          clickscount: 0
        },
        {
          name: "Jerry",
          imgsrc: "./images/cat5.jpg",
          clickscount: 0
        }
      ];
      this.currentcat = null;
    }
  };

  var octopus = {
    getAllCats: function() {
      return model.cats;
    },
    setCurrentCat: function(e) {
      const cats = this.getAllCats();
      model.currentcat = cats.find(cat => cat.name === e.target.innerHTML);
      view.showCatDetails();
    },
    getCurrentCat: function() {
      return model.currentcat;
    },
    incrementCatCount: function() {
      model.currentcat.clickscount++;
      view.updateCounter();
    },
    init: function() {
      model.init();
      view.init();
    }
  };

  var view = {
    init: function() {
      const catList = document.getElementById("cat-list");
      const cats = octopus.getAllCats();
      cats.map(cat => {
        const catListItem = document.createElement("li");
        catListItem.innerHTML = cat.name;
        catListItem.addEventListener(
          "click",
          octopus.setCurrentCat.bind(octopus)
        );
        catList.appendChild(catListItem);
      });
    },
    showCatDetails: function() {
      const currentcat = octopus.getCurrentCat();
      const cat_name = document.getElementById("cat_name");
      const clickscount = document.getElementById("clickcounter");
      const catimg = document.getElementById("catimage");
      cat_name.innerHTML = currentcat.name;
      clickscount.innerHTML = currentcat.clickscount;
      catimg.setAttribute("src", currentcat.imgsrc);
      catimg.addEventListener("click", octopus.incrementCatCount);
    },
    updateCounter: function() {
      const clickscount = document.getElementById("clickcounter");
      const currentcat = octopus.getCurrentCat();
      clickscount.innerHTML = currentcat.clickscount;
    }
  };

  octopus.init();
})();
