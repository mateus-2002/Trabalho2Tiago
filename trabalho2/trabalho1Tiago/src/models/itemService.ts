import { Item } from './item';

export class ItemService {
  private items: Item[] = [
    { id: '1', title: 'Item Exemplo 1' },
    { id: '2', title: 'Item Exemplo 2' },
  ];

  getAllItems(): Item[] {
    return this.items;
  }

  addItem(title: string): Item {
    const newItem: Item = {
      id: Date.now().toString(),
      title: title.trim(),
    };
    
    this.items = [...this.items, newItem];
    return newItem;
  }

  updateItem(id: string, title: string): Item | null {
    const index = this.items.findIndex(item => item.id === id);
    
    if (index === -1) return null;
    
    this.items[index] = { ...this.items[index], title: title.trim() };
    return this.items[index];
  }

  deleteItem(id: string): boolean {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return this.items.length !== initialLength;
  }

  getItemById(id: string): Item | undefined {
    return this.items.find(item => item.id === id);
  }
}