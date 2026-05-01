export type ProfileUser = {
  UserName: string;
  maxPriceItem: {
    nameWeapon: string;
    nameSkin: string;
    price: number;
    linkImg: string;
  };
  inventory: {
    _id: string;
    nameWeapon: string;
    nameSkin: string;
    color: string;
    glowColor: string;
    glowRgb: string;
    linkImg: string;
    price: number;
    createdAt: string;
  }[];
  hasMore: boolean;
};

export type MoreInventory = {
  inventory: {
    _id: string;
    nameWeapon: string;
    nameSkin: string;
    color: string;
    glowColor: string;
    glowRgb: string;
    linkImg: string;
    price: number;
    createdAt: string;
  }[];
  hasMore: boolean;
};
export type DataWinIndex = {
  _id: string;
  userId: string;
  caseId: string;
  winIndex: string;
  winItem: {
    _id: string;
    nameWeapon: string;
    nameSkin: string;
    price: number;
    rarity: string;
    color: string;
    glowColor: string;
    glowRgb: string;
    linkImg: string;
    createdAt: string;
    updatedAt: string;
  };
  casesData: {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    items: string[];
    createdAt: string;
    updatedAt: string;
  };
  itemsOrder: string[];
  isSpinned: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
}[];
