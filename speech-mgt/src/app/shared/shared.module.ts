import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    NgbModule,
    NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SpeechFormComponent } from './components/speech-form/speech-form.component';

@NgModule({
    declarations: [
        NavbarComponent,
        SpeechFormComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        NgbCollapseModule
    ],
    exports: [
        NavbarComponent,
        SpeechFormComponent
    ]
})
export class SharedModule { }
