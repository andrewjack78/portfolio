const cards = [
['orcamento','Petrobras','Acompanhamento orçamentário','Budget monitoring','Power BI para comparar gastos planejados, realizados e projetados, com recortes por gerência, período e categoria, incluindo viagens e treinamentos.','Power BI report comparing planned, actual and forecast spending by department, period and category, including travel and training.'],
['integral','React · Node.js · JavaScript · Electron','Integral Clínica','Integral Clínica','Aplicação desktop para cadastro de pacientes, prontuário, agenda com gestão dos atendimentos, estoque e controle de receitas, despesas e pendências.','Desktop application for patient registration, medical records, appointment management, inventory, and tracking income, expenses and outstanding payments.'],
['comercial','Power BI · Integrasa','Desempenho comercial','Sales performance','Estudo para uma candidatura, com dados fictícios. Analisa adesões versus metas, ticket mensal e conversão e custo de aquisição por canal pago.','Recruitment case study using synthetic data. Tracks new contracts against targets, average monthly contract value, conversion and acquisition cost by paid channel.','integrasa.png'],
['aurora','Power BI · DAX · EducaDados','Projeto Aurora | Desafio EducaDados','Project Aurora | EducaDados Bootcamp','Desafio de Power BI para acompanhar vendas e metas de uma rede odontológica. Modelei os dados e criei medidas em DAX para comparar o valor e a quantidade de vendas com as metas. A Visão Executiva reúne indicadores, evolução mensal e rankings. A Análise Detalhada permite investigar desvios por filial, cidade, vendedor, profissional, grupo de serviço e serviço.','Power BI bootcamp project for tracking sales and targets across a dental care network. I modeled the data and built DAX measures to compare sales revenue and volume against targets. The Executive Overview brings together KPIs, monthly trends and rankings. The Detailed Analysis page lets users investigate gaps by branch, city, salesperson, practitioner, service group and service.']
];
const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'pt';
const en = lang === 'en';
document.documentElement.lang = en ? 'en' : 'pt-BR';
document.title = en ? 'Selected Projects | Andrew Pontes' : 'Projetos em Destaque | Andrew Pontes';
document.querySelector('h1').textContent = en ? 'Selected Projects' : 'Projetos em Destaque';
document.querySelector('#intro').textContent = en ? 'Andrew Pontes · Data analytics and software development' : 'Andrew Pontes · Análise de dados e desenvolvimento de sistemas';

const galleries = {
  orcamento: [
    ['orcamento-geral.png', 'Gastos gerais', 'General spending'],
    ['orcamento-viagens.png', 'Viagens', 'Travel']
  ],
  integral: [
    ['integral-inicio.png', 'Visão geral', 'Overview'],
    ['integral-agenda.png', 'Agenda', 'Appointments'],
    ['integral-financeiro.png', 'Financeiro', 'Finance']
  ],
  aurora: [
    ['aurora.png', 'Visão Executiva', 'Executive Overview'],
    ['aurora-analise-detalhada.png', 'Análise Detalhada', 'Detailed Analysis']
  ]
};
for (const [id, tag, ptTitle, enTitle, ptDesc, enDesc, image] of cards) {
  const article = document.createElement('article');
  article.id = id;
  article.tabIndex = -1;
  const title = en ? enTitle : ptTitle;
  article.innerHTML = '<small>' + tag + '</small><h2>' + title + '</h2><p>' + (en ? enDesc : ptDesc) + '</p>';
  if (id === 'integral') {
    const note = document.createElement('p');
    note.textContent = en ? 'Illustrative screens with fictional data.' : 'Telas ilustrativas com dados fictícios.';
    article.append(note);
  }
  if (id === 'aurora') {
    const note = document.createElement('p');
    note.textContent = en ? 'Screenshots from the bootcamp report. Salesperson names are hidden.' : 'Capturas do relatório do bootcamp. Os nomes dos vendedores foram ocultados.';
    article.append(note);
  }
  const gallery = document.createElement('div');
  gallery.className = 'gallery';
  for (const [file, ptCaption, enCaption] of galleries[id] ?? [[image, ptTitle, enTitle]]) {
    const caption = en ? enCaption : ptCaption;
    const link = document.createElement('a');
    link.href = 'project-media/' + file;
    const img = document.createElement('img');
    img.src = link.href;
    img.alt = caption;
    const label = document.createElement('span');
    label.textContent = (en ? 'Enlarge: ' : 'Ampliar: ') + caption + ' ↗';
    link.append(img, label);
    gallery.append(link);
  }
  article.append(gallery);
  document.querySelector('main').append(article);
}
function focusProject() {
  const project = document.getElementById(location.hash.slice(1));
  if (!project) return;
  project.focus({preventScroll: true});
  project.scrollIntoView({block: 'start'});
}
for (const locale of ['pt', 'en']) {
  const link = document.querySelector('a[href="?lang=' + locale + '"]');
  link.addEventListener('click', () => { link.hash = location.hash; });
}
window.addEventListener('load', focusProject);
window.addEventListener('hashchange', focusProject);
