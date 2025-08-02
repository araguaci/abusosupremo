export interface DossieEvent {
  data: string;
  acao: string;
  violacao: string[];
  year: number;
}

export interface DossieData {
  [year: string]: DossieEvent[];
}