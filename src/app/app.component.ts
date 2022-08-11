import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping Cart';
  showFiller = false;
  faCartShopping = faCartShopping;
}
