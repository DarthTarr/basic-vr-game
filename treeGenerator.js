let scene = document.querySelector("a-scene");
let logs = [50]
let leafs = [50]
for(let i= 0; i < 50; i++){
    let x = 0
    let z = 0
    while(x == 0){
      x = Math.random()*100
    }
    while(z == 0){
      z = Math.random()*100
    }
    logs[i] = document.createElement("a-cylinder")
    logs[i].setAttribute("position", (x-50) + " " + 0 + " " + (z-50))
    logs[i].setAttribute("color", "#3B1700")
    logs[i].setAttribute("radius", Math.max(Math.min(1, Math.random()+0.1), 0.3))
    logs[i].setAttribute("height", 10)
    scene.appendChild(logs[i])
    leafs[i] = document.createElement("a-cone")
    leafs[i].setAttribute("position", (x-50) + " " + 5 + " " + (z-50))
    leafs[i].setAttribute("color", "rgb(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + 0 + ")")
    leafs[i].setAttribute("height", 4)
    leafs[i].setAttribute("radius-bottom", 2)
    scene.appendChild(leafs[i])
  }