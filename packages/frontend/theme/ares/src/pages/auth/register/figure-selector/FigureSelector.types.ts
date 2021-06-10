export interface FigureSelectorProps {
  figure?: Figure;
  figures: Figure[];
  onSelect(newFigures: Figure): void;
}

export interface Figure {
  group: string;
  look: string;
}
