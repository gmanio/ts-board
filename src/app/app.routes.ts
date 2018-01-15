import { RouterModule } from '@angular/router';

export const RootRouterModule = RouterModule.forRoot(
  [
    { path: '', redirectTo: 'edit', pathMatch: 'full' },
    { path: 'edit', loadChildren: './containers/edit/edit.module#EditModule' },
    { path: 'edit/:id', loadChildren: './containers/edit/edit.module#EditModule' },
    { path: 'result/:id', loadChildren: './containers/result/result.module#ResultModule' }
  ]
);
