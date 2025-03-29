import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ZhamriComponent} from './zhamri/zhamri.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZhamriComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyClass-Angular';
}
