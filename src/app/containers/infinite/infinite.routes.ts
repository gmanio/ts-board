import { RouterModule } from '@angular/router';
import { InfiniteComponent } from './infinite.component';

export const InfiniteRouter = RouterModule.forChild([
  { path: '', component: InfiniteComponent }
]);
