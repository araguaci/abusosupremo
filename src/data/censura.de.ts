import { CensorshipData, CensorshipEvent } from "@/types/censorship";

export const censorshipData: CensorshipData = {
  "title": "Zeitleiste der Zensurmaßnahmen gegen die Opposition",
  "description": "Neuorganisation der Zeitleiste basierend auf konsolidierten Quellen unabhängiger alternativer Medien, die sich auf gerichtliche Entscheidungen konzentrieren, die Zensur von konservativen Profilen, Kanälen oder Inhalten auf Plattformen wie Twitter/X, Facebook, Instagram, YouTube, Telegram und anderen auferlegten. Gruppiert nach Jahr, Hervorhebung von Zielen, STF/TSE-Entscheidungen und Auswirkungen. Die Maßnahmen leiten sich hauptsächlich aus der Fake-News-Untersuchung und Wahluntersuchungen ab, mit Kritik an Vorzensur und politischer Verfolgung.",
  "events": {
    "2019": [
      {
        "date": "März",
        "description": "Eröffnung der Fake-News-Untersuchung durch den STF (Dias Toffoli, Berichterstatter Alexandre de Moraes), die 'Angriffe' auf Minister zum Ziel hatte; führte zu anfänglichen Sperrungen konservativer Profile auf Twitter, die die Justiz kritisierten.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Eröffnung der Fake-News-Untersuchung",
        "year": 2019,
        "source": "https://example.com/quelle-2019-1"
      },
      {
        "date": "April",
        "description": "Moraes ordnet die Entfernung eines Berichts von Crusoé und O Antagonista über Toffoli (Lava Jato) an; tägliche Geldstrafe von R$ 100 Tausend; Ziele: rechte Journalisten.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Zensur von Crusoé und O Antagonista",
        "year": 2019
      }
    ],
    "2020": [
      {
        "date": "Januar–Juli",
        "description": "Sperrung von Bolsonaro-freundlichen Profilen auf Twitter, Facebook und Instagram wegen 'Desinformation' und Angriffen auf den STF; Ziele: Bolsonaro-Anhänger.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Sperrung von Bolsonaro-freundlichen Profilen",
        "year": 2020,
        "source": "https://example.com/quelle-2020-1"
      },
      {
        "date": "April",
        "description": "Journalist Allan dos Santos (Terça Livre) geht wegen Verfolgung ins Exil in die USA; Aufnahme in die Untersuchung.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Allan dos Santos' Exil",
        "year": 2020
      },
      {
        "date": "Juni",
        "description": "Vorzensur eines RBS TV-Berichts über die Veruntreuung von Hilfsgeldern (Richter Daniel da Silva Luz); Auswirkungen auf kritische Inhalte.",
        "type": "judicial",
        "target": "mídia",
        "title": "Zensur des RBS TV-Berichts",
        "year": 2020
      },
      {
        "date": "August",
        "description": "Entfernung eines Artikels von Crusoé, der die Abgeordnete Bia Kicis kritisierte (Richter Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Entfernung des Crusoé-Artikels",
        "year": 2020
      }
    ],
    "2021": [
      {
        "date": "August",
        "description": "Vorzensur eines RBS TV-Berichts über Korruption (Richterin Tatiana de Lorenzo); Ziele: konservative Medien.",
        "type": "judicial",
        "target": "mídia",
        "title": "Zensur des RBS TV-Berichts (2)",
        "year": 2021,
        "source": "https://example.com/quelle-2021-1"
      },
      {
        "date": "September",
        "description": "Zensur eines Dokumentarfilms, der Lava Jato kritisierte (Richter in Paraíba); Auswirkungen auf rechte Narrative.",
        "type": "judicial",
        "target": "documentários",
        "title": "Zensur des Lava Jato-Dokumentarfilms",
        "year": 2021
      },
      {
        "date": "November",
        "description": "Sperrung von Allan dos Santos' Konten auf Twitter und anderen Plattformen; Haftbefehl wegen 'Desinformation'.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Sperrung von Allan dos Santos' Konten",
        "year": 2021
      }
    ],
    "2022": [
      {
        "date": "Março",
        "description": "Sperrung von Telegram für 3 Tage (Moraes); Entfernung von Bolsonaros Inhalten; Überwachung konservativer Kanäle.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Telegram-Sperrung",
        "year": 2022,
        "source": "https://example.com/quelle-2022-1"
      },
      {
        "date": "September",
        "description": "TSE zensiert einen Brasil Paralelo-Dokumentarfilm über den Anschlag auf Bolsonaro; Vorabverbot; Zensur kritischer Wahlplakate in MT und RJ.",
        "type": "eleitoral",
        "target": "documentários",
        "title": "TSE-Zensur des Brasil Paralelo-Dokumentarfilms",
        "year": 2022
      },
      {
        "date": "Oktober",
        "description": "Einfrieren von Bankkonten von Spendern für Allan dos Santos (einschließlich der exilierten Richterin Ludmila Lins Grilo); TSE sperrt Profile von Parlamentariern wie Nikolas Ferreira wegen 'Desinformation' im Wahlkampf.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Sperrung von Konten und Profilen",
        "year": 2022
      },
      {
        "date": "November",
        "description": "Zensur von Fragen zu elektronischen Wahlurnen; Entfernung von Bolsonaro-freundlichen Inhalten.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Zensur von Wahlurnenfragen",
        "year": 2022
      }
    ],
    "2023": [
      {
        "date": "Março",
        "description": "Drohung mit erneuter Sperrung von Telegram wegen kritischer Nachrichten zum PL 2630/2020 (Moraes).",
        "type": "judicial",
        "target": "plataformas",
        "title": "Ameaça de Suspensão do Telegram (2)",
        "year": 2023,
        "source": "https://example.com/quelle-2023-1"
      },
      {
        "date": "Junho",
        "description": "Zensur eines Piauí-Berichts über Vetternwirtschaft (Richter Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Zensur des Piauí-Berichts",
        "year": 2023
      },
      {
        "date": "Julho",
        "description": "Entfernung eines Videos des Reporters Ben Mendes auf YouTube (Richter Cavalcante Motta).",
        "type": "judicial",
        "target": "mídia",
        "title": "Entfernung des YouTube-Videos",
        "year": 2023
      },
      {
        "date": "Setembro",
        "description": "Zensur eines Intercept-Berichts über die Ermordung von Mãe Bernadete (Richter George Alves de Assis); Leaks enthüllen unregelmäßige Ermittlungen gegen Bolsonaristas über TSE/STF.",
        "type": "judicial",
        "target": "mídia",
        "title": "Zensur des Intercept-Berichts",
        "year": 2023
      }
    ],
    "2024": [
      {
        "date": "Fevereiro",
        "description": "Verhaftung von Filipe Martins (ehemaliger Bolsonaro-Berater) wegen angeblichen Putsches; Auswirkungen auf Bolsonaro-freundliche Netzwerke.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Verhaftung von Filipe Martins",
        "year": 2024,
        "source": "https://example.com/quelle-2024-1"
      },
      {
        "date": "Março",
        "description": "Direkte Anweisungen an X, Kritik am STF zu entfernen; Konflikt mit Elon Musk.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Anweisungen an X zur Entfernung",
        "year": 2024
      },
      {
        "date": "April",
        "description": "Brasilien von Surfshark als Zensurregime eingestuft.",
        "type": "midiática",
        "target": "geral",
        "title": "Brasilien als Zensurregime eingestuft",
        "year": 2024
      },
      {
        "date": "Juni",
        "description": "Zensur eines O Bastidor-Berichts über Bankbetrug (Richter Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Zensur des O Bastidor-Berichts",
        "year": 2024
      },
      {
        "date": "Agosto",
        "description": "Sperrung von X für 40 Tage (Moraes); Forderung nach Entfernung konservativer Inhalte.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Sperrung von X",
        "year": 2024
      },
      {
        "date": "Setembro",
        "description": "Zensur einer Parodie von 'Cálice' durch Tiago Pavinatto (Richterin Admara Schneider); Geldstrafe für Meta; Start des Magazins Timeline (Lacombe und Santos) in den USA, um Zensur zu vermeiden.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Zensur der Tiago Pavinatto Parodie",
        "year": 2024
      }
    ],
    "2025": [
      {
        "date": "Januar",
        "description": "Sperrung der Profile des Magazins Timeline (Lacombe und Santos) auf X, Instagram und YouTube (STF/Moraes); Behauptung von 'Fake News' und digitalen Milizen; Website bleibt online, aber Live-Übertragung unterbrochen; Kritik an Vorzensur ohne Verteidigung.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Sperrung der Timeline-Magazin-Profile",
        "year": 2025,
        "source": "https://example.com/quelle-2025-1"
      },
      {
        "date": "Mai–Juni",
        "description": "STF-Entscheidung zwingt Netzwerke, 'antidemokratische' Inhalte ohne vorherige Anordnung zu entfernen (Änderung des Marco Civil); Haftung der Plattformen; Auswirkungen auf Christen und Konservative.",
        "type": "judicial",
        "target": "plataformas",
        "title": "STF-Entscheidung zu antidemokratischen Inhalten",
        "year": 2025
      },
      {
        "date": "Juli",
        "description": "Klagen in den USA gegen Moraes wegen extraterritorialer Zensur (Trump Media und Rumble); internationale Kritik an Missbräuchen.",
        "type": "judicial",
        "target": "geral",
        "title": "Klagen in den USA gegen Moraes",
        "year": 2025
      }
    ]
  }
};