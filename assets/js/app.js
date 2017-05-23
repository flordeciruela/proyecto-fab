$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//aside

var aside=document.getElementById('asideCar');
var car=document.getElementById('carBag');
var carActivo=document.getElementsByClassName('car')[0];
var cerrar=document.getElementById('close-cart');
var overlay=document.getElementsByClassName('asideActive')[0];
var more=document.getElementsByClassName('shopMore')[0];
var body=document.getElementsByTagName('body')[0];

function compra(event){
  aside.style.display="block";
  carActivo.classList.add("carActivo");
  body.style.overflow="hidden";
}

function cierra(event){
  aside.style.display="none";
  carActivo.classList.remove("carActivo");
    body.style.overflow="auto";
}

cerrar.addEventListener('click',cierra);
car.addEventListener('click', compra);
overlay.addEventListener('click',cierra);
more.addEventListener('click',cierra);

//compra

var carrusel=document.getElementById('carrousel');
// var bag=document.getElementById('bag-compra');
var shopp=document.getElementsByClassName('shop')[0];
var imgprod=document.getElementById('img01');
var priceprod=document.getElementById('price');

var bagArray=[];

function Objeto(src,price){
  this.src=src;
  this.price=price;
}

function bolsa(event){
  var objeto=new Objeto(event.target.src,event.target.alt);
  bagArray.push(objeto);
  if(event.target.tagName=="IMG"){
    var bag=document.getElementById('bag-compra');
    console.log(event.target.src);
    console.log(event.target.alt);
    compra();
    bag.style.display="block";
    shopp.style.display="none";
    var tamano=bagArray.length;
    for(var i=tamano-1; i<tamano;i++){
      var div1=document.createElement('div');
      div1.className="img-bag";
      var img1=document.createElement('img');
      img1.src=bagArray[i].src;
      var span1=document.createElement('span');
      span1.innerHTML="El precio es "+ bagArray[i].price;

      div1.appendChild(img1);
      div1.appendChild(span1);
      bag.appendChild(div1);
    }
    console.log(bagArray);
    console.log(bagArray[0].price);
    console.log(bagArray.length);
}
}

carrusel.addEventListener('click',bolsa);
