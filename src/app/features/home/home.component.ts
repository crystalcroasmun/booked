import { Component } from '@angular/core';
import { TestButtonComponent } from '../../shared/components/test-button/test-button.component';

@Component({
  selector: 'app-home',
  imports: [TestButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}