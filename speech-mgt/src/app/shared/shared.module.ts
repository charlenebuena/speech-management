import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    NgbModule,
    NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        NgbCollapseModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class SharedModule { }
