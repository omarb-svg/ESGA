export interface Product {
  id: string;
  name: string;
  partNumber: string;
  brand: string;
  models: string[];
  category: string;
  description: string;
  material: string;
  inStock: boolean;
}

export type Brand = "Renault" | "TOFAŞ" | "Fiat" | "Peugeot";
export type Category =
  | "Bellows"
  | "Silent Blocks"
  | "Wheel Clips"
  | "Engine Mounts"
  | "Axle Boots";
