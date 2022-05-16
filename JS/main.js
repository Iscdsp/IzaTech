const izaTech = document.querySelector(".izatech-container");


function aparecerIzatech() {
    izaTech.classList.add("show-iza");
}

const baloesColuna1 = document.querySelector("#blnColuna1");
const baloesColuna2 = document.querySelector("#blnColuna2");
const baloesColuna3 = document.querySelector("#blnColuna3");


function aparecerBaloes (){
    baloesColuna1.classList.add("show-blln");
    baloesColuna2.classList.add("show-blln");
    baloesColuna3.classList.add("show-blln");
}

const texto = document.querySelector('#texto1');
const texto2 = document.querySelector('#texto2');
const imagem = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');


function aparecerEfeito1() {
    texto.classList.add("texto-show");    
    imagem.classList.add("texto-show");
    console.log("foi");
}
function aparecerEfeito2() {;
    texto2.classList.add("texto-show");
    imagem2.classList.add("texto-show");
    console.log("foi");
}

function tirarEfeito() {
    texto.classList.remove("texto-show");
    texto2.classList.remove("texto-show");
    imagem.classList.remove("texto-show");
    imagem2.classList.remove("texto-show");
    console.log("foi");
}


const p01 = document.querySelector('#p01');
const p02 = document.querySelector('#p02');
const p03 = document.querySelector('#p03');
const p04 = document.querySelector('#p04');
const p05 = document.querySelector('#p05');
const p06 = document.querySelector('#p06');
const p07 = document.querySelector('#p07');
const p08 = document.querySelector('#p08');
const p09 = document.querySelector('#p09');
const p10 = document.querySelector('#p10');
const p11 = document.querySelector('#p11');

function mostrarTexto1(){
    p01.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto1(){
    p01.classList.remove('show-text-card');
}

function mostrarTexto2(){
    p02.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto2(){
    p02.classList.remove('show-text-card');
}

function mostrarTexto3(){
    p03.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto3(){
    p03.classList.remove('show-text-card');
}

function mostrarTexto4(){
    p04.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto4(){
    p04.classList.remove('show-text-card');
}

function mostrarTexto5(){
    p05.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto5(){
    p05.classList.remove('show-text-card');
}

function mostrarTexto6(){
    p06.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto6(){
    p06.classList.remove('show-text-card');
}

function mostrarTexto7(){
    p07.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto7(){
    p07.classList.remove('show-text-card');
}

function mostrarTexto8(){
    p08.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto8(){
    p08.classList.remove('show-text-card');
}

function mostrarTexto9(){
    p09.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto9(){
    p09.classList.remove('show-text-card');
}

function mostrarTexto10(){
    p10.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto10(){
    p10.classList.remove('show-text-card');
}

function mostrarTexto11(){
    p11.classList.add('show-text-card');
    console.log("foi")
}
function removeTexto11(){
    p11.classList.remove('show-text-card');
}