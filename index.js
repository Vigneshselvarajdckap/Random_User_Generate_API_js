const main = document.querySelector(".main")
const imng = document.querySelector("img")
const h1 = document.querySelector("h1")
const btn = document.querySelector(".btn")


let arr =[ ]
window.addEventListener("DOMContentLoaded",()=>{
    fetch("https://randomuser.me/api/?results=1")
    .then(result => result.json())
    .then(results=>{
        arr.push(results)
        // api(arr)

        for(let i=0;i<arr.length;i++){
            // arr[i].results;
            api(arr[i].results)
        }
    })
})

btn.addEventListener("click",()=>{
    fetch("https://randomuser.me/api/?results=20")
    .then(result => result.json())
    .then(results=>{
        arr.push(results)
        // api(arr)

        for(let i=0;i<arr.length;i++){
            // arr[i].results;
            api(arr[i].results)
        }
    })
})

function api(random){
    for(let i = 0 ; i <random.length;i++){
        // console.log(random[i]);
        imng.src = random[i].picture.large
        h1.innerText = random[i].name.first
    }
}