import { Route } from '@angular/router';
import { CrearUsuarioComponent } from './subpaginas/crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './subpaginas/lista-usuarios/lista-usuarios.component';

export const MOD_USUARIO_USUARIO_ROUTES: Route[] = [
  {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent,
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
  },
];
