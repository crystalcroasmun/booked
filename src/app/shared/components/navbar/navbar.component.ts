import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
// all fontawesome icons can be found here https://fontawesome.com/search

@Component({
  selector: 'navbar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  homeIcon = faHome;
  bookIcon = faBook;
}
