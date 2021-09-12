import { GitHubService } from './Service/github-followers.service';
import { AppErrorHandler } from './Compartilhado/Erros/app.error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './Service/post.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoresService } from './Paginas/autores/autores.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelCasePipe } from './Pipes/Camel-Case/camel-case.pipe';
import { PanelComponent } from './Paginas/panel/panel.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './Pipes/SafeByPass/safe.pipe';
import { NavBarComponent } from './Paginas/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipe,
    PanelComponent,
    SafePipe,
    routingComponents,
    NavBarComponent
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
