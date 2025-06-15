import { gerarCVHtml } from './templates/template1.js'


const dados = {};

const conteinerCV = document.getElementById('conteinerCV');
conteinerCV.innerHTML = gerarCVHtml(dados);

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = new FormData(this);
    for (const [name, value] of form.entries()) {
        dados[name] = value;
    };

    conteinerCV.innerHTML = gerarCVHtml(dados);
});



const steps = document.querySelectorAll('.step') 
let currentStep = 0

function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.toggle('active', i === index)
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



document.querySelector('.download').addEventListener('click', async function(e) {
    e.preventDefault();
    
    await new Promise(resolve => setTimeout(resolve, 100));

    const opt = {
        margin: 10,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(conteinerCV).save();
})


