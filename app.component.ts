 import { Component } from '@angular/core';
import { TwowayBindingComponent } from './components/twoway-binding/twoway-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TwowayBindingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webteam-angular-app';
}
