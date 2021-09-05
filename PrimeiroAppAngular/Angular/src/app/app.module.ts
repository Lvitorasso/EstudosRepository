import { GitHubService } from './Service/github-followers.service';
import { AppErrorHandler } from './Compartilhado/Erros/app.error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './Service/post.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoresService } from './Paginas/autores/autores.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoresComponent } from './Paginas/autores/autores.component';
import { ContatoFormComponent } from './Paginas/contato-form/contato-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './Paginas/login-form/login-form.component';
import { LikeComponent } from './Paginas/like/like.component';
import { CamelCasePageComponent } from './Paginas/camel-case-page/camel-case-page.component';
import { CamelCasePipe } from './Pipes/Camel-Case/camel-case.pipe';
import { PanelComponent } from './Paginas/panel/panel.component';
import { LikeCoracaoComponent } from './Paginas/like-coracao/like-coracao.component';
import { CursosComponent } from './Paginas/cursos/cursos.component';
import { InputFormatDirective } from './Diretivas/input-format.directive';
import { ComponenteZippyComponent } from './Paginas/componente-zippy/componente-zippy.component';
import { CadastroCursosComponent } from './Paginas/cadastro-cursos/cadastro-cursos.component';
import { SignupFormComponent } from './Paginas/signup-form/signup-form.component';
import { FormArrayClassComponent } from './Paginas/form-array-class/form-array-class.component';
import { TrocaSenhaFormComponent } from './Paginas/troca-senha-form/troca-senha-form.component';
import { PostsComponent } from './Paginas/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './Paginas/github-followers/github-followers.component';
import { SafePipe } from './Pipes/SafeByPass/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    ContatoFormComponent,
    LoginFormComponent,
    LikeComponent,
    CamelCasePageComponent,
    CamelCasePipe,
    PanelComponent,
    LikeCoracaoComponent,
    CursosComponent,
    InputFormatDirective,
    ComponenteZippyComponent,
    CadastroCursosComponent,
    SignupFormComponent,
    FormArrayClassComponent,
    TrocaSenhaFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    SafePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AutoresService,
     PostService,
     GitHubService,
    {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
