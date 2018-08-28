const cat = document.getElementById('cat');
const clickCounter = document.getElementById('clickcounter');
let clickcount = 0;
cat.addEventListener('click',(e) => {
    clickcount++;
    clickCounter.innerText = clickcount;
});
console.log(cat);