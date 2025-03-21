import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemListComponent } from './item-list.component';
import { ItemStoreFacadeService } from '../../state/item-store-facade.service';
import { Item } from '../../models/item.model';
import { signal } from '@angular/core';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let mockFacade: jest.Mocked<ItemStoreFacadeService>;

  const mockItems: Item[] = [
    { id: 1, title: 'Test 1', body: 'Body 1' },
    { id: 2, title: 'Test 2', body: 'Body 2' }
  ];

  beforeEach(() => {
    mockFacade = {
      loadItems: jest.fn(),
      items: signal(mockItems),
      itemCount: signal(mockItems.length)
    } as unknown as jest.Mocked<ItemStoreFacadeService>;

    TestBed.configureTestingModule({
      imports: [ItemListComponent],
      providers: [
        { provide: ItemStoreFacadeService, useValue: mockFacade }
      ]
    });

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should call loadItems on init', () => {
    expect(mockFacade.loadItems).toHaveBeenCalledTimes(1);
  });

  test('should expose items from facade', () => {
    expect(component.items()).toEqual(mockItems);
  });

  test('should expose itemCount from facade', () => {
    expect(component.itemCount()).toEqual(2);
  });

  test('should call loadItems when reload is triggered manually', () => {
    component.loadItems();
    expect(mockFacade.loadItems).toHaveBeenCalledTimes(2);
  });
});
