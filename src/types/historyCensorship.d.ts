export type HistoryCensorshipEvent = {
  date: string;
  description: string;
  citations: number[];
};

export type Period = {
  title: string;
  description: string;
  events: HistoryCensorshipEvent[];
};

export type HistoryCensorshipData = {
  title: string;
  periods: {
    [periodKey: string]: Period;
  };
  citations: { [key: number]: string };
};