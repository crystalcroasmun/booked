import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BookshelfComponent } from './features/bookshelf/bookshelf.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookshelf', component: BookshelfComponent },
  { path: '**', redirectTo: '' },
];
