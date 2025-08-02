import { CensorshipData, CensorshipEvent } from "@/types/censorship";

export const censorshipData: CensorshipData = {
  "title": "Cronología de Acciones de Censura contra la Oposición",
  "description": "Reorganización de la cronología basada en fuentes consolidadas de medios alternativos independientes, centrándose en decisiones judiciales que impusieron censura a perfiles, canales o contenidos conservadores en plataformas como Twitter/X, Facebook, Instagram, YouTube, Telegram y otras. Agrupado por año, destacando objetivos, decisiones del STF/TSE e impactos. Las acciones derivan principalmente de la Investigación de Noticias Falsas y las investigaciones electorales, con críticas por censura previa y persecución política.",
  "events": {
    "2019": [
      {
        "date": "Marzo",
        "description": "Apertura de la Investigación de Noticias Falsas por el STF (Dias Toffoli, relator Alexandre de Moraes), con el objetivo de 'ataques' a ministros; resultó en bloqueos iniciales de perfiles conservadores en Twitter que criticaban al poder judicial.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Apertura de la Investigación de Noticias Falsas",
        "year": 2019,
        "source": "https://example.com/fuente-2019-1"
      },
      {
        "date": "Abril",
        "description": "Moraes ordena la eliminación de un reportaje de Crusoé y O Antagonista sobre Toffoli (Lava Jato); multa diaria de R$ 100 mil; objetivos: periodistas de derecha.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Censura a Crusoé y O Antagonista",
        "year": 2019
      }
    ],
    "2020": [
      {
        "date": "Enero–Julio",
        "description": "Bloqueo de perfiles bolsonaristas en Twitter, Facebook e Instagram por 'desinformación' y ataques al STF; objetivos: partidarios de Bolsonaro.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Bloqueo de Perfiles Bolsonaristas",
        "year": 2020,
        "source": "https://example.com/fuente-2020-1"
      },
      {
        "date": "Abril",
        "description": "El periodista Allan dos Santos (Terça Livre) se autoexilia en EE. UU. debido a la persecución; inclusión en la investigación.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Autoexilio de Allan dos Santos",
        "year": 2020
      },
      {
        "date": "Junio",
        "description": "Censura previa a un reportaje de RBS TV sobre malversación de ayuda (juez Daniel da Silva Luz); impacto en contenidos críticos.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportaje de RBS TV",
        "year": 2020
      },
      {
        "date": "Agosto",
        "description": "Eliminación de un artículo de Crusoé crítico con la diputada Bia Kicis (juez Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Eliminación de Artículo de Crusoé",
        "year": 2020
      }
    ],
    "2021": [
      {
        "date": "Agosto",
        "description": "Censura previa a un reportaje de RBS TV sobre corrupción (jueza Tatiana de Lorenzo); objetivos: medios conservadores.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportaje de RBS TV (2)",
        "year": 2021,
        "source": "https://example.com/fuente-2021-1"
      },
      {
        "date": "Septiembre",
        "description": "Censura a un documental crítico con Lava Jato (juez en Paraíba); impacto en narrativas de derecha.",
        "type": "judicial",
        "target": "documentários",
        "title": "Censura a Documental sobre Lava Jato",
        "year": 2021
      },
      {
        "date": "Noviembre",
        "description": "Bloqueo de las cuentas de Allan dos Santos en Twitter y otras plataformas; orden de arresto por 'desinformación'.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Bloqueo de Cuentas de Allan dos Santos",
        "year": 2021
      }
    ],
    "2022": [
      {
        "date": "Marzo",
        "description": "Suspensión de Telegram por 3 días (Moraes); eliminación de contenido de Bolsonaro; monitoreo de canales conservadores.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Suspensión de Telegram",
        "year": 2022,
        "source": "https://example.com/fuente-2022-1"
      },
      {
        "date": "Septiembre",
        "description": "El TSE censura un documental de Brasil Paralelo sobre el atentado a Bolsonaro; prohibición previa; censura a vallas publicitarias electorales críticas en MT y RJ.",
        "type": "eleitoral",
        "target": "documentários",
        "title": "Censura a Documental de Brasil Paralelo",
        "year": 2022
      },
      {
        "date": "Octubre",
        "description": "Congelación de cuentas bancarias de donantes de Allan dos Santos (incluida la jueza exiliada Ludmila Lins Grilo); el TSE bloquea perfiles de parlamentarios como Nikolas Ferreira por 'desinformación' electoral.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Bloqueo de Cuentas y Perfiles",
        "year": 2022
      },
      {
        "date": "Noviembre",
        "description": "Censura a preguntas sobre urnas electrónicas; eliminación de contenido pro-Bolsonaro.",
        "type": "eleitoral",
        "target": "bolsonaristas",
        "title": "Censura a Preguntas sobre Urnas",
        "year": 2022
      }
    ],
    "2023": [
      {
        "date": "Marzo",
        "description": "Amenaza de nueva suspensión de Telegram por mensajes críticos al PL 2630/2020 (Moraes).",
        "type": "judicial",
        "target": "plataformas",
        "title": "Amenaza de Suspensión de Telegram (2)",
        "year": 2023,
        "source": "https://example.com/fuente-2023-1"
      },
      {
        "date": "Junio",
        "description": "Censura a un reportaje de Piauí sobre nepotismo (juez Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportaje de Piauí",
        "year": 2023
      },
      {
        "date": "Julio",
        "description": "Eliminación de un video del reportero Ben Mendes en YouTube (juez Cavalcante Motta).",
        "type": "judicial",
        "target": "mídia",
        "title": "Eliminación de Video en YouTube",
        "year": 2023
      },
      {
        "date": "Septiembre",
        "description": "Censura a un reportaje de Intercept sobre el asesinato de Mãe Bernadete (juez George Alves de Assis); filtraciones revelan investigaciones irregulares contra bolsonaristas a través del TSE/STF.",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportaje de Intercept",
        "year": 2023
      }
    ],
    "2024": [
      {
        "date": "Febrero",
        "description": "Arresto de Filipe Martins (ex-asesor de Bolsonaro) por presunto golpe; impacto en las redes bolsonaristas.",
        "type": "judicial",
        "target": "bolsonaristas",
        "title": "Arresto de Filipe Martins",
        "year": 2024,
        "source": "https://example.com/fuente-2024-1"
      },
      {
        "date": "Marzo",
        "description": "Órdenes directas a X para eliminar críticas al STF; conflicto con Elon Musk.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Órdenes a X para Eliminación",
        "year": 2024
      },
      {
        "date": "Abril",
        "description": "Brasil clasificado como régimen censor por Surfshark.",
        "type": "midiática",
        "target": "geral",
        "title": "Brasil Clasificado como Régimen Censor",
        "year": 2024
      },
      {
        "date": "Junio",
        "description": "Censura a un reportaje de O Bastidor sobre fraudes bancarias (juez Hilmar Raposo Filho).",
        "type": "judicial",
        "target": "mídia",
        "title": "Censura a Reportaje de O Bastidor",
        "year": 2024
      },
      {
        "date": "Agosto",
        "description": "Suspensión de X por 40 días (Moraes); exigencia de eliminación de contenido conservador.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Suspensión de X",
        "year": 2024
      },
      {
        "date": "Septiembre",
        "description": "Censura a una parodia de 'Cálice' de Tiago Pavinatto (jueza Admara Schneider); multa a Meta; lanzamiento de la Revista Timeline (Lacombe y Santos) en EE. UU. para evitar la censura.",
        "type": "judicial",
        "target": "conservadores",
        "title": "Censura a Parodia de Tiago Pavinatto",
        "year": 2024
      }
    ],
    "2025": [
      {
        "date": "Enero",
        "description": "Bloqueo de perfiles de la Revista Timeline (Lacombe y Santos) en X, Instagram y YouTube (STF/Moraes); alegación de 'noticias falsas' y milicias digitales; el sitio permanece en línea, pero la transmisión en vivo se interrumpe; críticas por censura previa sin defensa.",
        "type": "judicial",
        "target": "jornalistas de direita",
        "title": "Bloqueo de Perfiles de la Revista Timeline",
        "year": 2025,
        "source": "https://example.com/fuente-2025-1"
      },
      {
        "date": "Mayo–Junio",
        "description": "Decisión del STF obliga a las redes a eliminar contenido 'antidemocrático' sin orden previa (modificación del Marco Civil); responsabilidad de las plataformas; impacto en cristianos y conservadores.",
        "type": "judicial",
        "target": "plataformas",
        "title": "Decisión del STF sobre Contenido Antidemocrático",
        "year": 2025
      },
      {
        "date": "Julio",
        "description": "Demandas en EE. UU. contra Moraes por censura extraterritorial (Trump Media y Rumble); críticas internacionales por abusos.",
        "type": "judicial",
        "target": "geral",
        "title": "Demandas en EE. UU. contra Moraes",
        "year": 2025
      }
    ]
  }
};