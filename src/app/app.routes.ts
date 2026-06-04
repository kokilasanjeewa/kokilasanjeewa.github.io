import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Navbar } from './pages/navbar/navbar';

export const routes: Routes = [
  { path: '', component: Navbar },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
];
