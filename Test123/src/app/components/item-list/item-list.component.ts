import { Component, inject, OnInit } from '@angular/core';
import { ItemStoreFacadeService } from '../../state/item-store-facade.service';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit {
  constructor(private readonly storeFacade: ItemStoreFacadeService) {
  }

  ngOnInit(): void {
    this.storeFacade.loadItems();
  }

  get items() {
    return this.storeFacade.items;
  }

  get itemCount() {
    return this.storeFacade.itemCount;
  }

  loadItems() {
    this.storeFacade.loadItems();
  }
}
