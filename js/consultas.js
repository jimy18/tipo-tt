var texto, i, propuesta, inicio, boton, parrafo, correo, texto1,nav,a,box1,box2;
var nav=document.getElementById("nav");
var box=document.getElementById("box1");
var twit=document.createElement("button");
twit.id="twit";
twit.className="lightbox-trigger";
twit.onclick=openModal;
twit.innerHTML="Twittear";
nav.appendChild(twit);
box2 =document.createElement("div");
box2.className="modal-content";
box2.id="box";
box.appendChild(box2);
function publicar()
{
  a =document.createElement("span");
  a.onclick=closeModal;
  a.className="close";
  a.innerText="X";
  box2.appendChild(a);
}

function closeModal()
{
  document.getElementById("box1").style.display = "none";
  var x = document.getElementById("box");
 var y = x.getElementsByTagName("*");
 var i;
 for (i = 0; i < y.length; i=i+2) {
   y[i].value="";
 }
}
function openModal()
{
  document.getElementById("box1").style.display = "block";
}

function boton()
{
  boton=document.createElement("button");
  boton.innerHTML="Click";
  boton.onclick=clickear;
  boton.id="click";
  box2.appendChild(boton);
}
function textArea()
{
  parrafo=document.createElement("p");
  parrafo.innerText="Propuesta";

  propuesta=document.createElement("textarea");
  propuesta.id="Propuesta";
  propuesta.rows=5;
  propuesta.cols=50;
  propuesta.placeholder="escribe tu propuesta";
  box2.appendChild(parrafo);
  box2.appendChild(propuesta);
}
function cargar()
{
  // Se crea el array para los textos y los inputs, solo hay que agregarle un valor al array si queremos un input mas
  texto=["Candidato","Correo","Telefono"];
  for (i in texto) {
    // creamos el texto que va a ir sobre los input
    texto1=document.createElement("p");
    // creamos los input que vamos a necesitar del array texto
    var x=document.createElement("input");
    // indicamos el tipo del input
    x.type="text";
    // asignamos el contenido a los parrafos que creamos de la variable texto1
    texto1.innerHTML=texto[i];
    // asignamos el id a los input con el valor de el array texto
    x.id=texto[i];
    box2.appendChild(texto1);
    box2.appendChild(x);

  }
}
function clickear()
{
    var name={},n="",u;
    // a nuestro array name le asignamos los valores que estan en los inputs
    name.candidato=document.getElementById("Candidato").value;
    name.correo=document.getElementById("Correo").value;
    name.propuesta=document.getElementById("Propuesta").value;
    console.log(name);
    u=document.getElementById("lista");
    for (i in name)
    {
      var  l=document.createElement("li");
      l.id=name[i];
      n=document.createTextNode(name[i]);
      l.appendChild(n);
      u.appendChild(l);
    }
    console.log(name);
    console.log(n);
}
function principal()
{
  publicar();
  cargar();
  textArea();
  boton();
}

// window.onclick =function (event)
// {
//   if (event.target == box1)
//   {
//     box1.style.display = "none";
//   }
// }
