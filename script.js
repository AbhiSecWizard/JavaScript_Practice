const conTainer = document.querySelectorAll(".click-container")
console.log(conTainer);
const coutainer_content = document.querySelector(".click-container h1")
let x = 0; // h1 se value le lo

conTainer.forEach((container) => {
    container.addEventListener("click", () => {
        x++;
        container.querySelector("h1").innerText = x;
        
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
})




