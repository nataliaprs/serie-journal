# Aluna: Natalia Prestes Santos Pontes — Serie Journal (Fase 1)

## Descrição do projeto
**Serie Journal** é um CRUD frontend (React + Vite) para gerenciar séries assistidas.  
Fase 1: frontend estático que salva dados em `localStorage`, implementando criação, leitura, edição parcial (ou instruções para editar), e remoção de séries.

Este projeto foi desenvolvido como atividade das aulas 1 a 5 da disciplina de Desenvolvimento de Sistemas Frontend.

---

## Funcionalidades implementadas
- Página inicial (home) com mensagem de boas-vindas.
- Página "Sobre" com descrição do projeto e identificação do aluno.
- Página de cadastro com formulário para adicionar séries (campos obrigatórios pedidos no enunciado).
- Página de listagem com pesquisa, filtro e ação de exclusão.
- Validação básica do formulário (campos obrigatórios e validação simples).
- Persistência local utilizando `localStorage`.

---

## Campos do formulário (obrigatórios, conforme enunciado)
- Título
- Número de Temporadas
- Data de Lançamento da Temporada
- Diretor
- Produtora
- Categoria
- Data em que assistiu

---

## Estrutura do projeto

serie-journal/
├─ public/
├─ src/
│ ├─ components/
│ │ ├─ NavBar/ (NavBar.jsx, NavBar.css)
│ │ ├─ SerieForm/ (SerieForm.jsx, SerieForm.css)
│ │ └─ SerieList/ (SerieList.jsx, SerieList.css)
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Sobre.jsx
│ │ ├─ Cadastrar.jsx
│ │ └─ Lista.jsx
│ ├─ data/
│ │ └─ sampleSeries.js
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ .gitignore
├─ package.json
└─ README.md

## Como executar (passo-a-passo)

### Pré-requisitos
- Node.js (versão 16+ recomendada)
- npm (vem com Node.js)

### Comandos
1. Abra um terminal na pasta do projeto (`serie-journal`).
2. Instale dependências:
npm install
3. Rode o servidor de desenvolvimento:
npm run dev
4. Abra no navegador o endereço mostrado no terminal (ex.: http://localhost:5173).

