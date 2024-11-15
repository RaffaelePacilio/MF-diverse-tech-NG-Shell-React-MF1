import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {YourComponent} from "./remotes/your.component";

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  /*{
    path:'mfe1',
    loadChildren: () => import('mfe1/Mfe1').then((m) => m.AppModule)
  }*/
  /* {
    path:'mfe1-module',
    loadChildren: () => import('mfe1/Module').then(m => m.OneModule)
  }, */
  {
    path: 'mfe1',
    component: YourComponent // Il componente che contiene il contenitore per l'app React
  },
  /*{
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5173/dist/assets/remoteEntry.js',
        exposedModule: './App',
      }).then((m) => m.App)
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
