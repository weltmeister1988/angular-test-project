import { Injectable, computed, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { ItemSelectors } from './item.selectors';
import { LoadItems } from './item.actions';

@Injectable({ providedIn: 'root' })
export class ItemStoreFacadeService {
  constructor(private readonly store: Store) {
  }

  get items() {
    return this.store.selectSignal(ItemSelectors.items);
  }

  get itemCount() {
    return computed(() => this.items().length);
  }

  loadItems() {
    return this.store.dispatch(new LoadItems());
  }
}
