import { StorageKey } from "../constants/constants";

export const localStorageToggler = (item: string, key: StorageKey) => {
    const storageItems = localStorage.getItem(key);
    if (storageItems) {
        const parsedStorage = JSON.parse(storageItems) as string[];

        const updatedStorage = parsedStorage.includes(item)
            ? parsedStorage.filter((i: string) => i !== item)
            : [...parsedStorage, item];
        localStorage.setItem(key, JSON.stringify(updatedStorage));
    } else {
        localStorage.setItem(key, JSON.stringify([item]));
    }
};
