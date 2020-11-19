declare module '*.png';

export interface VacinaProps {
  id: number;
  dependente: string;
  data: string;
  descricao: string;
  status: string;
}

export interface CampanhaProps {
  id: number;
  data1: string;
  data2: string;
  descricao: string;
  idades: string;
}
