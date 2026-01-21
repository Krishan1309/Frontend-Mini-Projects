let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");
let para = document.querySelector("p");
let colorContainer = document.querySelector(".colorContainer")


btn.addEventListener("click", ()=>{
    let red = Math.floor(Math.random()*255)+1;
    let green = Math.floor(Math.random()*255)+1;
    let blue = Math.floor(Math.random()*255)+1;
    let color = `rgb(${red},${green},${blue})`;
    h3.innerText = `Color code: ${color}`;
    h3.style.color = "#e11d48";
    colorContainer.style.backgroundColor = color;
    para.innerText = "This is your newly generated color.";
});
