import { gerarCVHtml } from './templates/template1.js'


// VISUALIZAÇÃO DO CV

// colocando ele na tela
const dados = {};
conteinerCV.innerHTML = gerarCVHtml(dados);

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = new FormData(this);
    for (const [name, value] of form.entries()) {
        dados[name] = value;
    };

    conteinerCV.innerHTML = gerarCVHtml(dados);
});



const conteinerVisuCv = document.querySelector('#conteinerCV').addEventListener('click', function(e) {
    e.preventDefault();

    conteinerCV.classList.toggle('conteinerCVExpandido');});


const stepsProgress = document.querySelectorAll('.stepNumber')
const steps = document.querySelectorAll('.step') 
let currentStep = 0

function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.toggle('active', i === index)
    });

    stepsProgress.forEach((stepProgress, i) => {
        stepProgress.classList.toggle('stepActive', i === index)
    });
}

document.querySelectorAll('.next-step').forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

document.querySelectorAll('.prev-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
});



document.querySelector('.finalizar').addEventListener('click', function(e) {
    e.preventDefault();

    localStorage.setItem('dadosCV', JSON.stringify(dados));
    window.location.href = './gerarCV.html';
});


