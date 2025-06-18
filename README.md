 Gerador de Currículos Online
Plataforma interativa para criação de currículos personalizados, pensada especialmente para jovens em início de carreira.
Com uma interface moderna e simples, o usuário pode montar, revisar e baixar seu currículo em poucos passos.

🚀 Funcionalidades
Formulário multistep intuitivo para inserção de dados pessoais, experiências e habilidades.

Template profissional e responsivo.

Exportação para PDF com layout limpo e moderno.

Interface amigável, acessível em dispositivos móveis e desktops.


🛠️ Tecnologias Utilizadas
HTML5 / CSS3 / JavaScript

HTML2PDF.js (para exportação de currículos)

Arquitetura modular com organização por componentes

Estilização moderna com uso de paleta jovem e profissional


📁 Estrutura do Projeto
GeradorCV/
├── docs/                             # Documentação futura (a ser adicionada)
├── src/
│   ├── assets/
│   │   └── illustrations/            # Imagens e ilustrações utilizadas no projeto
│   │       ├── ilustracao01.jpeg
│   │       ├── ilustracao02.jpeg
│   │       └── logo.jpeg
│   ├── components/
│   │   └── GeradorCV/
│   │       ├── templates/            # Templates de currículo (estruturas em JS)
│   │       │   ├── template1.js
│   │       │   ├── template2.js
│   │       ├── download.js           # Lógica de exportação do currículo
│   │       ├── escolhaTemplate.js    # Lógica para seleção de templates
│   │       └── form.js               # Lógica do formulário multistep
│   ├── pages/
│   │   └── gerarCV/
│   │       ├── coletarDados.html     # Página de entrada de dados
│   │       ├── escolhaTemplate.html  # Página de escolha de template
│   │       └── gerarCV.html          # Página de visualização/finalização do CV
│   ├── styles/
│   │   ├── grd.css                   # Estilos globais do gerador
│   │   └── home.css                  # Estilo da página inicial
├── index.html                        # Página inicial da aplicação
└── README.md                         # Documentação do projeto
