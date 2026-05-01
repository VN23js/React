export type Status = 'idle' | 'loading' | 'successed' | 'error';
export type TypeNewSkin = {};
export type Rarity = {
  color: string;
  name: string;
};

export type WeaponForm = {
  Price: number;
  URL: string;
  Weapon: string;
  WeaponNameSkin: string;
  rarity: Rarity;
};
