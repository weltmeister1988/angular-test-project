import { ItemMapper } from './item.mapper';
import { ItemDto } from '../dtos/item.dto';
import { Item } from '../models/item.model';

describe('ItemMapper', () => {
  const dto: ItemDto = {
    userId: 99,
    id: 1,
    title: 'Test Title',
    body: 'Test Body'
  };

  const model: Item = {
    id: 1,
    title: 'Test Title',
    body: 'Test Body'
  };

  test('should map dto to model correctly', () => {
    const result = ItemMapper.toModel(dto);
    expect(result).toEqual(model);
  });

  test('should map model to dto correctly', () => {
    const result = ItemMapper.toDto(model);
    expect(result).toEqual({
      userId: 0,
      id: model.id,
      title: model.title,
      body: model.body
    });
  });
});
