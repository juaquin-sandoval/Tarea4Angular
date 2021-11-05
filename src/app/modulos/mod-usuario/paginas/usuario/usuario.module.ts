import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { ListaUsuariosComponent } from './subpaginas/lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './subpaginas/crear-usuario/crear-usuario.component';
import { RouterModule } from '@angular/router';
import { MOD_USUARIO_USUARIO_ROUTES } from './usuario.routing';

@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuariosComponent,
    CrearUsuarioComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(MOD_USUARIO_USUARIO_ROUTES)],
})
export class UsuarioModule {}
