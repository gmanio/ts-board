import { RouterModule } from '@angular/router';

export const RootRouterModule = RouterModule.forRoot(
  [
    { path: 'edit', loadChildren: './containers/edit/edit.module#EditModule' },
    { path: 'result', loadChildren: './containers/result/result.module#ResultModule' }
  ]
);