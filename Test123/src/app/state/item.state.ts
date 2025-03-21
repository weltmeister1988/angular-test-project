import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { Item } from '../models/item.model';
import { LoadItems, LoadItemsSuccess } from './item.actions';
import { ItemDataService } from '../services/item-data.service';
import { ItemMapper } from '../mappers/item.mapper';
import { tap } from 'rxjs/operators';

export interface ItemStateModel {
  items: Item[];
}

@State<ItemStateModel>({
  name: 'item',
  defaults: {
    items: [],
  },
})
@Injectable()
export class ItemState {
  constructor(private dataService: ItemDataService) {}

  @Action(LoadItems)
  loadItems(ctx: StateContext<ItemStateModel>) {
    return this.dataService.fetchItems().pipe(
      tap((dtos) => {
        const models = dtos.map(ItemMapper.toModel);
        ctx.dispatch(new LoadItemsSuccess(models));
      })
    );
  }

  @Action(LoadItemsSuccess)
  loadItemsSuccess(ctx: StateContext<ItemStateModel>, action: LoadItemsSuccess) {
    ctx.patchState({
      items: action.items,
    });
  }
}
