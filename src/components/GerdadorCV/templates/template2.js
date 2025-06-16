export function gerarCVHtml(dados = {}) {
    const nome = dados.nome || "Seu Nome";
    const telefone = dados.telefone || "(00) 00000-0000";
    const email = dados.email || "seuemail@exemplo.com";
    const objetivo = dados.objetivo || "Descreva seu objetivo profissional com clareza, destacando sua contribuição para a empresa.";

    const formacoes = dados.formacoes || [
        { inicio: "2010", fim: "2014", instituicao: "Faculdade Exemplo", curso: "Curso de Exemplo" },
    ];

    const experiencias = dados.experiencias || [
        {
            inicio: "2020",
            fim: "2023",
            empresa: "Empresa Exemplo",
            cargo: "Cargo Ocupado",
            descricao: "Descreva suas principais atividades e resultados nesse cargo."
        },
    ];

    return `
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Segoe UI", sans-serif;
            font-size: 1em;
        }

        .cvConteiner {
            background-color: #ffffff;
            width: 100%;
            max-width: 800px;
            margin: 40px auto;
            padding: 40px 50px;
            color: #000;
        }

        .header h1 {
            font-size: 30px;
            font-weight: 800;
            margin-bottom: 4px;
        }

        .header h2 {
            font-size: 17px;
            font-weight: 400;
            margin-bottom: 20px;
        }

        .contato {
            display: flex;
            flex-wrap: wrap;
            font-size: 15px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            margin-bottom: 30px;
            gap: 20px;
        }

        .section {
            margin-bottom: 30px;
            min-height: 200px
            max-width: 800px;
        }

        .section h3 {
            font-size: 16px;
            font-weight: 800;
            margin-bottom: 10px;
        }

        .item {
            margin-bottom: 15px;
        }

        .item h4 {
            font-size: 15px;
            font-weight: 700;
        }

        .item .subinfo {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .item .descricao {
            font-size: 14.5px;
            color: #333;
            line-height: 1.6;
        }
    </style>

    <div class="cvConteiner">
        <div class="header">
            <h1>${nome}</h1>
        </div>

        <div class="contato">
            <span>📞 ${telefone}</span>
            <span>✉ ${email}</span>
        </div>

        <div class="section">
            <h3>OBJETIVOS</h3>
            <p class="descricao">${objetivo}</p>
        </div>

        <div class="section">
            <h3>FORMAÇÃO</h3>
            ${formacoes.map(f => `
                <div class="item">
                    <h4>${f.inicio} - ${f.fim} | ${f.instituicao.toUpperCase()}</h4>
                    <p class="descricao">${f.curso}</p>
                </div>
            `).join("")}
        </div>

        <div class="section">
            <h3>EXPERIÊNCIAS</h3>
            ${experiencias.map(e => `
                <div class="item">
                    <h4>${e.inicio} - ${e.fim} | ${e.empresa.toUpperCase()}</h4>
                    <p class="subinfo">${e.cargo}</p>
                    <p class="descricao">${e.descricao}</p>
                </div>
            `).join("")}
        </div>
    </div>
    `;
}
