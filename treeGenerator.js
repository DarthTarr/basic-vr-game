function draw(x, z, rad, height){
  let trunk = document.createElement("a-cylinder")
  trunk.setAttribute("position", (x-50) + " " + 0 + " " + (z-50))
  trunk.setAttribute("color", "#3B1700")
  trunk.setAttribute("radius", rad)
  trunk.setAttribute("height", height)
  scene.appendChild(trunk)
  let leaf = document.createElement("a-cone")
  leaf.setAttribute("position", (x-50) + " " + height/2 + " " + (z-50))
  leaf.setAttribute("color", "rgb(" + (Math.floor(Math.random()*255)) + "," + (Math.floor(Math.random()*255)) + "," + 0 + ")")
  leaf.setAttribute("height", height*2/5)
  leaf.setAttribute("radius-bottom", rad*5/2)
  scene.appendChild(leaf)
}
let scene = document.querySelector("a-scene");
  fetch("positions.json")
  .then(r => r.json())
  .then(b =>{
    for(let i = 0; i < b.positions.length; i++){
      draw(b.positions[i].x, b.positions[i].z, 0.4, 10)
    }
  })