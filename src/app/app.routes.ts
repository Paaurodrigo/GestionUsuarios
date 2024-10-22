import { Routes } from '@angular/router';

import {UsuarioAdminEditRoutedComponent} from './component/usuario/admin/edit/routed/usuario.admin.edit.routed/usuario.admin.edit.routed.component';
import { UsuarioAdminPlistRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.plist.routed/usuario.admin.plist.routed.component';
import { UsuarioAdminRemoveRoutedComponent } from './component/usuario/admin/remove/routed/usuario.admin.remove.routed/usuario.admin.remove.routed.component';
import { UsuarioAdminViewRoutedComponent } from './component/usuario/admin/view/routed/usuario.admin.view.routed/usuario.admin.view.routed.component';
import { UsuarioAdminCreateRoutedComponent } from './component/usuario/admin/create/routed/usuario.admin.create.routed/usuario.admin.create.routed.component';
export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminPlistRoutedComponent },
  { path: 'admin/usuario/remove/:id', component: UsuarioAdminRemoveRoutedComponent },
  { path: 'admin/usuario/edit/:id', component: UsuarioAdminEditRoutedComponent },
  { path: 'admin/usuario/view/:id', component: UsuarioAdminViewRoutedComponent },
  { path: 'admin/usuario/create', component: UsuarioAdminCreateRoutedComponent },
];
