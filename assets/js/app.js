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
