import { RouterModule } from '@angular/router';

export const RootRouterModule = RouterModule.forRoot(
  [
    { path: 'edit', loadChildren: './containers/edit/edit.module#EditModule' },
    { path: 'edit/:id', loadChildren: './containers/edit/edit.module#EditModule' },
    { path: 'result/:id', loadChildren: './containers/result/result.module#ResultModule' }
  ]
);
