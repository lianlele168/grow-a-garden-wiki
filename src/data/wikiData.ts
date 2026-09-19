/**
 * Grow a Garden — REAL crop & mutation database.
 * Sources (verified 2026-09):
 *  - Crops: IGN "All Grow a Garden Seeds, Crop, and Seed Packs" (Sheckle/Robux prices & rarity)
 *  - Mutations: growagarden.fandom.com/wiki/Mutations (official multiplier table)
 * NOTE: seed prices are the documented values. Per-fruit sell value depends on
 * fruit weight + mutations, so calculators on this site only scale multipliers.
 */

export type CropRarity =
  | 'Common' | 'Uncommon' | 'Rare' | 'Legendary'
  | 'Mythical' | 'Divine' | 'Prismatic' | 'Transcendent';

export type SeedCurrency =
  | 'Sheckles' | 'Honey' | 'Summer Coin' | 'Chi' | 'Garden Coin' | 'Candy Corn';

export interface CropItem {
  id: string;
  name: string;
  rarity: CropRarity;
  /** Seed price in `currency`; 0 when the seed was never sold for in-game currency (Robux-only). */
  seedPrice: number;
  currency: SeedCurrency;
  /** Robux price when applicable; 0 otherwise. */
  robuxPrice: number;
  /** undefined = harvest type not documented in sources. */
  multiHarvest?: boolean;
  source: string;
  description: string;
}

export interface MutationType {
  id: string;
  name: string;
  multiplier: number;
  /** Growth = one per fruit (Gold/Rainbow). Environmental = stackable. */
  category: 'Growth' | 'Environmental';
  triggerCondition: string;
  colorClass: string;
}

/**
 * OFFICIAL mutation formula (Fandom Mutations page):
 *   totalMultiplier = growthMultiplier + SUM(environmental) - environmentalCount + 1
 * Then multiply by the crop's base value and weight factor.
 */
export function officialMutationMultiplier(
  growth: number,      // 1 (none), 20 (Gold), 50 (Rainbow)
  envMultipliers: number[]
): number {
  if (envMultipliers.length === 0) return growth;
  const sum = envMultipliers.reduce((a, b) => a + b, 0);
  return growth + sum - envMultipliers.length + 1;
}

export const CROPS_DATA: CropItem[] = [
  // ============ Sam's Seed Stall (always in stock) ============
  { id: 'carrot', name: 'Carrot', rarity: 'Common', seedPrice: 10, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Starter single-harvest root crop, the cheapest seed in the game.' },
  { id: 'strawberry', name: 'Strawberry', rarity: 'Common', seedPrice: 50, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'First multi-harvest seed most players buy; regrows after each pick.' },
  { id: 'blueberry', name: 'Blueberry', rarity: 'Uncommon', seedPrice: 400, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Bush crop that keeps producing berries without replanting.' },
  { id: 'orange-tulip', name: 'Orange Tulip', rarity: 'Uncommon', seedPrice: 600, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Single-harvest flower seed with a quick grow cycle.' },
  { id: 'tomato', name: 'Tomato', rarity: 'Rare', seedPrice: 800, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Reliable multi-harvest vine and an early passive-income staple.' },
  { id: 'daffodil', name: 'Daffodil', rarity: 'Rare', seedPrice: 1000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Single-harvest flower with solid one-shot returns.' },
  { id: 'corn', name: 'Corn', rarity: 'Rare', seedPrice: 1300, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Multi-harvest stalk crop, a mid-game workhorse.' },
  { id: 'watermelon', name: 'Watermelon', rarity: 'Legendary', seedPrice: 2500, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Huge single-harvest fruit; value scales strongly with weight.' },
  { id: 'pumpkin', name: 'Pumpkin', rarity: 'Legendary', seedPrice: 3000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Heavy single-harvest gourd prized for oversized mutations.' },
  { id: 'apple', name: 'Apple', rarity: 'Legendary', seedPrice: 3250, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Orchard tree that keeps producing apples across harvests.' },
  { id: 'bamboo', name: 'Bamboo', rarity: 'Legendary', seedPrice: 4000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Fast single-harvest stalk, popular for quick flip farming.' },
  { id: 'coconut', name: 'Coconut', rarity: 'Mythical', seedPrice: 6000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Palm tree crop with continuous multi-harvest yields.' },
  { id: 'cactus', name: 'Cactus', rarity: 'Mythical', seedPrice: 15000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Multi-harvest desert crop with high per-pick value.' },
  { id: 'dragon-fruit', name: 'Dragon Fruit', rarity: 'Mythical', seedPrice: 50000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Mythical vine crop, a long-standing multi-harvest favorite.' },
  { id: 'mango', name: 'Mango', rarity: 'Mythical', seedPrice: 100000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Mythical tree crop and a core mid-game money maker.' },
  { id: 'mushroom', name: 'Mushroom', rarity: 'Divine', seedPrice: 150000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: "Sam's Seed Stall", description: 'Divine single-harvest fungus with a strong one-shot payout.' },
  { id: 'grape', name: 'Grape', rarity: 'Divine', seedPrice: 850000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Divine vine crop with repeatable premium harvests.' },
  { id: 'pepper', name: 'Pepper', rarity: 'Divine', seedPrice: 1000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Divine multi-harvest chili plant for late-game gardens.' },
  { id: 'cacao', name: 'Cacao', rarity: 'Divine', seedPrice: 2500000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Divine tree crop, one of the best Divine income seeds.' },
  { id: 'beanstalk', name: 'Beanstalk', rarity: 'Prismatic', seedPrice: 10000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Prismatic climbing crop, the gateway to top-tier farming.' },
  { id: 'ember-lily', name: 'Ember Lily', rarity: 'Prismatic', seedPrice: 15000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Prismatic fire flower with premium multi-harvest payouts.' },
  { id: 'sugar-apple', name: 'Sugar Apple', rarity: 'Prismatic', seedPrice: 20000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Prismatic orchard crop, a flagship end-game investment.' },
  { id: 'burning-bud', name: 'Burning Bud', rarity: 'Prismatic', seedPrice: 40000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Prismatic bud crop with some of the highest per-harvest value.' },
  { id: 'giant-pinecone', name: 'Giant Pinecone', rarity: 'Prismatic', seedPrice: 55000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Prismatic giant crop; weight swings make it a jackpot seed.' },
  { id: 'elder-strawberry', name: 'Elder Strawberry', rarity: 'Prismatic', seedPrice: 70000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'Prismatic elderberry tree near the top of the seed price ladder.' },
  { id: 'romanesco', name: 'Romanesco', rarity: 'Prismatic', seedPrice: 88000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: "Sam's Seed Stall", description: 'The most expensive Sheckle seed in Sam\'s Stall (88,000,000).' },
  { id: 'crimson-thorn', name: 'Crimson Thorn', rarity: 'Transcendent', seedPrice: 0, currency: 'Sheckles', robuxPrice: 1149, multiHarvest: true, source: "Sam's Seed Stall (Robux only)", description: 'Transcendent Robux-only seed, top of the current rarity ladder.' },
  { id: 'great-pumpkin', name: 'Great Pumpkin', rarity: 'Transcendent', seedPrice: 0, currency: 'Sheckles', robuxPrice: 1199, multiHarvest: true, source: "Sam's Seed Stall (Robux only)", description: 'Transcendent Robux-only seed; Sheckle price still being confirmed by sources.' },

  // ============ Traveling & seasonal shops ============
  { id: 'cauliflower', name: 'Cauliflower', rarity: 'Rare', seedPrice: 1300, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Rare rotating-stock vegetable with multi-harvest picks.' },
  { id: 'green-apple', name: 'Green Apple', rarity: 'Legendary', seedPrice: 3500, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Legendary orchard variant sold by the summer merchant.' },
  { id: 'avocado', name: 'Avocado', rarity: 'Legendary', seedPrice: 5000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Legendary tree crop from rotating merchant stock.' },
  { id: 'banana', name: 'Banana', rarity: 'Legendary', seedPrice: 7000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Legendary multi-harvest palm crop.' },
  { id: 'pineapple', name: 'Pineapple', rarity: 'Mythical', seedPrice: 7500, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Mythical bromeliad crop with repeat harvests.' },
  { id: 'kiwi', name: 'Kiwi', rarity: 'Mythical', seedPrice: 10000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Mythical vine crop sold during summer rotations.' },
  { id: 'bell-pepper', name: 'Bell Pepper', rarity: 'Mythical', seedPrice: 55000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Mythical multi-harvest vegetable with strong per-pick value.' },
  { id: 'prickly-pear', name: 'Prickly Pear', rarity: 'Mythical', seedPrice: 555000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Mythical cactus fruit, a late-rotation merchant exclusive.' },
  { id: 'rafflesia', name: 'Rafflesia', rarity: 'Legendary', seedPrice: 0, currency: 'Sheckles', robuxPrice: 215, multiHarvest: false, source: 'Summer Traveling Merchant (Robux only)', description: 'Legendary single-harvest giant flower, Robux-only stock.' },
  { id: 'loquat', name: 'Loquat', rarity: 'Divine', seedPrice: 900000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Divine orchard crop from the summer merchant rotation.' },
  { id: 'feijoa', name: 'Feijoa', rarity: 'Divine', seedPrice: 5000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Divine multi-harvest shrub crop.' },
  { id: 'pitcher-plant', name: 'Pitcher Plant', rarity: 'Divine', seedPrice: 7500000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Summer Traveling Merchant', description: 'Divine carnivorous plant, the summer merchant\'s top seed.' },
  { id: 'kniphofia', name: 'Kniphofia', rarity: 'Mythical', seedPrice: 450000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Traveling Merchant', description: 'One of the priciest seeds ever stocked (450,000,000 Sheckles).' },
  { id: 'maple-resin', name: 'Maple Resin', rarity: 'Transcendent', seedPrice: 1500000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Traveling Merchant', description: 'Transcendent 1.5-billion-Sheckle seed, the most expensive documented seed.' },
  { id: 'lavender', name: 'Lavender', rarity: 'Uncommon', seedPrice: 3, currency: 'Honey', robuxPrice: 0, multiHarvest: false, source: 'Honey Shop', description: 'Bought with honey from pollinated crops; single-harvest flower.' },
  { id: 'nectarshade', name: 'Nectarshade', rarity: 'Rare', seedPrice: 5, currency: 'Honey', robuxPrice: 0, multiHarvest: false, source: 'Honey Shop', description: 'Honey-shop rare flower with a quick grow cycle.' },
  { id: 'nectarine', name: 'Nectarine', rarity: 'Mythical', seedPrice: 25, currency: 'Honey', robuxPrice: 0, multiHarvest: true, source: 'Honey Shop', description: 'Mythical honey-currency tree crop.' },
  { id: 'hive-fruit', name: 'Hive Fruit', rarity: 'Divine', seedPrice: 40, currency: 'Honey', robuxPrice: 0, multiHarvest: true, source: 'Honey Shop', description: 'Divine bee-themed crop, the honey shop\'s flagship seed.' },
  { id: 'delphinium', name: 'Delphinium', rarity: 'Rare', seedPrice: 2, currency: 'Summer Coin', robuxPrice: 0, multiHarvest: false, source: 'Summer Harvest Shop', description: 'Summer-event flower bought with Summer Coins.' },
  { id: 'lily-of-the-valley', name: 'Lily of the Valley', rarity: 'Mythical', seedPrice: 12, currency: 'Summer Coin', robuxPrice: 0, multiHarvest: true, source: 'Summer Harvest Shop', description: 'Mythical event flower with repeat harvests.' },
  { id: 'travelers-fruit', name: "Traveler's Fruit", rarity: 'Divine', seedPrice: 32, currency: 'Summer Coin', robuxPrice: 0, multiHarvest: true, source: 'Summer Harvest Shop', description: 'Divine event crop, the top Summer Coin purchase.' },
  { id: 'zenflare', name: 'Zenflare', rarity: 'Rare', seedPrice: 6, currency: 'Chi', robuxPrice: 0, multiHarvest: true, source: 'Zen Shop', description: 'Zen-event flower bought with Chi from tranquil events.' },
  { id: 'sakura-bush', name: 'Sakura Bush', rarity: 'Legendary', seedPrice: 14, currency: 'Chi', robuxPrice: 0, multiHarvest: true, source: 'Zen Shop', description: 'Legendary cherry-blossom bush from the Zen shop.' },
  { id: 'soft-sunshine', name: 'Soft Sunshine', rarity: 'Legendary', seedPrice: 20, currency: 'Chi', robuxPrice: 0, multiHarvest: true, source: 'Zen Shop', description: 'Legendary sun-themed Zen shop flower.' },
  { id: 'spiked-mango', name: 'Spiked Mango', rarity: 'Mythical', seedPrice: 75, currency: 'Chi', robuxPrice: 0, multiHarvest: true, source: 'Zen Shop', description: 'Mythical spiky mango variant, the Zen shop\'s top seed.' },
  { id: 'broccoli', name: 'Broccoli', rarity: 'Legendary', seedPrice: 2, currency: 'Garden Coin', robuxPrice: 0, multiHarvest: true, source: "Sam's Tier 2 (retired)", description: 'Garden Coin seed from the retired Tier 2 shop stock.' },
  { id: 'potato', name: 'Potato', rarity: 'Mythical', seedPrice: 3, currency: 'Garden Coin', robuxPrice: 0, multiHarvest: true, source: "Sam's Tier 2 (retired)", description: 'Garden Coin staple from the retired Tier 2 rotation.' },
  { id: 'brussels-sprout', name: 'Brussels Sprout', rarity: 'Divine', seedPrice: 6, currency: 'Garden Coin', robuxPrice: 0, multiHarvest: true, source: "Sam's Tier 2 (retired)", description: 'Divine Garden Coin crop, no longer obtainable.' },
  { id: 'cocomango', name: 'Cocomango', rarity: 'Prismatic', seedPrice: 7, currency: 'Garden Coin', robuxPrice: 0, multiHarvest: true, source: "Sam's Tier 2 (retired)", description: 'Prismatic hybrid crop from the retired Tier 2 shop.' },
  { id: 'turnip', name: 'Turnip', rarity: 'Common', seedPrice: 10000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Seed Store (retired)', description: 'Fall-event common seed with a surprising 10M price tag.' },
  { id: 'parsley', name: 'Parsley', rarity: 'Uncommon', seedPrice: 20000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Seed Store (retired)', description: 'Retired fall-event herb seed.' },
  { id: 'meyer-lemon', name: 'Meyer Lemon', rarity: 'Rare', seedPrice: 50000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Seed Store (retired)', description: 'Retired fall-event citrus tree seed.' },
  { id: 'carnival-pumpkin', name: 'Carnival Pumpkin', rarity: 'Legendary', seedPrice: 100000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Seed Store (retired)', description: 'Retired fall-event gourd, a 100M Sheckle collectible seed.' },
  { id: 'golden-peach', name: 'Golden Peach', rarity: 'Divine', seedPrice: 900000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Fall Seed Store (retired)', description: 'Retired fall-event Divine tree, 900M Sheckles.' },
  { id: 'bloodred-mushroom', name: 'Bloodred Mushroom', rarity: 'Uncommon', seedPrice: 15, currency: 'Candy Corn', robuxPrice: 0, multiHarvest: true, source: 'Halloween Seed Store', description: 'Halloween-event fungus bought with Candy Corn.' },
  { id: 'jack-o-lantern', name: 'Jack O Lantern', rarity: 'Rare', seedPrice: 24, currency: 'Candy Corn', robuxPrice: 0, multiHarvest: true, source: 'Halloween Seed Store', description: 'Halloween-event gourd with a carved face.' },
  { id: 'ghoul-root', name: 'Ghoul Root', rarity: 'Legendary', seedPrice: 40, currency: 'Candy Corn', robuxPrice: 0, multiHarvest: true, source: 'Halloween Seed Store', description: 'Legendary Halloween root crop.' },
  { id: 'chicken-feed', name: 'Chicken Feed', rarity: 'Mythical', seedPrice: 0, currency: 'Candy Corn', robuxPrice: 459, multiHarvest: true, source: 'Halloween Seed Store (Robux only)', description: 'Mythical Robux-only Halloween novelty seed.' },
  { id: 'seer-vine', name: 'Seer Vine', rarity: 'Divine', seedPrice: 0, currency: 'Candy Corn', robuxPrice: 629, multiHarvest: true, source: 'Halloween Seed Store (Robux only)', description: 'Divine Robux-only Halloween vine.' },
  { id: 'poison-apple', name: 'Poison Apple', rarity: 'Prismatic', seedPrice: 140, currency: 'Candy Corn', robuxPrice: 0, multiHarvest: true, source: 'Halloween Seed Store', description: 'Prismatic Halloween apple, the Candy Corn store\'s top seed.' },
  { id: 'naval-wort', name: 'Naval Wort', rarity: 'Prismatic', seedPrice: 0, currency: 'Sheckles', robuxPrice: 779, multiHarvest: true, source: 'Season 1 Pass', description: 'Prismatic pass-reward seed from Season 1.' },

  // ============ Limited event shops ============
  { id: 'chocolate-carrot', name: 'Chocolate Carrot', rarity: 'Common', seedPrice: 10000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: 'Easter Event', description: 'Easter-event carrot variant, single harvest.' },
  { id: 'red-lollipop', name: 'Red Lollipop', rarity: 'Uncommon', seedPrice: 45000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: 'Easter Event', description: 'Candy crop from the Easter event shop.' },
  { id: 'candy-sunflower', name: 'Candy Sunflower', rarity: 'Rare', seedPrice: 75000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: 'Easter Event', description: 'Sweet Easter take on the sunflower, single harvest.' },
  { id: 'easter-egg', name: 'Easter Egg', rarity: 'Legendary', seedPrice: 500000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Easter Event', description: 'Legendary Easter novelty crop with repeat harvests.' },
  { id: 'candy-blossom', name: 'Candy Blossom', rarity: 'Divine', seedPrice: 10000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Easter Event', description: 'Divine Easter flower, one of the most coveted limited seeds.' },
  { id: 'blood-banana', name: 'Blood Banana', rarity: 'Mythical', seedPrice: 200000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Blood Moon Event', description: 'Blood Moon shop banana with a dark red hue.' },
  { id: 'moon-melon', name: 'Moon Melon', rarity: 'Divine', seedPrice: 500000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Blood Moon Event', description: 'Divine night-themed melon from the Blood Moon shop.' },
  { id: 'celestiberry', name: 'Celestiberry', rarity: 'Mythical', seedPrice: 15000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Twilight Event', description: 'Twilight shop berry with a starry skin.' },
  { id: 'moon-mango', name: 'Moon Mango', rarity: 'Divine', seedPrice: 1000000000, currency: 'Sheckles', robuxPrice: 0, multiHarvest: true, source: 'Twilight Event', description: 'Divine 1-billion-Sheckle twilight mango.' },

  // ============ Seed packs / quest crops ============
  { id: 'sunflower', name: 'Sunflower', rarity: 'Divine', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Flower Seed Pack', description: 'Divine flower-seed-pack crop — the real sunflower of Grow a Garden.' },
  { id: 'moon-blossom', name: 'Moon Blossom', rarity: 'Divine', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Moonlight event pack', description: 'Divine moon-themed flower — the genuine lunar bloom crop.' },
  { id: 'moonflower', name: 'Moonflower', rarity: 'Legendary', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Night Seed Pack', description: 'Legendary night-pack flower that pairs with Moonlit farming.' },
  { id: 'moonglow', name: 'Moonglow', rarity: 'Mythical', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Night Seed Pack', description: 'Mythical glowing night-pack crop.' },
  { id: 'bone-blossom', name: 'Bone Blossom', rarity: 'Transcendent', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Weekly Dino Quests', description: 'Transcendent quest reward, among the highest-tier crops in the game.' },
  { id: 'venus-flytrap', name: 'Venus Flytrap', rarity: 'Divine', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, multiHarvest: false, source: 'Angry Plant Basic Pack', description: 'Divine carnivorous crop from the Angry Plant pack, single harvest.' },
  { id: 'lotus', name: 'Lotus', rarity: 'Divine', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Divine aquatic flower from seed packs.' },
  { id: 'eggplant', name: 'Eggplant', rarity: 'Mythical', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Mythical nightshade vegetable from packs.' },
  { id: 'peach', name: 'Peach', rarity: 'Mythical', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Mythical orchard fruit from packs.' },
  { id: 'starfruit', name: 'Starfruit', rarity: 'Legendary', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Legendary star-shaped fruit from packs.' },
  { id: 'raspberry', name: 'Raspberry', rarity: 'Rare', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Rare berry bush from packs.' },
  { id: 'mint', name: 'Mint', rarity: 'Rare', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Rare herb crop from packs.' },
  { id: 'pear', name: 'Pear', rarity: 'Rare', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Daily Quests / Summer Pack', description: 'Rare orchard fruit from quests and the Summer Pack.' },
  { id: 'rose', name: 'Rose', rarity: 'Uncommon', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Uncommon classic flower from packs.' },
  { id: 'foxglove', name: 'Foxglove', rarity: 'Rare', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Flower Seed Pack', description: 'Rare bell-shaped flower from the flower pack.' },
  { id: 'dandelion', name: 'Dandelion', rarity: 'Rare', seedPrice: 0, currency: 'Sheckles', robuxPrice: 0, source: 'Seed Pack', description: 'Rare meadow flower from packs.' }
];

export const MUTATIONS_DATA: MutationType[] = [
  // ---- Growth mutations (ONE per fruit) ----
  { id: 'mut-gold', name: 'Gold', multiplier: 20, category: 'Growth', triggerCondition: 'Rare growth chance on harvest (replaces the old "Golden" name)', colorClass: 'text-yellow-400' },
  { id: 'mut-rainbow', name: 'Rainbow', multiplier: 50, category: 'Growth', triggerCondition: 'Rare growth chance on harvest — the strongest growth mutation', colorClass: 'text-pink-400' },

  // ---- Environmental mutations (stackable) ----
  { id: 'mut-wet', name: 'Wet', multiplier: 2, category: 'Environmental', triggerCondition: 'Rain weather or watering can', colorClass: 'text-blue-400' },
  { id: 'mut-chilled', name: 'Chilled', multiplier: 2, category: 'Environmental', triggerCondition: 'Frost weather event', colorClass: 'text-cyan-300' },
  { id: 'mut-moonlit', name: 'Moonlit', multiplier: 2, category: 'Environmental', triggerCondition: 'Night + Moonlight event', colorClass: 'text-indigo-400' },
  { id: 'mut-chocolate', name: 'Chocolate', multiplier: 2, category: 'Environmental', triggerCondition: 'Chocolate Rain event', colorClass: 'text-amber-700' },
  { id: 'mut-drenched', name: 'Drenched', multiplier: 2, category: 'Environmental', triggerCondition: 'Rain-type events', colorClass: 'text-sky-400' },
  { id: 'mut-windstruck', name: 'Windstruck', multiplier: 2, category: 'Environmental', triggerCondition: 'High wind event', colorClass: 'text-teal-300' },
  { id: 'mut-sandy', name: 'Sandy', multiplier: 3, category: 'Environmental', triggerCondition: 'Sandstorm event', colorClass: 'text-yellow-600' },
  { id: 'mut-bloodlit', name: 'Bloodlit', multiplier: 4, category: 'Environmental', triggerCondition: 'Blood Moon event', colorClass: 'text-red-500' },
  { id: 'mut-honeyglazed', name: 'HoneyGlazed', multiplier: 5, category: 'Environmental', triggerCondition: 'Honey event', colorClass: 'text-amber-400' },
  { id: 'mut-heatwave', name: 'Heatwave', multiplier: 5, category: 'Environmental', triggerCondition: 'Heatwave event', colorClass: 'text-orange-400' },
  { id: 'mut-fried', name: 'Fried', multiplier: 8, category: 'Environmental', triggerCondition: 'High-heat events', colorClass: 'text-orange-600' },
  { id: 'mut-frozen', name: 'Frozen', multiplier: 10, category: 'Environmental', triggerCondition: 'Wet/Chilled crop frozen by frost conditions', colorClass: 'text-cyan-400' },
  { id: 'mut-roasted', name: 'Roasted', multiplier: 10, category: 'Environmental', triggerCondition: 'Roasting event', colorClass: 'text-amber-600' },
  { id: 'mut-amber', name: 'Amber', multiplier: 10, category: 'Environmental', triggerCondition: 'Amber event', colorClass: 'text-yellow-700' },
  { id: 'mut-tempestuous', name: 'Tempestuous', multiplier: 12, category: 'Environmental', triggerCondition: 'Storm event', colorClass: 'text-slate-300' },
  { id: 'mut-riptide', name: 'Riptide', multiplier: 15, category: 'Environmental', triggerCondition: 'Riptide event', colorClass: 'text-blue-500' },
  { id: 'mut-corrupt', name: 'Corrupt', multiplier: 18, category: 'Environmental', triggerCondition: 'Corruption event', colorClass: 'text-purple-500' },
  { id: 'mut-darkened', name: 'Darkened', multiplier: 20, category: 'Environmental', triggerCondition: 'Darkness event', colorClass: 'text-gray-400' },
  { id: 'mut-lanternlit', name: 'Lanternlit', multiplier: 20, category: 'Environmental', triggerCondition: 'Lantern Festival event', colorClass: 'text-orange-300' },
  { id: 'mut-molten', name: 'Molten', multiplier: 25, category: 'Environmental', triggerCondition: 'Lava-type event', colorClass: 'text-red-400' },
  { id: 'mut-cooked', name: 'Cooked', multiplier: 25, category: 'Environmental', triggerCondition: 'Cooking/heat event', colorClass: 'text-amber-500' },
  { id: 'mut-zombified', name: 'Zombified', multiplier: 25, category: 'Environmental', triggerCondition: 'Zombie event', colorClass: 'text-lime-600' },
  { id: 'mut-infected', name: 'Infected', multiplier: 25, category: 'Environmental', triggerCondition: 'Infection event', colorClass: 'text-green-600' },
  { id: 'mut-acidic', name: 'Acidic', multiplier: 25, category: 'Environmental', triggerCondition: 'Acid rain event', colorClass: 'text-lime-400' },
  { id: 'mut-static', name: 'Static', multiplier: 35, category: 'Environmental', triggerCondition: 'Static electricity event', colorClass: 'text-yellow-300' },
  { id: 'mut-fossilized', name: 'Fossilized', multiplier: 40, category: 'Environmental', triggerCondition: 'Fossil event', colorClass: 'text-stone-400' },
  { id: 'mut-ancientamber', name: 'AncientAmber', multiplier: 50, category: 'Environmental', triggerCondition: 'Ancient amber event', colorClass: 'text-amber-800' },
  { id: 'mut-sundried', name: 'Sundried', multiplier: 85, category: 'Environmental', triggerCondition: 'Sun-scorch event', colorClass: 'text-yellow-500' },
  { id: 'mut-aurora', name: 'Aurora', multiplier: 90, category: 'Environmental', triggerCondition: 'Aurora event', colorClass: 'text-fuchsia-400' },
  { id: 'mut-paradisal', name: 'Paradisal', multiplier: 100, category: 'Environmental', triggerCondition: 'Paradise event', colorClass: 'text-emerald-400' },
  { id: 'mut-alienlike', name: 'Alienlike', multiplier: 100, category: 'Environmental', triggerCondition: 'Alien event', colorClass: 'text-green-400' },
  { id: 'mut-shocked', name: 'Shocked', multiplier: 100, category: 'Environmental', triggerCondition: 'Thunderstorm lightning strike', colorClass: 'text-yellow-200' },
  { id: 'mut-celestial', name: 'Celestial', multiplier: 120, category: 'Environmental', triggerCondition: 'Meteor shower event', colorClass: 'text-violet-400' },
  { id: 'mut-galactic', name: 'Galactic', multiplier: 120, category: 'Environmental', triggerCondition: 'Galaxy event', colorClass: 'text-purple-400' },
  { id: 'mut-disco', name: 'Disco', multiplier: 125, category: 'Environmental', triggerCondition: 'Disco event', colorClass: 'text-fuchsia-500' },
  { id: 'mut-voidtouched', name: 'Voidtouched', multiplier: 135, category: 'Environmental', triggerCondition: 'Void event', colorClass: 'text-slate-500' },
  { id: 'mut-dawnbound', name: 'Dawnbound', multiplier: 150, category: 'Environmental', triggerCondition: 'Sunrise event — the highest mutation multiplier', colorClass: 'text-orange-200' }
];
