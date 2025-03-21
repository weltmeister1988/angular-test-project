import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';

@Component({
  imports: [RouterModule, ItemListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Test123';
}
