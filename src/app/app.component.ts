import {Component} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public name: string = 'Angular';
}
