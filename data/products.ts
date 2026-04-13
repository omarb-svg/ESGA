import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Trapez Silent Block",
    partNumber: "7700819929",
    brand: "Renault",
    models: ["Twingo"],
    category: "Silent Blocks",
    description:
      "High-quality rubber trapez silent block for Renault Twingo. Provides superior vibration damping and long service life.",
    material: "Natural Rubber",
    inStock: true,
  },
  {
    id: "2",
    name: "Wheel Clips Rubber",
    partNumber: "7701469491",
    brand: "Renault",
    models: ["Megane"],
    category: "Wheel Clips",
    description:
      "Durable rubber wheel clips designed for Renault Megane. Ensures secure wheel fitment and reduces road noise.",
    material: "EPDM Rubber",
    inStock: true,
  },
  {
    id: "3",
    name: "Steering Wheel Bellow Left Side",
    partNumber: "4373921",
    brand: "TOFAŞ",
    models: ["131"],
    category: "Bellows",
    description:
      "Precision-molded left side steering wheel bellow for TOFAŞ 131. Protects the steering rack from dust and moisture.",
    material: "Neoprene Rubber",
    inStock: true,
  },
  {
    id: "4",
    name: "Upper Trapez Silent Block",
    partNumber: "7700805872",
    brand: "Renault",
    models: ["R18"],
    category: "Silent Blocks",
    description:
      "Upper trapez silent block for Renault 18. Reduces road vibration and improves driving comfort.",
    material: "Natural Rubber",
    inStock: true,
  },
  {
    id: "5",
    name: "Axle Bellow Outer",
    partNumber: "7701469021",
    brand: "Renault",
    models: ["R19", "Megane", "Clio", "Kangoo"],
    category: "Axle Boots",
    description:
      "Outer axle bellow compatible with multiple Renault models. Protects the CV joint from contamination and extends axle life.",
    material: "Thermoplastic Rubber",
    inStock: true,
  },
  {
    id: "6",
    name: "Steering Wheel Bellow Right Side",
    partNumber: "770706007",
    brand: "Renault",
    models: ["Megane", "Clio"],
    category: "Bellows",
    description:
      "Right side steering bellow for Renault Megane and Clio. OEM-quality protection for the steering gear.",
    material: "Neoprene Rubber",
    inStock: true,
  },
  {
    id: "7",
    name: "Lower Control Arm Bushing",
    partNumber: "7700432625",
    brand: "Renault",
    models: ["Clio", "Kangoo", "Megane"],
    category: "Silent Blocks",
    description:
      "Lower control arm bushing for Renault Clio, Kangoo, and Megane. Restores precise handling and reduces noise.",
    material: "Natural Rubber",
    inStock: true,
  },
  {
    id: "8",
    name: "Gearbox Mount",
    partNumber: "7700431387",
    brand: "Renault",
    models: ["R19", "Clio"],
    category: "Engine Mounts",
    description:
      "Gearbox mount for Renault 19 and Clio. Absorbs transmission vibrations for a smoother drive.",
    material: "Natural Rubber",
    inStock: false,
  },
  {
    id: "9",
    name: "Steering Rack Bellow",
    partNumber: "4373950",
    brand: "TOFAŞ",
    models: ["Doğan", "Şahin"],
    category: "Bellows",
    description:
      "Steering rack bellow for TOFAŞ Doğan and Şahin. Keeps the steering mechanism clean and properly lubricated.",
    material: "Neoprene Rubber",
    inStock: true,
  },
  {
    id: "10",
    name: "Anti-Roll Bar Bush",
    partNumber: "7700814254",
    brand: "Renault",
    models: ["Megane", "Scenic"],
    category: "Silent Blocks",
    description:
      "Anti-roll bar bush for Renault Megane and Scenic. Improves stability and reduces body roll during cornering.",
    material: "Natural Rubber",
    inStock: true,
  },
  {
    id: "11",
    name: "Engine Mount Right",
    partNumber: "7700870040",
    brand: "Renault",
    models: ["Clio", "Twingo"],
    category: "Engine Mounts",
    description:
      "Right side engine mount for Renault Clio and Twingo. Reduces engine vibration transmission to the cabin.",
    material: "Natural Rubber",
    inStock: true,
  },
  {
    id: "12",
    name: "Inner CV Boot",
    partNumber: "7701472732",
    brand: "Renault",
    models: ["Laguna", "Megane", "Scenic"],
    category: "Axle Boots",
    description:
      "Inner CV joint boot for Renault Laguna, Megane and Scenic. Maintains grease and protects the inner CV joint.",
    material: "Thermoplastic Rubber",
    inStock: true,
  },
];

export const brands = [...new Set(products.map((p) => p.brand))];
export const categories = [...new Set(products.map((p) => p.category))];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function filterProducts(opts: {
  search?: string;
  brand?: string;
  category?: string;
}): Product[] {
  return products.filter((p) => {
    if (
      opts.brand &&
      opts.brand !== "all" &&
      p.brand.toLowerCase() !== opts.brand.toLowerCase()
    )
      return false;
    if (
      opts.category &&
      opts.category !== "all" &&
      p.category.toLowerCase() !== opts.category.toLowerCase()
    )
      return false;
    if (opts.search) {
      const q = opts.search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.partNumber.toLowerCase().includes(q) ||
        p.models.some((m) => m.toLowerCase().includes(q)) ||
        p.brand.toLowerCase().includes(q)
      );
    }
    return true;
  });
}
