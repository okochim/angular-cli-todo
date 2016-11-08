import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SecurityComponent} from './security';
import {securityRouting} from './security.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      securityRouting
    ],
    declarations: [
      SecurityComponent
    ],
})
export class SecurityModule { }