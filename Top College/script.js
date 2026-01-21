let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let url = "http://universities.hipolabs.com/search?country=";

btn.addEventListener("click", async()=>{
    let country = input.value;
    let colAry = await getCollege(country);
    show(colAry);
    h3.innerText = `Here are universities in  ${country}:`;
    input.value = "";
});

async function getCollege(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(err){
        console.log("Error found", err)
        return [];
    }
};

function show(colAry) {
    ul.innerHTML = "";
    for(let col of colAry){
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
};
