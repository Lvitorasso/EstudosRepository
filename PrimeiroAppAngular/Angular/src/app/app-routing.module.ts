import { ArchiveComponent } from './Paginas/archive/archive.component';
import { ComponenteZippyComponent } from './Paginas/componente-zippy/componente-zippy.component';
import { CadastroCursosComponent } from './Paginas/cadastro-cursos/cadastro-cursos.component';
import { AutoresComponent } from './Paginas/autores/autores.component';
import { GithubFollowersComponent } from './Paginas/github-followers/github-followers.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeCoracaoComponent } from './Paginas/like-coracao/like-coracao.component';
import { CursosComponent } from './Paginas/cursos/cursos.component';
import { InputFormatDirective } from './Diretivas/input-format.directive';
import { FormArrayClassComponent } from './Paginas/form-array-class/form-array-class.component';
import { PostsComponent } from './Paginas/posts/posts.component';
import { SignupFormComponent } from './Paginas/signup-form/signup-form.component';
import { TrocaSenhaFormComponent } from './Paginas/troca-senha-form/troca-senha-form.component';
import { CamelCasePageComponent } from './Paginas/camel-case-page/camel-case-page.component';
import { ContatoFormComponent } from './Paginas/contato-form/contato-form.component';
import { LikeComponent } from './Paginas/like/like.component';
import { LoginFormComponent } from './Paginas/login-form/login-form.component';
import { NotFoundComponent } from './Paginas/not-found/not-found.component';
import { GithubProfileComponent } from './Paginas/github-profile/github-profile.component';
import { BlogArchivesComponent } from './Paginas/blog-archives/blog-archives.component';
import { UserDetailsComponent } from './Testes/Testes integrados/3-user-details/user-details.component';
import { UsersComponent } from './Testes/Testes integrados/users/users.component';
import { TodosComponent } from './Testes/Testes unitarios/06-services/todos.component';
import { HomeComponent } from './Testes/Testes integrados/home/home.component';

const routes: Routes = [  
  { 
    path: 'users/:id', 
    component: UserDetailsComponent 
  },
  { 
    path: 'users', 
    component: UsersComponent 
  },
  { 
    path: 'todos', 
    component: TodosComponent 
  },
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'blog-archives', 
    component: BlogArchivesComponent
  },
  {
    path: 'followers/:id/:username', 
    component: GithubProfileComponent
  },
  {
    path: 'followers', 
    component: GithubFollowersComponent
  },
  {
    path: 'autores', 
    component: AutoresComponent
  },
  {
    path: 'cadastro-cursos', 
    component: CadastroCursosComponent
  },
  {
    path: 'archive/:ano/:mes', 
    component: ArchiveComponent
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GithubFollowersComponent, AutoresComponent, CadastroCursosComponent, ComponenteZippyComponent, LikeCoracaoComponent,
CursosComponent, InputFormatDirective, SignupFormComponent, FormArrayClassComponent, TrocaSenhaFormComponent, PostsComponent, ContatoFormComponent,
LoginFormComponent, LikeComponent, CamelCasePageComponent, GithubProfileComponent, ArchiveComponent, BlogArchivesComponent]