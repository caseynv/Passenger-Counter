const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");


let count = 0;
incrementBtn.addEventListener("click", () => {
        
        count += 1;
        countEl.innerText = count;

});

saveBtn.addEventListener("click", () => {
    saveEl.innerText += `- ${count}`;
    function updateCounter(){
        countEl.innerText = 0;
        count = 0;
    }
    updateCounter();
    
});

