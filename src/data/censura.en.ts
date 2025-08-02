import { CensorshipData, CensorshipEvent } from "@/types/censorship";

export const censorshipData: CensorshipData = {
  "title": "Timeline of Censorship Actions against Opposition",
  "description": "Reorganization of the timeline based on consolidated sources from independent alternative media, focusing on judicial decisions that imposed censorship on conservative profiles, channels, or content on platforms like Twitter/X, Facebook, Instagram, YouTube, Telegram, and others. Grouped by year, highlighting targets, STF/TSE decisions, and impacts. Actions derive mainly from the Fake News Inquiry and electoral inquiries, with criticism for prior censorship and political persecution.",
  "events": {
    "2019": [
      {
        "date": "March",
        "description": "Opening of the Fake News Inquiry by the STF (Dias Toffoli, rapporteur Alexandre de Moraes), targeting 'attacks' on ministers; resulted in initial blocks of conservative profiles on Twitter criticizing the judiciary.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Fake News Inquiry Opening",
        "year": 2019,
        "source": "https://example.com/source-2019-1"
      },
      {
        "date": "April",
        "description": "Moraes orders removal of a report from Crusoé and O Antagonista about Toffoli (Lava Jato); daily fine of R$ 100,000; targets: right-wing journalists.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Censorship of Crusoé and O Antagonista",
        "year": 2019
      }
    ],
    "2020": [
      {
        "date": "January–July",
        "description": "Blocking of pro-Bolsonaro profiles on Twitter, Facebook, and Instagram for 'disinformation' and attacks on the STF; targets: Bolsonaro supporters.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Blocking of Bolsonaro Supporters' Profiles",
        "year": 2020,
        "source": "https://example.com/source-2020-1"
      },
      {
        "date": "April",
        "description": "Journalist Allan dos Santos (Terça Livre) goes into self-exile in the US due to persecution; included in the inquiry.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Allan dos Santos' Self-Exile",
        "year": 2020
      },
      {
        "date": "June",
        "description": "Prior censorship of an RBS TV report on aid misappropriation (judge Daniel da Silva Luz); impact on critical content.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censorship of RBS TV Report",
        "year": 2020
      },
      {
        "date": "August",
        "description": "Removal of an article from Crusoé critical of deputy Bia Kicis (judge Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Removal of Crusoé Article",
        "year": 2020
      }
    ],
    "2021": [
      {
        "date": "August",
        "description": "Prior censorship of an RBS TV report on corruption (judge Tatiana de Lorenzo); targets: conservative media outlets.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censorship of RBS TV Report (2)",
        "year": 2021,
        "source": "https://example.com/source-2021-1"
      },
      {
        "date": "September",
        "description": "Censorship of a documentary critical of Lava Jato (judge in Paraíba); impact on right-wing narratives.",
        "type": "judicial",
        "target": "documentários",
        "title": "Censorship of Lava Jato Documentary",
        "year": 2021
      },
      {
        "date": "November",
        "description": "Blocking of Allan dos Santos's accounts on Twitter and other platforms; arrest warrant for 'disinformation'.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Blocking of Allan dos Santos' Accounts",
        "year": 2021
      }
    ],
    "2022": [
      {
        "date": "March",
        "description": "Suspension of Telegram for 3 days (Moraes); removal of Bolsonaro's content; monitoring of conservative channels.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Telegram Suspension",
        "year": 2022,
        "source": "https://example.com/source-2022-1"
      },
      {
        "date": "September",
        "description": "TSE censors a Brasil Paralelo documentary about the attack on Bolsonaro; prior restraint; censorship of critical electoral billboards in MT and RJ.",
        "type": "eleitoral",
        "target": "documentários",
        "title": "TSE Censorship of Brasil Paralelo Documentary",
        "year": 2022
      },
      {
        "date": "October",
        "description": "Freezing of bank accounts of donors to Allan dos Santos (including exiled judge Ludmila Lins Grilo); TSE blocks profiles of parliamentarians like Nikolas Ferreira for electoral 'disinformation'.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Blocking of Accounts and Profiles",
        "year": 2022
      },
      {
        "date": "November",
        "description": "Censorship of questions about electronic voting machines; removal of pro-Bolsonaro content.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Censorship of Voting Machine Questions",
        "year": 2022
      }
    ],
    "2023": [
      {
        "date": "March",
        "description": "Threat of new suspension of Telegram for messages critical of Bill 2630/2020 (Moraes).",
        "type": "judicial",
        "target": "plataformas",
        "title": "Telegram Suspension Threat (2)",
        "year": 2023,
        "source": "https://example.com/source-2023-1"
      },
      {
        "date": "June",
        "description": "Censorship of a Piauí report on nepotism (judge Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Censorship of Piauí Report",
        "year": 2023
      },
      {
        "date": "July",
        "description": "Removal of a video by reporter Ben Mendes on YouTube (judge Cavalcante Motta).",
        "type": "judicial",
        "target": "mídia",
        "title": "Removal of YouTube Video",
        "year": 2023
      },
      {
        "date": "September",
        "description": "Censorship of an Intercept report on the murder of Mãe Bernadete (judge George Alves de Assis); leaks reveal irregular investigations against Bolsonaristas via TSE/STF.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censorship of Intercept Report",
        "year": 2023
      }
    ],
    "2024": [
      {
        "date": "February",
        "description": "Arrest of Filipe Martins (former Bolsonaro aide) for an alleged coup; impact on pro-Bolsonaro networks.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Arrest of Filipe Martins",
        "year": 2024,
        "source": "https://example.com/source-2024-1"
      },
      {
        "date": "March",
        "description": "Direct orders to X to remove criticism of the STF; conflict with Elon Musk.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Orders to X for Removal",
        "year": 2024
      },
      {
        "date": "April",
        "description": "Brazil classified as a censoring regime by Surfshark.",
        "type": "midiática",
        "target": "geral",
        "title": "Brazil Classified as Censoring Regime",
        "year": 2024
      },
      {
        "date": "June",
        "description": "Censorship of an O Bastidor report on bank fraud (judge Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Censorship of O Bastidor Report",
        "year": 2024
      },
      {
        "date": "August",
        "description": "Suspension of X for 40 days (Moraes); demand for removal of conservative content.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Suspension of X",
        "year": 2024
      },
      {
        "date": "September",
        "description": "Censorship of a parody of 'Cálice' by Tiago Pavinatto (judge Admara Schneider); fine imposed on Meta; launch of Revista Timeline (Lacombe and Santos) in the US to avoid censorship.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Censorship of Tiago Pavinatto Parody",
        "year": 2024
      }
    ],
    "2025": [
      {
        "date": "January",
        "description": "Blocking of Revista Timeline (Lacombe and Santos) profiles on X, Instagram, and YouTube (STF/Moraes); allegation of 'fake news' and digital militias; site remains online, but live broadcast interrupted; criticism for prior censorship without defense.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Blocking of Revista Timeline Profiles",
        "year": 2025,
        "source": "https://example.com/source-2025-1"
      },
      {
        "date": "May–June",
        "description": "STF decision forces networks to remove 'anti-democratic' content without a prior order (amendment to Marco Civil); platform liability; impact on Christians and conservatives.",
        "type": "judicial",
        "target": "plataformas",
        "title": "STF Decision on Anti-Democratic Content",
        "year": 2025
      },
      {
        "date": "July",
        "description": "Lawsuits in the US against Moraes for extraterritorial censorship (Trump Media and Rumble); international criticism for abuses.",
        "type": "judicial",
        "target": "geral",
        "title": "Lawsuits in US Against Moraes",
        "year": 2025
      }
    ]
  }
};