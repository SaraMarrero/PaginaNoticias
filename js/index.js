// Variables
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const opcionesMenu = document.getElementById('nav-links');

const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
const menu5 = document.getElementById('menu5');

// Eventos
toggleButton.addEventListener('click', open);
navWrapper.addEventListener('click', close);
opcionesMenu.addEventListener('click', closeBurguer);

// Funciones
// Se muestra el menú
function open(){
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");

    menu.style.color = 'black';
    menu2.style.color = 'black';
    menu3.style.color = 'black';
    menu4.style.color = 'black';
    menu5.style.color = 'black';
    
    menu.style.marginTop = '2em;'
    menu.style.margin = '1em';
    menu2.style.margin = '1em';
    menu3.style.margin = '1em';
    menu4.style.margin = '1em';
    menu5.style.margin = '1em';
};

// Se cierra el menu
function close(e){
    if (e.target.id === "nav") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
};

function closeBurguer(e){
    if (e.target.id === "menu") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
};

function estilos(){
    menu.style.color = 'pink';
}