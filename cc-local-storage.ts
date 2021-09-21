
import { CcLocalStorageKey } from "./cc-local-storage-key";

export abstract class CcLocalStorage {
  public static SetItem(key: CcLocalStorageKey, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static GetItem<ItemType>(key: CcLocalStorageKey): ItemType {
    const lsi: any = localStorage.getItem(key.toString());
    const item: ItemType = JSON.parse(lsi);
    return item;
  }

  public static RemoveItem<ItemType>(key: CcLocalStorageKey): void {
    localStorage.removeItem(key);
  }
}
