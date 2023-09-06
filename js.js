

let mayor = prompt("Sos mayor de edad?")

if(mayor > 18){
    alert("Entras porque sos mayor");
} else {
    alert("Entras bajo tu responsabilidad");
}

alert("Hola ! Bienvenidos a nuestro sitio, Campeones del Mundo.")

document.addEventListener("click",function (e){
if(e.target.classList.contains("galeria-item")){
const src = e.target.getAttribute("src");
document.querySelector(".modal-img").src = src;
const myModal = new bootstrap.Modal(document.getElementById('galeria-popup'));
myModal.show();
} 
})