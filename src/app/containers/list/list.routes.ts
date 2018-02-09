import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

export const ListRouter = RouterModule.forChild([
  { path: '', component: ListComponent }
]);
