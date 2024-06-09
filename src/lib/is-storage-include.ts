import { StorageKey } from "../constants/constants";

export const isStorageInclude = (item: string, key: StorageKey) => {
    const storageItems = localStorage.getItem(key);
    if (storageItems) {
        const parsedStorage = JSON.parse(storageItems) as string[];
        parsedStorage.includes(item);
        if (parsedStorage.includes(item)) {
            return item;
        }
    }
    return '';
}