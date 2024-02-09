import { Component, OnInit } from '@angular/core';
import { Item } from '../models/interfaces/item';
import { ItemListService } from '../service/item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  selectedItem!: Item | false;
  constructor(private itemService: ItemListService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItemList().subscribe((data) => {
      this.items = data;
    });
  }

  onViewDetail(item: Item) {
    this.selectedItem = item;
  }

  closeDetail() {
    /* va a cerrar la ventana de detalle y parar que item sea null, hacemos que sea undefined */
    this.selectedItem = false;
  }
}
