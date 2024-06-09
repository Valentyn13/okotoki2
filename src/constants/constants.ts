export type ValueOf<T> = T[keyof T];

export enum IconName {
    SEARCH,
    STAR_SOLID,
    STAR_REGULAR,
}

export type coinData = {
    isSelected: boolean;
    coin: string;
  };


export enum StorageKey {
    TOKEN = 'token',
    SELECTED_COINS = 'selectedCoins',
}
