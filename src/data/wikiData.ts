export interface CropItem {
  id: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'C';
  basePrice: number;
  growthTime: string;
  multiHarvest: boolean;
  harvestCount: number;
  description: string;
}

export interface MutationType {
  id: string;
  name: string;
  multiplier: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'God';
  triggerCondition: string;
  colorClass: string;
}

export interface SoilFertilizer {
  id: string;
  name: string;
  category: 'Soil' | 'Fertilizer' | 'Sprinkler';
  speedBonus: string;
  yieldBonus: string;
  cost: string;
  source: string;
}

export interface GardenCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

export const CROPS_DATA: CropItem[] = [
  { id: 'dragons-breath', name: "Dragon's Breath", tier: 'S', basePrice: 850, growthTime: '12m', multiHarvest: true, harvestCount: 5, description: 'Supreme fiery bloom with extreme baseline sell value and 5-stage yield.' },
  { id: 'ghost-pepper', name: 'Ghost Pepper', tier: 'S', basePrice: 780, growthTime: '10m', multiHarvest: true, harvestCount: 4, description: 'Super-spicy nightshade offering massive compounding during Blood Moon weather.' },
  { id: 'moon-bloom', name: 'Moon Bloom', tier: 'S', basePrice: 720, growthTime: '8m', multiHarvest: false, harvestCount: 1, description: 'Nocturnal flower with 100% Moonlit mutation chance if planted past dusk.' },
  { id: 'venus-flytrap', name: 'Venus Flytrap', tier: 'A', basePrice: 700, growthTime: '15m', multiHarvest: true, harvestCount: 6, description: 'Carnivorous plant that consumes pests and defends surrounding plots from thieves.' },
  { id: 'hypno-bloom', name: 'Hypno Bloom', tier: 'A', basePrice: 690, growthTime: '9m', multiHarvest: false, harvestCount: 1, description: 'Pulsing spiral blossom with elevated Rainbow and Disco mutation rates.' },
  { id: 'glow-mushroom', name: 'Glow Mushroom', tier: 'A', basePrice: 480, growthTime: '6m', multiHarvest: true, harvestCount: 3, description: 'Spore-releasing subterranean fungus that thrives in shaded mystic soil.' },
  { id: 'poison-apple', name: 'Poison Apple', tier: 'B', basePrice: 450, growthTime: '14m', multiHarvest: true, harvestCount: 4, description: 'Dark orchard tree crop used in alchemy brewing and market trading.' },
  { id: 'pomegranate', name: 'Ruby Pomegranate', tier: 'B', basePrice: 420, growthTime: '7m', multiHarvest: true, harvestCount: 3, description: 'Dense seed pod crop granting high passive coin returns.' },
  { id: 'sunflower-radiant', name: 'Solar Sunflower', tier: 'B', basePrice: 400, growthTime: '5m', multiHarvest: false, harvestCount: 1, description: 'Collects solar energy, accelerating adjacent plot growth speeds by 15%.' },
  { id: 'fire-fern', name: 'Blazing Fire Fern', tier: 'B', basePrice: 380, growthTime: '6m', multiHarvest: true, harvestCount: 2, description: 'Heat-resistant fern that withstands drought and heatwave events.' },
  { id: 'dragon-fruit-pink', name: 'Exotic Dragon Fruit', tier: 'C', basePrice: 250, growthTime: '5m', multiHarvest: true, harvestCount: 3, description: 'Reliable mid-game fruit for continuous harvest income.' },
  { id: 'cherry-cluster', name: 'Sweet Cherry Cluster', tier: 'C', basePrice: 220, growthTime: '4m', multiHarvest: true, harvestCount: 4, description: 'Quick-cycle orchard crop ideal for filling outer fence rows.' },
  { id: 'green-bean-vine', name: 'Sky Climber Green Bean', tier: 'C', basePrice: 180, growthTime: '3m', multiHarvest: true, harvestCount: 5, description: 'Early multi-harvest crop offering steady early coin flow.' },
  { id: 'golden-mango', name: 'Tropical Mango', tier: 'C', basePrice: 200, growthTime: '5m', multiHarvest: true, harvestCount: 3, description: 'Staple fruit with high merchant demand during town market days.' },
  { id: 'crisp-carrot', name: 'Crisp Garden Carrot', tier: 'C', basePrice: 80, growthTime: '90s', multiHarvest: false, harvestCount: 1, description: 'Starter staple crop for initial soil preparation and seed bank growth.' },
  { id: 'russet-potato', name: 'Russet Earth Potato', tier: 'C', basePrice: 70, growthTime: '60s', multiHarvest: false, harvestCount: 1, description: 'Fastest-growing starter vegetable for emergency cash generation.' }
];

export const MUTATIONS_DATA: MutationType[] = [
  { id: 'mut-rainbow', name: 'Rainbow', multiplier: 4.0, rarity: 'Legendary', triggerCondition: 'Rainstorm + Prismatic Sprinkler', colorClass: 'text-pink-400' },
  { id: 'mut-golden', name: 'Golden', multiplier: 20.0, rarity: 'God', triggerCondition: '1/500 Base Chance or Golden Fertilizer', colorClass: 'text-yellow-400' },
  { id: 'mut-disco', name: 'Disco', multiplier: 3.0, rarity: 'Epic', triggerCondition: 'Hypno Bloom pollen crossover', colorClass: 'text-purple-400' },
  { id: 'mut-wet', name: 'Wet', multiplier: 2.0, rarity: 'Common', triggerCondition: 'Rain weather or Hydro Sprinkler', colorClass: 'text-blue-400' },
  { id: 'mut-choc', name: 'Chocolate', multiplier: 1.75, rarity: 'Rare', triggerCondition: 'Cocoa compost soil mixture', colorClass: 'text-amber-700' },
  { id: 'mut-moonlit', name: 'Moonlit', multiplier: 1.5, rarity: 'Rare', triggerCondition: 'Harvested under full moon night', colorClass: 'text-indigo-400' },
  { id: 'mut-burning', name: 'Burning', multiplier: 1.5, rarity: 'Rare', triggerCondition: 'Heatwave event or Lava fertilizer', colorClass: 'text-orange-400' },
  { id: 'mut-frozen', name: 'Frozen', multiplier: 1.5, rarity: 'Rare', triggerCondition: 'Blizzard storm cold snap', colorClass: 'text-cyan-400' }
];

export const SOIL_FERTILIZERS_DATA: SoilFertilizer[] = [
  { id: 'mystic-soil-t3', name: 'Mystic Prismatic Soil', category: 'Soil', speedBonus: '+250% Growth Rate', yieldBonus: '+2 Extra Harvests', cost: '500,000 Sheckles', source: 'Orson Alchemy Lab' },
  { id: 'volcanic-loam', name: 'Volcanic Loam', category: 'Soil', speedBonus: '+150% Growth Rate', yieldBonus: 'Fire Mutation Immune', cost: '120,000 Sheckles', source: 'Mountain Merchant' },
  { id: 'double-yield-compost', name: 'Double-Yield Bio Compost', category: 'Fertilizer', speedBonus: '+30% Speed', yieldBonus: 'Guaranteed 2x Fruit', cost: '45,000 Sheckles', source: 'Farming Co-op' },
  { id: 'golden-catalyst', name: 'Alchemist Golden Dust', category: 'Fertilizer', speedBonus: '0%', yieldBonus: '+10% Golden Mutation Chance', cost: '1,500,000 Sheckles', source: 'Secret Vault Trader' },
  { id: 'industrial-sprinkler', name: 'Omni-Rotary Sprinkler 360', category: 'Sprinkler', speedBonus: 'Continuous Hydration', yieldBonus: 'Permanent Wet Mutation', cost: '350,000 Sheckles', source: 'Hardware Store' },
  { id: 'solar-accelerator', name: 'UV Growth Lamp Array', category: 'Sprinkler', speedBonus: '+80% Growth Speed', yieldBonus: '24/7 Day Cycle', cost: '800,000 Sheckles', source: 'Garden Engineer' }
];

export const GARDEN_CODES_DATA: GardenCode[] = [
  { id: 'code-harvest2026', code: 'HARVEST2026', reward: '100,000 Sheckles + 5x Mystic Seeds', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-rainbowbloom', code: 'RAINBOWBLOOM', reward: '2x Prismatic Fertilizer', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-gardenclub', code: 'GARDENCLUB', reward: 'Free Omni-Rotary Sprinkler', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-orson', code: 'ORSONASCEND', reward: '50,000 Sheckles + 10x Bio Compost', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-superseeds', code: 'SUPERSEEDS', reward: '3x Rare Dragon Breath Seeds', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-wetplot', code: 'WETPLOT', reward: '15,000 Sheckles', status: 'ACTIVE', dateAdded: '' }
];
