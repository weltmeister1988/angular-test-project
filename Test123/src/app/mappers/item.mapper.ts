import { ItemDto } from '../dtos/item.dto';
import { Item } from '../models/item.model';

export class ItemMapper {
  static toModel(dto: ItemDto): Item {
    return {
      id: dto.id,
      title: dto.title,
      body: dto.body,
    };
  }

  static toDto(model: Item): ItemDto {
    return {
      userId: 0,
      id: model.id,
      title: model.title,
      body: model.body,
    };
  }
}
