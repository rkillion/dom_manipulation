let liElement = document.createElement('li');
liElement.textContent = "Hey there";
document.body.append(liElement);

let box = document.createElement("div");
document.body.prepend(box);

let div = document.querySelector("div");
div.id = "container";
div.style.display = "block"
div.style.width = "400px"
div.style.height = "400px"
div.style.border = "2px solid black"
div.randomThing = "random Value";

let thisObject = {};
thisObject.whatever = "a thing";
console.log(thisObject);

let newObject = thisObject;
newObject.newthing = "new value";
console.log(thisObject);

function exampleFunction() {
    console.log("this");
}

document.querySelector("#container").addEventListener("click",e => console.log(e))
document.querySelector("#canvas").addEventListener("click",e => console.log(`${e.target.style.x}-${e.target.style.y}`)) //`${e.target.style.x}-${e.target.style.y}`
let newRect = document.querySelector("#rect1").cloneNode(true);
newRect.id = "rect2";
newRect.style.x = "100";
newRect.style.y = "10";
newRect.style.fill = "orange";
document.querySelector("#canvas").appendChild(newRect);

//document.addEventListener("keydown",e => console.log(e));