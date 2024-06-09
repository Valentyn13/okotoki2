import { StorageKey } from "../constants/constants";

export const parseStorage = (key: StorageKey) => {
    const storageItems = localStorage.getItem(key);
    if (storageItems) {
        return JSON.parse(storageItems) as string[];
    }
    return [];
}