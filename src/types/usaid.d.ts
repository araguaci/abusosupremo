export interface UsaidTseEvent {
  local: string;
  titulo: string;
  descrição: string;
  envolvidos: string[];
  gravidade: 'baixa' | 'média' | 'alta';
  fontes: string[];
  data: string; // YYYY-MM-DD
  year: number;
}