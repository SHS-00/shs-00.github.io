export interface TOCItem {
  title: string;
  author?: string;
  pdf?: string;
}

export interface TOCSection {
  category: string;
  items: TOCItem[];
}
