const cards = [
['orcamento','Petrobras','Acompanhamento orçamentário','Budget monitoring','Power BI para comparar gastos planejados, realizados e projetados, com recortes por gerência, período e categoria, incluindo viagens e treinamentos.','Power BI report comparing planned, actual and forecast spending by department, period and category, including travel and training.'],
['valoracao','Petrobras','Valoração de soluções digitais','Digital solution valuation','Painel de priorização que compara custo, economia estimada e esforço em horas de trabalho.','Prioritization dashboard comparing cost, estimated savings and staff hours.'],
['integral','React · Node.js · JavaScript · Electron','Integral Clínica','Integral Clínica','Aplicação desktop para cadastro de pacientes, prontuário, agenda com gestão dos atendimentos, estoque e controle de receitas, despesas e pendências.','Desktop application for patient registration, medical records, appointment management, inventory, and tracking income, expenses and outstanding payments.'],
['comercial','Power BI · Integrasa','Desempenho comercial','Sales performance','Estudo para uma candidatura, com dados fictícios. Analisa adesões versus metas, ticket mensal e conversão e custo de aquisição por canal pago.','Recruitment case study using synthetic data. Tracks new contracts against targets, average monthly contract value, conversion and acquisition cost by paid channel.','integrasa.png'],
['aurora','Power BI · Educa Dados','Aurora | Bootcamp','Aurora | Bootcamp','Projeto educacional com visão executiva de vendas e metas e análise por filial, cidade, vendedor, profissional e serviço.','Educational case study featuring an executive sales and targets dashboard and breakdowns by branch, city, salesperson, practitioner and service.','aurora.png']
];
const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'pt';
const en = lang === 'en';
document.documentElement.lang = en ? 'en' : 'pt-BR';
document.title = en ? 'Selected Projects | Andrew Pontes' : 'Projetos em Destaque | Andrew Pontes';
document.querySelector('h1').textContent = en ? 'Selected Projects' : 'Projetos em Destaque';
document.querySelector('#intro').textContent = en ? 'Andrew Pontes · Data analytics and software development' : 'Andrew Pontes · Análise de dados e desenvolvimento de sistemas';
for (const [id, tag, ptTitle, enTitle, ptDesc, enDesc, image] of cards) {
  const article = document.createElement('article');
  article.id = id;
  article.innerHTML = '<small>' + tag + '</small><h2>' + (en ? enTitle : ptTitle) + '</h2><p>' + (en ? enDesc : ptDesc) + '</p>';
  const link = document.createElement('a');
  if (image) {
    link.href = 'project-media/' + image;
    link.innerHTML = '<img src="' + link.href + '" alt="' + (en ? enTitle : ptTitle) + '"><span>' + (en ? 'Open screenshot ↗' : 'Ampliar captura ↗') + '</span>';
  } else {
    link.href = './?project=' + id;
    link.textContent = en ? 'Open interactive demo (synthetic data) ↗' : 'Abrir demo interativa (dados fictícios) ↗';
  }
  article.append(link);
  document.querySelector('main').append(article);
}
document.getElementById(location.hash.slice(1))?.scrollIntoView();
