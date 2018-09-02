const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const clickCountercat1 = document.getElementById("clickcountercat1");
const clickCountercat2 = document.getElementById("clickcountercat2");
let clickcount = [0, 0];
cat1.addEventListener("click", e => {
  clickcount[0]++;
  clickCountercat1.innerText = clickcount[0];
});
cat2.addEventListener("click", e => {
  clickcount[1]++;
  clickCountercat2.innerText = clickcount[1];
});
console.log(cat);
