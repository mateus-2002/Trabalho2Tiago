import { Alert } from 'react-native';
import { Item } from '../models/item';
import { ItemService } from '../models/itemService';

export class ItemController {
  private itemService: ItemService;

  constructor() {
    this.itemService = new ItemService();
  }

  getAllItems(): Item[] {
    return this.itemService.getAllItems();
  }

  addItem(title: string): boolean {
    if (!title.trim()) {
      Alert.alert('Erro', 'Digite um título');
      return false;
    }

    this.itemService.addItem(title);
    return true;
  }

  updateItem(id: string, title: string): boolean {
    if (!title.trim()) {
      Alert.alert('Erro', 'Digite um título');
      return false;
    }

    const result = this.itemService.updateItem(id, title);
    return result !== null;
  }

  deleteItem(id: string): boolean {
    return this.itemService.deleteItem(id);
  }

  getItemById(id: string): Item | undefined {
    return this.itemService.getItemById(id);
  }
}