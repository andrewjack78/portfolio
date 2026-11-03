const cards = [
['orcamento','Petrobras','Acompanhamento orçamentário','Budget monitoring','Power BI para comparar gastos planejados, realizados e projetados, com recortes por gerência, período e categoria, incluindo viagens e treinamentos.','Power BI report comparing planned, actual and forecast spending by department, period and category, including travel and training.'],
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

const galleries = {
  orcamento: [
    ['orcamento-geral.png', 'Gastos gerais', 'General spending'],
    ['orcamento-viagens.png', 'Viagens', 'Travel']
  ],
  integral: [
    ['integral-inicio.png', 'Visão geral', 'Overview'],
    ['integral-agenda.png', 'Agenda', 'Appointments'],
    ['integral-financeiro.png', 'Financeiro', 'Finance']
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