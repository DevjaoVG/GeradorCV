import { gerarCVHtml } from './templates/template1.js'


const dados = JSON.parse(localStorage.getItem('dadosCV')) || {};

const conteinerCV = document.getElementById('conteinerCVdownload');
conteinerCV.innerHTML = gerarCVHtml(dados);


document.querySelector('.download').addEventListener('click', async function(e) {
    e.preventDefault();

    const opt = {
        margin: 10,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const cv = conteinerCV.querySelector('.cvConteiner');

    await new Promise(resolve => setTimeout(resolve, 500));

    html2pdf().set(opt).from(cv).save();
});
