
export interface Product {
  id: number;
  nom: string;
  categorie: 'Gâteaux' | 'Petit four' | 'Crêpes farcie';
  image?: string;
  allergenes?: string[];
  description?: string;
  actif: boolean;
}

export interface CartItem {
  id: number;
  product: Product;
  qte: number;
}
