import { CensorshipData, CensorshipEvent } from '@/types/censorship';

export const censorshipData: CensorshipData = {
  "title": "Linha do Tempo de Ações Censura contra Oposição",
  "description": "Reorganização da linha do tempo com base em fontes consolidadas de mídias alternativas independentes, focando em decisões judiciais que impuseram censura a perfis, canais ou conteúdos conservadores em plataformas como Twitter/X, Facebook, Instagram, YouTube, Telegram e outras. Agrupado por ano, destacando alvos, decisões do STF/TSE e impactos. Ações derivam majoritariamente do Inquérito das Fake News e inquéritos eleitorais, com críticas por censura prévia e perseguição política.",
  "events": {
    "2019": [
      {
        "date": "Março",
        "description": "Abertura do Inquérito das Fake News pelo STF (Dias Toffoli, relator Alexandre de Moraes), visando 'ataques' a ministros; resultou em bloqueios iniciais de perfis conservadores no Twitter que criticavam o judiciário.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Inquérito das Fake News",
        "year": 2019
      },
      {
        "date": "Abril",
        "description": "Moraes ordena remoção de reportagem da Crusoé e O Antagonista sobre Toffoli (Lava Jato); multa diária de R$ 100 mil; alvos: jornalistas de direita.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Censura à Crusoé e O Antagonista",
        "year": 2019
      }
    ],
    "2020": [
      {
        "date": "Janeiro–Julho",
        "description": "Bloqueio de perfis bolsonaristas no Twitter, Facebook e Instagram por 'desinformação' e ataques ao STF; alvos: apoiadores de Bolsonaro.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Bloqueio de Perfis Bolsonaristas",
        "year": 2020
      },
      {
        "date": "Abril",
        "description": "Jornalista Allan dos Santos (Terça Livre) se autoexila nos EUA devido a perseguição; inclusão no inquérito.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Autoexílio de Allan dos Santos",
        "year": 2020
      },
      {
        "date": "Junho",
        "description": "Censura prévia a reportagem da RBS TV sobre desvio de auxílio (juiz Daniel da Silva Luz); impacto em conteúdos críticos.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura à RBS TV",
        "year": 2020
      },
      {
        "date": "Agosto",
        "description": "Remoção de artigo da Crusoé crítico à deputada Bia Kicis (juiz Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Remoção de Artigo da Crusoé",
        "year": 2020
      }
    ],
    "2021": [
      {
        "date": "Agosto",
        "description": "Censura prévia a reportagem da RBS TV sobre corrupção (juíza Tatiana de Lorenzo); alvos: veículos conservadores.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura à RBS TV (2)",
        "year": 2021
      },
      {
        "date": "Setembro",
        "description": "Censura a documentário crítico à Lava Jato (juiz na Paraíba); impacto em narrativas de direita.",
        "type": "judicial",
        "target": "documentários",
        "title": "Censura a Documentário sobre Lava Jato",
        "year": 2021
      },
      {
        "date": "Novembro",
        "description": "Bloqueio de contas de Allan dos Santos no Twitter e outras plataformas; mandado de prisão por 'desinformação'.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Bloqueio de Contas de Allan dos Santos",
        "year": 2021
      }
    ],
    "2022": [
      {
        "date": "Março",
        "description": "Suspensão do Telegram por 3 dias (Moraes); remoção de conteúdos de Bolsonaro; monitoramento de canais conservadores.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Suspensão do Telegram",
        "year": 2022
      },
      {
        "date": "Setembro",
        "description": "TSE censura documentário da Brasil Paralelo sobre atentado a Bolsonaro; proibição prévia; censura a outdoors eleitorais críticos em MT e RJ.",
        "type": "eleitoral",
        "target": "documentários",
        "title": "Censura a Documentário da Brasil Paralelo",
        "year": 2022
      },
      {
        "date": "Outubro",
        "description": "Bloqueio de contas bancárias de doadores para Allan dos Santos (incluindo juíza Ludmila Lins Grilo, exilada); TSE bloqueia perfis de parlamentares como Nikolas Ferreira por 'desinformação' eleitoral.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Bloqueio de Contas e Perfis",
        "year": 2022
      },
      {
        "date": "Outubro",
        "description": "TSE mantém Brasil Paralelo desmonetizado e veta vídeo da facada até eleição.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Benedito Gonçalves que determinou a desmonetização de quatro canais bolsonaristas no YouTube",
        "year": 2022
      },
      {
        "date": "Novembro",
        "description": "Censura a questionamentos sobre urnas eletrônicas; remoção de conteúdos bolsonaristas.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Censura a Questionamentos sobre Urnas",
        "year": 2022
      }
    ],
    "2023": [
      {
        "date": "Março",
        "description": "Ameaça de nova suspensão do Telegram por mensagens críticas ao PL 2630/2020 (Moraes).",
        "type": "judicial",
        "target": "plataformas",
        "title": "Ameaça de Suspensão do Telegram (2)",
        "year": 2023
      },
      {
        "date": "Junho",
        "description": "Censura a reportagem da Piauí sobre nepotismo (juiz Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportagem da Piauí",
        "year": 2023
      },
      {
        "date": "Julho",
        "description": "Remoção de vídeo de repórter Ben Mendes no YouTube (juiz Cavalcante Motta).",
        "type": "judicial",
        "target": "mídia",
        "title": "Remoção de Vídeo no YouTube",
        "year": 2023
      },
      {
        "date": "Setembro",
        "description": "Censura a reportagem do Intercept sobre assassinato de Mãe Bernadete (juiz George Alves de Assis); vazamentos revelam investigações irregulares contra bolsonaristas via TSE/STF.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportagem do Intercept",
        "year": 2023
      }
    ],
    "2024": [
      {
        "date": "Fevereiro",
        "description": "Prisão de Filipe Martins (ex-assessor de Bolsonaro) por suposto golpe; impacto em redes bolsonaristas.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Prisão de Filipe Martins",
        "year": 2024
      },
      {
        "date": "Março",
        "description": "Ordens diretas ao X para remoção de críticas ao STF; conflito com Elon Musk.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Ordens de Remoção ao X",
        "year": 2024
      },
      {
        "date": "Abril",
        "description": "Classificação do Brasil como regime censor por Surfshark.",
        "type": "midiática",
        "target": "geral",
        "title": "Brasil Classificado como Regime Censor",
        "year": 2024
      },
      {
        "date": "Junho",
        "description": "Censura a reportagem de O Bastidor sobre fraudes bancárias (juiz Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportagem de O Bastidor",
        "year": 2024
      },
      {
        "date": "Agosto",
        "description": "Suspensão do X por 40 dias (Moraes); exigência de remoção de conteúdos conservadores.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Suspensão do X",
        "year": 2024
      },
      {
        "date": "Setembro",
        "description": "Censura a paródia de 'Cálice' por Tiago Pavinatto (juíza Admara Schneider); multa à Meta; lançamento da Revista Timeline (Lacombe e Santos) nos EUA para evitar censura.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Censura a Paródia de Tiago Pavinatto",
        "year": 2024
      }
    ],
    "2025": [
      {
        "date": "Janeiro",
        "description": "Bloqueio de perfis da Revista Timeline (Lacombe e Santos) no X, Instagram e YouTube (STF/Moraes); alegação de 'fake news' e milícias digitais; site permanece no ar, mas transmissão ao vivo interrompida; críticas por censura prévia sem defesa.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Bloqueio de Perfis da Revista Timeline",
        "year": 2025
      },
      {
        "date": "Mai–Junho",
        "description": "Decisão do STF obriga redes a removerem conteúdos 'antidemocráticos' sem ordem prévia (alteração ao Marco Civil); responsabilização de plataformas; impacto em cristãos e conservadores.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Decisão do STF sobre Conteúdos Antidemocráticos",
        "year": 2025
      },
      {
        "date": "Julho",
        "description": "Processos nos EUA contra Moraes por censura extraterritorial (Trump Media e Rumble); críticas internacionais por abusos.",
        "type": "judicial",
        "target": "geral",
        "title": "Processos nos EUA contra Moraes",
        "year": 2025
      }
    ]
  }
};