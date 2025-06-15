export function gerarCVHtml(dados = {}) {
    // Valores com fallback (evita erro se faltar algum campo)
    const nome = dados.nome || "Seu Nome";
    const endereco = dados.endereco || "Endereço não informado";
    const telefone = dados.telefone || "(00) 00000-0000";
    const email = dados.email || "seuemail@exemplo.com";
    const linkedin = dados.linkedin || "linkedin.com/seu-perfil";
    const cidade = dados.cidade || "Cidade";
    const estado = dados.estado || "Estado";
    const objetivo = dados.objetivo || "Atuar na área de [sua área de interesse] contribuindo com [sua principal habilidade].";

    const cargo = dados.cargo || "Cargo Ocupado";
    const empresa = dados.empresa || "Empresa";
    const periodo = dados.periodo || "Jan 2020 - Dez 2023";

    const curso = dados.curso || "Ensino médio";
    const instituicao = dados.instituicao || "Instituição de Ensino";
    const conclusao = dados.conclusao || "2022";

    const cursoExtra = dados.cursoExtra || "Nome do Curso";
    const extraInstituicao = dados.extraInstituicao || "Instituição";
    const cargaHoraria = dados.cargaHoraria || "40h";
    const anoCurso = dados.anoCurso || "2023";

    const habilidades = dados.habilidades || ["Pacote Office", "HTML/CSS", "Inglês Intermediário", "Trabalho em Equipe"];

    return `
    <style>
        .cvConteiner {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            padding: 20px;
            background-color: #f9f9f9;
            // border: 1px solid black;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }

        .header h1 {
            margin: 0;
            color: #2c3e50;
            font-size: 28px;
        }

        .header p {
            margin: 5px 0;
            color: #7f8c8d;
        }

        .section {
            margin-bottom: 20px;
        }

        .section h2 {
            background-color: #3498db;
            color: white;
            padding: 5px 10px;
            font-size: 18px;
            margin: 0 0 10px 0;
            border-left: 4px solid #2980b9;
        }

        .item {
            margin-bottom: 15px;
        }

        .item h3 {
            margin: 0;
            color: #2c3e50;
            font-size: 16px;
        }

        .item .subtitle {
            font-style: italic;
            color: #7f8c8d;
            margin: 5px 0;
        }

        .item ul {
            margin: 5px 0;
            padding-left: 20px;
        }

        .item ul li {
            margin-bottom: 3px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill {
            background-color: #e0e0e0;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 14px;
        }
    </style>
    <div class="cvConteiner">
        <div class="header">
            <h1>${nome}</h1>
            <p>📞 ${telefone} | ✉ ${email} |</p>
            <p>📍 ${endereco}, ${cidade} - ${estado}</p>
        </div>

        <div class="section">
            <h2>Objetivo</h2>
            <p>${objetivo}</p>
        </div>

        <div class="section">
            <h2>Experiência Profissional</h2>
            <div class="item">
                <h3>${cargo}</h3>
                <p class="subtitle">${empresa} | ${cidade}/${estado} | ${periodo}</p>
                <ul>
                    <li>Responsabilidade ou conquista relevante.</li>
                    <li>Outra realização importante.</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2>Formação Acadêmica</h2>
            <div class="item">
                <h3>${curso}</h3>
                <p class="subtitle">${instituicao} | ${cidade}/${estado} | Conclusão: ${conclusao}</p>
            </div>
        </div>

        <div class="section">
            <h2>Habilidades</h2>
            <div class="skills">
                ${habilidades.map(skill => `<span class="skill">${skill}</span>`).join("")}
            </div>
        </div>

        <div class="section">
            <h2>Cursos Complementares</h2>
            <div class="item">
                <h3>${cursoExtra}</h3>
                <p class="subtitle">${extraInstituicao} | Carga Horária: ${cargaHoraria} | ${anoCurso}</p>
            </div>
        </div>
    </div>
    `;
}
