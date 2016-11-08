import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing,appRoutingProviders } from './app.routing';
import { TodosModule} from './todo/todos.module';
import { SecurityModule} from './security/security.module';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/login';
import {HighlightDirective} from './directives/highlight.directive';
import {ExponentialStrengthPipe} from './pipes/strength.pipe';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      routing,
      TodosModule,
      SecurityModule
    ],
    declarations: [
      AppComponent,
      LoginComponent,
      HighlightDirective,
      ExponentialStrengthPipe
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}