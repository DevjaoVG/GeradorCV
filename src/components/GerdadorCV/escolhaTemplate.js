import { gerarCVHtml } from "./templates/template1.js";
import { gerarCVHtml } from "./templates/template2.js";

const conteinerTemplate1 = document.querySelector('.template1');
conteinerTemplate1.innerHTML = gerarCVHtml();

const conteinerTemplate2 = document.querySelector('.template2');
conteinerTemplate2.innerHTML = gerarCVHtml();