
import { MapArea, OrgChartNode } from './types';

// IMPORTANT: Use direct image links (e.g., from raw.githubusercontent.com or an image hosting service).
// GitHub blob links or Google Drive sharing links are pages displaying the image, not the image file itself.
export const FLOOR_PLAN_IMAGE_URL = 'https://raw.githubusercontent.com/luizabaginski/mapa/main/mapa_branco.png';

const esgOrgChart: OrgChartNode = {
  id: 'esg_head', name: 'Mariana Silva', title: 'Head de ESG',
  children: [
    { id: 'esg_analyst1', name: 'Carlos Pereira', title: 'Analista de Sustentabilidade Sênior' },
    { id: 'esg_analyst2', name: 'Juliana Costa', title: 'Analista de Projetos ESG' },
  ],
};

const meioAmbienteOrgChart: OrgChartNode = {
  id: 'ma_director', name: 'Roberto Almeida', title: 'Diretor de Meio Ambiente (EnvironPact Lead)',
  children: [
    { id: 'ma_risk_manager', name: 'Ana Beatriz', title: 'Gerente de Risco e Seg. Operac.' },
    { id: 'ma_resilience_manager', name: 'Fernando Lima', title: 'Gerente de Resiliência' },
    {
      id: 'ma_sustainability_manager', name: 'Sofia Oliveira', title: 'Gerente de Sustentabilidade',
      children: [
        { id: 'ma_licenc', name: 'Lucas Martins', title: 'Coord. Licenciamento Ambiental' },
        { id: 'ma_proj_amb', name: 'Gabriela Santos', title: 'Coord. Projetos Ambientais' },
        { id: 'ma_proj_soc', name: 'Pedro Rocha', title: 'Coord. Projetos Sociais' },
      ],
    },
  ],
};

const sismicaOrgChart: OrgChartNode = {
    id: 'sismica_head', name: 'Ricardo Dias', title: 'Chefe de Operações Sísmicas',
    children: [
        { id: 'sismica_spec1', name: 'Laura Mendes', title: 'Especialista em Aquisição Sísmica'},
        { id: 'sismica_spec2', name: 'Bruno Vieira', title: 'Especialista em Processamento Sísmico'},
    ]
};

const modelagemOrgChart: OrgChartNode = {
    id: 'modelagem_head', name: 'Clara Nunes', title: 'Líder de Modelagem Ambiental',
    children: [
        {id: 'modelagem_analyst1', name: 'Daniel Alves', title: 'Analista de Modelagem de Dispersão'},
        {id: 'modelagem_data_sci', name: 'Beatriz Farias', title: 'Cientista de Dados Ambientais'},
    ]
};

const comercialOrgChart: OrgChartNode = {
  id: 'com_director', name: 'André Vargas', title: 'Diretor Comercial',
  children: [
    {
      id: 'com_nat_manager', name: 'Patrícia Souza', title: 'Gerente de Vendas Nacionais',
      children: [
        { id: 'com_nat_seller_sr', name: 'Marcos Ribeiro', title: 'Vendedor Sênior' },
        { id: 'com_nat_seller_jr', name: 'Tatiana Gusmão', title: 'Vendedora Júnior' },
      ],
    },
    { id: 'com_int_manager', name: 'Gustavo Paes', title: 'Gerente de Vendas Internacionais' },
  ],
};

const diretoriaOrgChart: OrgChartNode = {
  id: 'ceo', name: 'João Carlos Figueiredo', title: 'CEO',
  children: [
    { id: 'cfo', name: 'Fernanda Bastos', title: 'CFO (Diretora Financeira)' },
    { id: 'coo', name: 'Paulo Nobrega', title: 'COO (Diretor de Operações)' },
    { id: 'chro', name: 'Lúcia Rangel', title: 'CHRO (Diretora de RH)' },
    meioAmbienteOrgChart, 
  ],
};

const qsmsOrgChart: OrgChartNode = {
    id: 'qsms_manager', name: 'Eduardo Barros', title: 'Gerente de QSMS',
    children: [
        { id: 'qsms_safety_coord', name: 'Renata Motta', title: 'Coordenadora de Segurança do Trabalho'},
        { id: 'qsms_env_analyst', name: 'Tiago Leal', title: 'Analista Ambiental (QSMS)'},
        { id: 'qsms_quality_spec', name: 'Vanessa Neves', title: 'Especialista em Qualidade'},
    ]
};

const riscoSegurancaOrgChart: OrgChartNode = {
    id: 'risco_head', name: 'Sérgio Peixoto', title: 'Head de Risco & Segurança',
    children: [
        { id: 'risco_corp_manager', name: 'Elisa Pinto', title: 'Gerente de Risco Corporativo'},
        { id: 'risco_sec_manager', name: 'Fábio Meirelles', title: 'Gerente de Segurança Patrimonial'},
    ]
};

const financeiroAdminOrgChart: OrgChartNode = {
    id: 'fin_admin_director', name: 'Adriana Campos', title: 'Diretora Financeira e Administrativa',
    children: [
        { id: 'fin_controller', name: 'Carlos Eduardo Lima', title: 'Controller'},
        { id: 'fin_treasury', name: 'Simone Arruda', title: 'Tesouraria'},
        { id: 'admin_manager', name: 'José Augusto Dias', title: 'Gerente Administrativo'},
    ]
};

const oceanpactGeoOrgChart: OrgChartNode = {
    id: 'opgeo_director', name: 'Rodrigo Valente', title: 'Diretor OceanPact Geo',
    children: [
        { id: 'opgeo_geophysics_lead', name: 'Márcia Correia', title: 'Líder de Geofísica'},
        { id: 'opgeo_geology_lead', name: 'Leandro Siqueira', title: 'Líder de Geologia'},
        { id: 'opgeo_hydrography_lead', name: 'Vivianne Torres', title: 'Líder de Hidrografia'},
    ]
};

const emergenciaCriseOrgChart: OrgChartNode = {
    id: 'ec_coordinator', name: 'Alexandre Borges', title: 'Coordenador de Emergência e Crise',
    children: [
        { id: 'ec_planning_spec', name: 'Carolina Esteves', title: 'Especialista em Planejamento de Crise'},
        { id: 'ec_ops_lead', name: 'Mauro Guimarães', title: 'Líder de Operações de Emergência'},
    ]
};


export const MAP_AREAS_DATA: MapArea[] = [
  { 
    id: 'esg', name: 'ESG', 
    position: { left: '7.5%', top: '82%', width: '6%', height: '5.5%' }, 
    orgChartData: esgOrgChart, 
    baseColorClass: 'bg-green-500 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'right' 
  },
  { 
    id: 'gis', name: 'GIS', 
    position: { left: '7.5%', top: '77%', width: '10%', height: '5.5%' }, 
    baseColorClass: 'bg-yellow-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'right' 
  },
  { 
    id: 'modelagem', name: 'ModeLagem', 
    position: { left: '13.5%', top: '82%', width: '4%', height: '5.5%' }, 
    orgChartData: modelagemOrgChart, 
    baseColorClass: 'bg-green-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top' 
  },
  { 
    id: 'sismica', name: 'Sísmica', 
    position: { left: '18.4%', top: '82%', width: '8.3%', height: '6%' }, 
    orgChartData: sismicaOrgChart, 
    baseColorClass: 'bg-sky-300 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top' 
  },
  { 
    id: 'comercial', name: 'Comercial', 
    position: { left: '13%', top: '88%', width: '13%', height: '8%' }, 
    orgChartData: comercialOrgChart, 
    baseColorClass: 'bg-sky-500 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'bottom' 
  },
  { 
    id: 'meio-ambiente', name: 'Meio-Ambiente', 
    position: { left: '19%', top: '67%', width: '12.5%', height: '14%' }, 
    orgChartData: meioAmbienteOrgChart, 
    baseColorClass: 'bg-lime-500 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'bottom' 
  },
  { 
    id: 'qsms', name: 'QSMS', 
    position: { left: '33%', top: '75%', width: '5%', height: '7%' }, 
    orgChartData: qsmsOrgChart, 
    baseColorClass: 'bg-red-500 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top' 
  },
  { 
    id: 'posto6', name: 'Posto 6', 
    position: { left: '27%', top: '88%', width: '7.5%', height: '6%'}, 
    baseColorClass: 'bg-slate-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-50', 
    tooltipPosition: 'top'  
  },
  { 
    id: 'itacoatiara', name: 'Itacoatiara', 
    position: { left: '35%', top: '88%', width: '6%', height: '6%'}, 
    baseColorClass: 'bg-slate-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-50', 
    tooltipPosition: 'top'  
  },
  { 
    id: 'grumari', name: 'Grumari', 
    position: { left: '35%', top: '83%', width: '6%', height: '4.5%'}, 
    baseColorClass: 'bg-purple-300 bg-opacity-40', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top'  
  },
  { 
    id: 'risco-seguranca', name: 'Risco & Segurança', 
    position: { left: '42%', top: '83%', width: '8.5%', height: '9.8%' }, 
    orgChartData: riscoSegurancaOrgChart, 
    baseColorClass: 'bg-purple-500 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top'  
  },
  { 
    id: 'financeiro-admin', name: 'Financeiro Administrativo', 
    position: { left: '51%', top: '83%', width: '8.5%', height: '9.8%' }, 
    orgChartData: financeiroAdminOrgChart, 
    baseColorClass: 'bg-cyan-500 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top'  
  },
  { 
    id: 'diretoria', name: 'Diretoria', 
    position: { left: '64%', top: '87%', width: '9%', height: '7%' }, 
    orgChartData: diretoriaOrgChart, 
    baseColorClass: 'bg-gray-700 bg-opacity-40', 
    hoverEffectClass: 'hover:bg-opacity-70', 
    tooltipPosition: 'top'  
  },
  { 
    id: 'oceanpact-geo', name: 'OceanPact Geo', 
    position: { left: '81.5%', top: '37.3%', width: '11%', height: '52%' }, 
    orgChartData: oceanpactGeoOrgChart, 
    baseColorClass: 'border-blue-600 border-[3px]', 
    hoverEffectClass: 'hover:bg-blue-600 hover:bg-opacity-20', 
    tooltipPosition: 'left'  
  },
  { 
    id: 'emergencia-crise', name: 'Emergência e Crise', 
    position: { left: '79%', top: '2.5%', width: '11%', height: '33%' }, 
    orgChartData: emergenciaCriseOrgChart, 
    baseColorClass: 'border-yellow-400 border-[3px]', 
    hoverEffectClass: 'hover:bg-yellow-400 hover:bg-opacity-20', 
    tooltipPosition: 'left'  
  },
  { 
    id: 'wc', name: 'WC', 
    position: { left: '51%', top: '65.5%', width: '4%', height: '6%' }, 
    baseColorClass: 'bg-stone-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-50', 
    tooltipPosition: 'left' 
  },
  { 
    id: 'copa-central', name: 'COPA', 
    position: { left: '69%', top: '45.3%', width: '9%', height: '5%' }, 
    baseColorClass: 'bg-stone-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-50', 
    tooltipPosition: 'right' 
  },
  { 
    id: 'copa-qsms', name: 'COPA', 
    position: { left: '43%', top: '75.1%', width: '10%', height: '5%' }, 
    baseColorClass: 'bg-stone-400 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-50', 
    tooltipPosition: 'right' 
  },
  {
    id: 'geriba', 
    name: 'Geribá', 
    position: { left: '74%', top: '83%', width: '7%', height: '11%' },
    baseColorClass: 'bg-emerald-600 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top'
  },
  {
    id: 'arpoador', 
    name: 'Arpoador', 
    position: { left: '81.3%', top: '90%', width: '6.2%', height: '5%' },
    baseColorClass: 'bg-emerald-600 bg-opacity-30', 
    hoverEffectClass: 'hover:bg-opacity-60', 
    tooltipPosition: 'top'
  },
];
