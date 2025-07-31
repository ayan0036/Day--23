 import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {
  studentName: string = '';
}
