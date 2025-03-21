import { ItemSelectors } from './item.selectors';
import { ItemStateModel } from './item.state';
import { Item } from '../models/item.model';

describe('ItemSelectors', () => {
  test('items selector should return items from state', () => {
    const mockItems: Item[] = [
      { id: 1, title: 'Test 1', body: 'Body 1' },
      { id: 2, title: 'Test 2', body: 'Body 2' }
    ];

    const mockState: ItemStateModel = {
      items: mockItems
    };

    const result = ItemSelectors.items(mockState);

    expect(result).toEqual(mockItems);
  });
});
