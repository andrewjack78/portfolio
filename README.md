# Andrew de Pontes — Portfólio

Interface em React e JavaScript. Node.js executa o empacotamento com esbuild e o servidor local. A publicação no GitHub Pages é estática: não existe servidor Node em produção neste endereço.

## Executar

Requer Node.js 22 ou superior. Execute npm ci, npm run build e npm start. A prévia local usa http://127.0.0.1:5081. Saída publicável: dist/.

O projeto aceita os fontes na raiz do repositório (main.jsx, index.html, style.css, portrait.jpg) ou a organização local src/ e public/. Não depende de segredos ou APIs corporativas.

## Projetos

- Acompanhamento orçamentário: projeto realizado durante atuação de Andrew como estagiário na Petrobras. Prévia web com dados totalmente fictícios, baseada nos temas do relatório Power BI: gastos gerais, treinamentos e viagens.
- Valoração de soluções digitais: mesmo contexto profissional de estágio. Prévia de custo, economia, pontos e priorização com soluções e valores sintéticos. Não reproduz todas as regras financeiras do original.
- Integrasa, desempenho comercial: painel desenvolvido durante candidatura a uma vaga para demonstrar conhecimentos de Power BI e análise de dados. Reprodução web dos temas do relatório, com visão geral e equipes e dados sintéticos próprios.
- Integral Clínica: navegação adaptada a partir dos módulos e identidade do sistema profissional. Pacientes e números fictícios. Não é o código completo da aplicação desktop e não executa funções profissionais.
- Integrasa, portal do cliente: incorporação do protótipo público independente.

As prévias de Power BI são componentes React; não são embeds do Power BI Service e não executam os arquivos PBIX. Arquivos PBIX, modelos, conexões, dados internos e fontes do Integral Clínica não são publicados. Foto e contatos fornecidos para publicação pelo titular.

## Verificação

Compilação de produção; layout desktop sem overflow horizontal; navegação por abas; filtros de treinamentos, equipe e priorização; análise comercial por equipe; navegação e busca sintética do Integral Clínica. Valores calculados a partir das bases locais sintéticas.
