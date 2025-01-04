export interface RouletteItem {
  id: string;
  price: string;
  deg: number;
  background: string;
  color: string;
}

export interface RouletteProps {
  items?: RouletteItem[];
}

export interface RouletteButtonProps {
  degree?: number;
  isStart?: boolean;
}
