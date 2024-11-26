const ovni = document.getElementById("ovni");


let posX = 0;
let posY = 0;
let velX = Math.floor(Math.random() * 10) + 1;
let velY = Math.floor(Math.random() * 10) + 1;
let velRot = 2;
let posRot =0;
let movimientos = setInterval(mover, 10);




function mover() {
    posX += velX
    posY += velY
    posRot += velRot;
    if (posX + ovni.offsetWidth > window.innerWidth || posX < 0) velX *= -1;
    if (posY + ovni.offsetHeight > window.innerHeight || posY < 0) velY *= -1;
    ovni.style.transform =``
    ovni.style.transform = `translate(${posX}px,${posY}px) rotate(${posRot}deg)`

}