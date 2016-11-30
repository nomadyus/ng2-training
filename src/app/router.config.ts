import { RouterModule, Routes} from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { PostContainerComponent } from './post-container/post-container.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: 'posts', component: HomeContainerComponent},
  { path: 'posts/:id', component: PostContainerComponent}
]

const routing = RouterModule.forRoot(routes);

export { routing }