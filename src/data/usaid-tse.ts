import { UsaidTseEvent } from '@/types/usaid';

const rawData = {
  "2021": [
    {
      "local": "Brasília (DF) / Virtual",
      "titulo": "Eventos colaborativos TSE-USAID sobre desinformação eleitoral",
      "descrição": "TSE e USAID, através do consórcio CEPPS, realizam eventos (presenciais e virtuais) envolvendo servidores eleitorais, representantes internacionais e ONGs para debater o combate à desinformação e estruturar programas institucionais de cooperação técnica visando as eleições de 2022.",
      "envolvidos": ["TSE", "USAID", "CEPPS", "servidores do TSE", "representantes USAID"],
      "gravidade": "baixa",
      "fontes": [
        "https://www.gazetadopovo.com.br/republica/usaid-e-tse-fizeram-eventos-para-combater-desinformacao-um-ano-antes-das-eleicoes-de-2022/",
        "https://international.tse.jus.br/en/misinformation-and-fake-news/tse-brazil-counter-disinformation-program-2022.pdf"
      ],
      "data": "2021-09-20"
    }
  ],
  "2022": [
    {
      "local": "Nacional (Brasil)",
      "titulo": "Implementação de campanhas e treinamentos institucionais",
      "descrição": "Durante o processo eleitoral de 2022, TSE executa programas permanentes contra desinformação em parceria com USAID e CEPPS, envolvendo treinamentos internos, produção de manuais e colaboração com ONGs e plataformas digitais.",
      "envolvidos": ["TSE", "USAID", "CEPPS", "ONGs brasileiras", "Plataformas digitais"],
      "gravidade": "média",
      "fontes": [
        "https://international.tse.jus.br/en/misinformation-and-fake-news/brazil-electoral-justice-permanent-program-on-countering-disinformation",
        "https://eyesonbrasil.com/usaid-and-brazils-2022-elections-a-controversial-intersection/"
      ],
      "data": "2022-08-01"
    },
    {
      "local": "Nacional (Brasil)",
      "titulo": "Alegações públicas de interferência e censura eleitoral",
      "descrição": "Após início da campanha eleitoral, lideranças políticas de direita e imprensa alternativa passam a alegar que ONGs beneficiadas com verbas da USAID praticaram censura seletiva e ajudaram a direcionar o debate público. Não foram apresentados indícios técnicos de censura coordenada entre TSE e USAID.",
      "envolvidos": ["Bolsonaristas", "ONGs", "USAID", "TSE"],
      "gravidade": "média",
      "fontes": [
        "https://dunapress.org/usaid-interference-in-brazil-raises-concerns-about-national-sovereignty/",
        "https://eyesonbrasil.com/usaid-and-brazils-2022-elections-a-controversial-intersection/"
      ],
      "data": "2022-10-15"
    },
    {
      "local": "Redes sociais (nacional)",
      "titulo": "Campanha de difamação e ataques virtuais contra opositores do governo durante eleições",
      "descrição": "Diversos perfis coordenados por bots e MAVs (Militância em Ambiente Virtual do PT) engajaram em ataques sistemáticos contra opositores do governo, como a advogada Stefanny Papaiano, o jornalista Alexandre Garcia e o deputado Gustavo Gayer. Entre as ações: pedidos em massa por prisões, denúncias de fake news e difamação direcionada a críticos do governo Lula. Muitos perfis eram recém-criados e automatizados, utilizando linguagem padronizada, vídeos e marcações de figuras políticas e de imprensa.",
      "envolvidos": [
        "MAVs (Militância em Ambiente Virtual do PT)",
        "Bots automatizados",
        "Opositores: Stefanny Papaiano, Alexandre Garcia, Gustavo Gayer, Jair Bolsonaro"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.ainvestigacao.com/p/pt-utiliza-robos-mavs-e-o-novo-ministerio"
      ],
      "data": "2022-09-12"
    },
    {
      "local": "Redes sociais / internet (nacional)",
      "titulo": "Difamação eleitoral e campanhas de desinformação com perfis falsos e influenciadores",
      "descrição": "Perfis de fofoca e cultura pop, influenciadoras e grupos políticos promoveram campanhas para associar Jair Bolsonaro ao satanismo e outros temas negativos, visando romper vínculos do então candidato com o eleitorado evangélico. Entre os envolvidos, destacam-se os perfis Choquei, PopTime, PopOnze, QG do Pop, Fórum Pandlr, influenciadoras Bic Müller e Babi Magalhães, o deputado André Janones (Avante-MG) e o grupo Boca de Lobo. Vários perfis utilizaram imagens geradas por Inteligência Artificial. Não houve responsabilização ou processo pelo TSE.",
      "envolvidos": [
        "Perfis falsos (Choquei, PopTime, PopOnze, QG do Pop, Fórum Pandlr)",
        "Influenciadores (Bic Müller, Babi Magalhães, André Janones)",
        "Grupo Boca de Lobo"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.ainvestigacao.com/p/pt-utiliza-robos-mavs-e-o-novo-ministerio"
      ],
      "data": "2022-10-01"
    },
    {
      "local": "Online (Brasil inteiro)",
      "titulo": "Campanhas de combate à desinformação e incentivo ao voto promovidas por canais do YouTube e blogueiros",
      "descrição": "Durante o período eleitoral, diversos canais do YouTube e blogueiros de grande influência participaram de campanhas de incentivo ao voto, defesa do processo eleitoral e combate à desinformação, muitas vezes em parceria com ONGs e projetos apoiados por verba internacional. Os conteúdos incluíram lives, vídeos explicativos, debates com especialistas, entrevistas com lideranças políticas e séries temáticas sobre checagem de fatos e direitos políticos. Os comunicadores progressistas concentraram esforços em desconstruir fake news associadas à disputa presidencial. Não há comprovação pública de financiamento estrangeiro direto para campanhas de candidatos, mas parte dos canais atuou em projetos contemplados por editais e parcerias de ONGs financiadas pela USAID.",
      "envolvidos": [
        "Canais do YouTube (ex: Meteoro Brasil, Manual do Mundo, Felipe Neto)",
        "Blogueiros e jornalistas independentes (ex: Leonardo Sakamoto, Sabrina Fernandes)",
        "ONGs de checagem e educação digital"
      ],
      "gravidade": "média",
      "fontes": [
        "https://eyesonbrasil.com/usaid-and-brazils-2022-elections-a-controversial-intersection/",
        "https://www.gazetadopovo.com.br/republica/mais-de-duas-dezenas-de-ongs-brasileiras-receberam-r-267-milhoes-da-usaid/"
      ],
      "data": "2022-09-20"
    },
    {
      "local": "Redes sociais e plataformas de vídeo",
      "titulo": "Mobilização de youtubers e blogueiros para campanhas de fact-checking",
      "descrição": "Influenciadores digitais e youtubers participaram de ações integradas a ONGs como Lupa, Aos Fatos e Redes Cordiais, promovendo vídeos, threads e blogs de checagem eleitoral. Em alguns casos, produziram materiais multimídia educativos e participaram de debates e entrevistas institucionais promovidos por entidades parceiras do TSE.",
      "envolvidos": [
        "Canais de YouTube (ex: Bloco dos Canais de Educação, Quebrando o Tabu)",
        "Blogueiros pró-democracia",
        "ONGs de checagem"
      ],
      "gravidade": "baixa",
      "fontes": [
        "https://international.tse.jus.br/en/misinformation-and-fake-news/brazil-electoral-justice-permanent-program-on-countering-disinformation",
        "https://www.ainvestigacao.com/p/operation-uncle-joe-us-influence"
      ],
      "data": "2022-10-05"
    },
    {
      "local": "São Paulo, Rio de Janeiro, Recife e grandes capitais",
      "titulo": "Shows e festivais cívicos pró-democracia",
      "descrição": "Durante o segundo semestre de 2022, grandes artistas e coletivos culturais promoveram shows gratuitos e festivais com mensagens pelo voto consciente, combate à desinformação e defesa da democracia. Os eventos incentivaram o engajamento jovem, foram transmitidos online e promovidos por ONGs e movimentos que receberam recursos internacionais. Apesar do viés suprapartidário, as mensagens eram predominantemente críticas aos candidatos conservadores.",
      "envolvidos": [
        "ONGs culturais e cívicas (ex: Redes Cordiais, Instituto Update)",
        "Artistas pop e hip-hop (Anitta, Emicida, Ludmilla, etc.)",
        "Coletivos produtores de eventos culturais"
      ],
      "gravidade": "baixa",
      "fontes": [
        "https://www.ainvestigacao.com/p/operation-uncle-joe-us-influence",
        "https://dunapress.org/usaid-interference-in-brazil-raises-concerns-about-national-sovereignty/"
      ],
      "data": "2022-09-15"
    },
    {
      "local": "Universidades federais e estaduais, auditórios de centros urbanos",
      "titulo": "Ciclo de palestras universitárias sobre eleições e desinformação",
      "descrição": "Universidades públicas receberam eventos e ciclos de palestras sobre democracia, desinformação e participação política, organizados em parceria com ONGs de fact-checking e coletivos acadêmicos. As atividades, com presença de influenciadores e autoridades eleitorais, tinham como objetivo formar multiplicadores na checagem de fatos, diálogo cívico e defesa do processo eleitoral.",
      "envolvidos": [
        "Universidades federais (USP, UFRJ, UNB, etc.)",
        "ONGs de fact-checking (Aos Fatos, Lupa, Redes Cordiais)",
        "Especialistas eleitorais e acadêmicos"
      ],
      "gravidade": "baixa",
      "fontes": [
        "https://international.tse.jus.br/en/misinformation-and-fake-news/brazil-electoral-justice-permanent-program-on-countering-disinformation",
        "https://www.gazetadopovo.com.br/republica/mais-de-duas-dezenas-de-ongs-brasileiras-receberam-r-267-milhoes-da-usaid/"
      ],
      "data": "2022-09-30"
    },
    {
      "local": "Centros culturais e campus universitários em capitais",
      "titulo": "Palestras e workshops sobre checagem e combate à desinformação eleitoral",
      "descrição": "ONGs, jornalistas e fact-checkers promoveram workshops e palestras presenciais e online para estudantes, jornalistas e ativistas, com foco em ferramentas digitais de checagem e estratégias para combater conteúdos falsos nas eleições. Diversas dessas iniciativas tiveram apoio financeiro de fundos internacionais.",
      "envolvidos": [
        "ONGs de checagem (Aos Fatos, Lupa, Instituto Vero)",
        "Jornalistas especializados",
        "Estudantes e ativistas universitários"
      ],
      "gravidade": "baixa",
      "fontes": [
        "https://eyesonbrasil.com/usaid-and-brazils-2022-elections-a-controversial-intersection/",
        "https://www.gazetadopovo.com.br/republica/mais-de-duas-dezenas-de-ongs-brasileiras-receberam-r-267-milhoes-da-usaid/"
      ],
      "data": "2022-10-01"
    },
    {
      "local": "Nacional (Brasil)",
      "titulo": "Campanhas de engajamento digital e combate à desinformação lideradas por ONGs, artistas e influenciadores",
      "descrição": "Durante o período eleitoral, ONGs brasileiras financiadas com verba internacional, artistas e influenciadores digitais participaram de campanhas para mobilizar jovens e combater a desinformação, promovendo pautas progressistas e cívicas. As campanhas incluíram divulgação em redes sociais, lives, shows institucionais e ações educativas, com ênfase nas plataformas digitais. Não há comprovação de financiamento estrangeiro direto para campanhas de candidatos, mas as ações beneficiaram indiretamente causas políticas progressistas.",
      "envolvidos": [
        "ONGs (Instituto Update, Instituto Vero, Redes Cordiais, entre outras)",
        "Artistas (Anitta, Emicida, Pablo Vittar e outros participantes de lives e eventos cívicos)",
        "Influenciadores digitais progressistas"
      ],
      "gravidade": "média",
      "fontes": [
        "https://www.gazetadopovo.com.br/republica/mais-de-duas-dezenas-de-ongs-brasileiras-receberam-r-267-milhoes-da-usaid/",
        "https://eyesonbrasil.com/usaid-and-brazils-2022-elections-a-controversial-intersection/"
      ],
      "data": "2022-09-30"
    },
    {
      "local": "Nacional (Brasil)",
      "titulo": "Grandes shows e eventos culturais com viés cívico e eleitoral",
      "descrição": "Artistas de renome nacional (especialmente do cenário pop e hip-hop) promoveram shows e eventos com mensagens de valorização do voto, incentivo à participação cívica e defesa da democracia. Embora os eventos fossem oficialmente suprapartidários, a maior associação se deu a pautas críticas ao conservadorismo.",
      "envolvidos": [
        "Artistas (Ludmilla, Emicida, Anitta, etc.)",
        "Produtores culturais",
        "ONGs e coletivos organizadores de eventos"
      ],
      "gravidade": "baixa",
      "fontes": [
        "https://www.ainvestigacao.com/p/operation-uncle-joe-us-influence",
        "https://dunapress.org/usaid-interference-in-brazil-raises-concerns-about-national-sovereignty/"
      ],
      "data": "2022-10-01"
    },
    {
      "local": "Grandes cidades (São Paulo, Rio de Janeiro, Brasília)",
      "titulo": "Mobilizações digitais por influenciadores e ONGs contra desinformação",
      "descrição": "Influenciadores digitais com milhões de seguidores uniram-se a ONGs e plataformas para difundir campanhas de checagem de fatos e combater notícias falsas. A campanha incluiu uso intensivo de hashtags, vídeos virais, lives temáticas e integração com movimentos ativistas.",
      "envolvidos": [
        "Influenciadores progressistas (Felipe Neto, Natalia Pasternak, Sabrina Fernandes, entre outros)",
        "ONGs de fact-checking (Aos Fatos, Lupa, Redes Cordiais)",
        "Parcerias com plataformas digitais (Twitter, Meta, Google)"
      ],
      "gravidade": "média",
      "fontes": [
        "https://www.gazetadopovo.com.br/republica/mais-de-duas-dezenas-de-ongs-brasileiras-receberam-r-267-milhoes-da-usaid/",
        "https://international.tse.jus.br/en/misinformation-and-fake-news/brazil-electoral-justice-permanent-program-on-countering-disinformation"
      ],
      "data": "2022-10-10"
    },
    {
      "local": "Nacional (Brasil)",
      "titulo": "Implementação do Programa Permanente de Enfrentamento à Desinformação",
      "descrição": "Durante o período eleitoral, o TSE, com apoio da USAID e ONGs locais (beneficiadas com recursos internacionais), estruturou campanhas de combate à desinformação e treinamento de servidores e públicos-alvo. Foram realizados acordos de cooperação técnico-institucional, incluindo produção de material educativo e envolvimento de plataformas digitais.",
      "envolvidos": [
        "TSE",
        "USAID",
        "CEPPS",
        "ONGs brasileiras",
        "Plataformas digitais",
        "Jornalistas"
      ],
      "gravidade": "média",
      "fontes": [
        "https://international.tse.jus.br/en/misinformation-and-fake-news/brazil-electoral-justice-permanent-program-on-countering-disinformation",
        "https://www.ifes.org/sites/default/files/2022-09/IFES%20Brazil%20FAQs%202022%20General%20Election.pdf"
      ],
      "data": "2022-08-01"
    }
  ],
  "2023": [
    {
      "local": "Brasília (DF)",
      "titulo": "Prisões em massa após protestos de 8 de janeiro",
      "descrição": "Após os protestos de apoiadores de Jair Bolsonaro em 8 de janeiro, foram realizadas prisões em massa com acusações severas como tentativa de golpe e associação criminosa, com sentenças altas mesmo para os não violentos. STF e TSE, sob Alexandre de Moraes, centralizaram decisões e usaram relatórios informais.",
      "envolvidos": [
        "Alexandre de Moraes (STF e TSE)",
        "Protestantes detidos",
        "Pessoas presas e acusadas"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.civilizationworks.org/cw-master-blog/the-january-8th-files-inside-brazils-secret-judicial-task-force-for-mass-arrests"
      ],
      "data": "2023-01-08"
    },
    {
      "local": "Brasília (DF) e órgãos judiciais",
      "titulo": "Formação do grupo 'Custody Hearings' para coordenação de prisões",
      "descrição": "Grupo secreto via WhatsApp criado para coordenar audiências de custódia pós-8 de janeiro, com servidores do STF e TSE sob comando direto de Alexandre de Moraes e Cristina Yukiko Kusahara, usando relatórios sigilosos.",
      "envolvidos": [
        "Cristina Yukiko Kusahara (STF)",
        "Eduardo Tagliaferro (TSE)",
        "Marco Antônio Martins Vargas (TSE)",
        "Alexandre de Moraes (STF e TSE)"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.civilizationworks.org/cw-master-blog/the-january-8th-files-inside-brazils-secret-judicial-task-force-for-mass-arrests"
      ],
      "data": "2023-01-13"
    },
    {
      "local": "Brasil (diversos locais)",
      "titulo": "Uso ilegal de banco de dados biométricos e redes sociais para classificar detentos",
      "descrição": "Equipe do TSE utilizou dados biométricos, redes sociais e sistemas para classificar pessoas como 'positivas' ou 'negativas', baseando detenções em postagens e opiniões políticas sem avaliação jurídica adequada.",
      "envolvidos": [
        "Equipe AEED do TSE",
        "Iuri Camargo Kisovec (Administrador do GestBio)",
        "Detentos classificados"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.civilizationworks.org/cw-master-blog/the-january-8th-files-inside-brazils-secret-judicial-task-force-for-mass-arrests"
      ],
      "data": "2023-01-20"
    },
    {
      "local": "Brasil",
      "titulo": "Audiências de custódia simuladas e controle centralizado por Alexandre de Moraes",
      "descrição": "Audiências de custódia foram meramente formalidades para validar prisões decididas pela equipe de Moraes, violando prazos e removendo poderes de magistrados locais.",
      "envolvidos": [
        "Alexandre de Moraes",
        "Juízes de primeira instância",
        "Detentos"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.civilizationworks.org/cw-master-blog/the-january-8th-files-inside-brazils-secret-judicial-task-force-for-mass-arrests"
      ],
      "data": "2023-01-10"
    },
    {
      "local": "Brasil (instituições jurídicas)",
      "titulo": "Críticas de especialistas sobre ilegalidades e violações constitucionais",
      "descrição": "Juristas renomados criticaram operações de Moraes e TSE por abuso de poder, violação do devido processo, concentração indevida e uso político da justiça, destacando incompatibilidade com a Constituição.",
      "envolvidos": [
        "Richard Campanari",
        "Marco Aurélio Mello",
        "Enio Viterbo",
        "Deltan Dallagnol"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.civilizationworks.org/cw-master-blog/the-january-8th-files-inside-brazils-secret-judicial-task-force-for-mass-arrests"
      ],
      "data": "2023-07-01"
    },  
    {
      "local": "Brasília/DF e redes sociais",
      "titulo": "Criação e atuação da Procuradoria Nacional de Defesa da Democracia (PNDD)",
      "descrição": "No início do governo Lula, a PNDD foi criada vinculada à Advocacia-Geral da União (AGU) para atuar no combate à desinformação sobre políticas públicas. Segundo críticos, o órgão foi utilizado para perseguir juridicamente opositores, jornalistas e figuras públicas contrárias ao governo, baseando-se em denúncias subjetivas de fake news. Casos de atuação mais visível ocorreram após repercussão de notícias sobre a calamidade no Sul do país.",
      "envolvidos": [
        "AGU (Jorge Messias)",
        "PNDD",
        "Críticos e opositores (Alexandre Garcia, Stefanny Papaiano)"
      ],
      "gravidade": "alta",
      "fontes": [
        "https://www.ainvestigacao.com/p/pt-utiliza-robos-mavs-e-o-novo-ministerio"
      ],
      "data": "2023-09-13"
    },
    {
      "local": "Nacional (Brasil)",
      "titulo": "Relatórios detalham repasses da USAID a ONGs",
      "descrição": "Reportagens revelam que ao menos duas dezenas de ONGs brasileiras receberam mais de R$ 267 milhões da USAID entre 2022-2024, com parte significativa destinada a iniciativas voltadas à comunicação, ativismo, minorias e políticas ambientais em contexto eleitoral.",
      "envolvidos": ["USAID", "ONGs brasileiras", "líderes de ONGs", "ativistas"],
      "gravidade": "média",
      "fontes": [
        "https://www.gazetadopovo.com.br/republica/mais-de-duas-dezenas-de-ongs-brasileiras-receberam-r-267-milhoes-da-usaid/",
        "https://eyesonbrasil.com/usaid-and-brazils-2022-elections-a-controversial-intersection/"
      ],
      "data": "2023-05-11"
    }
  ],
  "2024": [
    {
      "local": "Nacional (Brasil)",
      "titulo": "Debate sobre legislação, soberania e investigações",
      "descrição": "Avanço do debate público e jurídico sobre os limites de influência internacional, doações estrangeiras e necessidade de investigações parlamentares e do MPF, com base em denúncias de possível afronta à soberania eleitoral.",
      "envolvidos": ["MPF", "Congresso Nacional", "TSE", "ONGs", "USAID"],
      "gravidade": "alta",
      "fontes": [
        "https://www.ainvestigacao.com/p/operation-uncle-joe-us-influence",
        "https://dunapress.org/usaid-interference-in-brazil-raises-concerns-about-national-sovereignty/"
      ],
      "data": "2024-06-15"
    }
  ]
};

const processedEvents: UsaidTseEvent[] = [];
Object.entries(rawData).forEach(([year, events]) => {
  (events as Omit<UsaidTseEvent, 'year'>[]).forEach(event => {
    processedEvents.push({
      ...event,
      year: parseInt(year),
    });
  });
});

export const usaidTseEventsData: UsaidTseEvent[] = processedEvents.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());