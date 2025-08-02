export type CensorshipEvent = {
  date: string;
  description: string;
  type: 'judicial' | 'midiática' | 'eleitoral';
  target: 'conservadores' | 'jornalistas_de_direita' | 'bolsonaristas' | 'plataformas' | 'documentários' | 'mídia' | 'geral';
  title: string;
  year: number;
  source?: string; // Added this line
};

export type CensorshipData = {
  title: string;
  description: string;
  events: {
    [year: string]: CensorshipEvent[];
  };
};

export type CensoredPerson = {
  name: string;
  description: string;
};