import { Selector } from '@ngxs/store';
import { ItemState, ItemStateModel } from './item.state';
import { Item } from '../models/item.model';

export class ItemSelectors {
  @Selector([ItemState])
  static items(state: ItemStateModel): Item[] {
    return state.items;
  }
}
