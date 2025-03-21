import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ItemState } from './item.state';
import { LoadItems } from './item.actions';
import { Item } from '../models/item.model';
import { ItemDto } from '../dtos/item.dto';
import { of } from 'rxjs';
import { ItemDataService } from '../services/item-data.service';

describe('ItemState', () => {
  let store: Store;

  const mockDtos: ItemDto[] = [
    { userId: 1, id: 1, title: 'Mock Title', body: 'Mock Body' }
  ];

  const expectedModels: Item[] = [
    { id: 1, title: 'Mock Title', body: 'Mock Body' }
  ];

  const fetchItemsMock = jest.fn().mockReturnValue(of(mockDtos));

  beforeEach(() => {
    fetchItemsMock.mockClear();

    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ItemState])],
      providers: [
        { provide: ItemDataService, useValue: { fetchItems: fetchItemsMock } }
      ]
    });

    store = TestBed.inject(Store);
  });

  test('should call fetchItems and patch the state with mapped items', () => {
    store.dispatch(new LoadItems());

    expect(fetchItemsMock).toHaveBeenCalledTimes(1);

    const items = store.selectSnapshot((state) => state.item.items);
    expect(items).toEqual(expectedModels);
  });
});
