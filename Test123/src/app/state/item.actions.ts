import { Item } from '../models/item.model';

export class LoadItems {
  static readonly type = '[Item] Load Items';
}

export class LoadItemsSuccess {
  static readonly type = '[Item] Load Items Success';
  constructor(public items: Item[]) {}
}