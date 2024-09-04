import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation: ViewEncapsulation.None // This will disable encapsulation and allow parent styles to affect child.

})
export class ChildComponent {

}
