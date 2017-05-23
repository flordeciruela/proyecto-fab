// $(document).foundation()

//carrito

var aside=document.getElementById('asideCar');
var car=document.getElementById('carBag');
var carActivo=document.getElementsByClassName('car')[0];
var cerrar=document.getElementById('close-cart');
var overlay=document.getElementsByClassName('asideActive')[0];
var more=document.getElementsByClassName('shopMore')[0];

function compra(event){
  aside.style.display="block";
  carActivo.classList.add("carActivo");
}

function cierra(event){
  aside.style.display="none";
  carActivo.classList.remove("carActivo");
}

cerrar.addEventListener('click',cierra);
car.addEventListener('click', compra);
overlay.addEventListener('click',cierra);
more.addEventListener('click',cierra);
