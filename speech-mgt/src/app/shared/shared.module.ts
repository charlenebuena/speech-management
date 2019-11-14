import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    NgbModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SpeechFormComponent } from './components/speech-form/speech-form.component';
import { ModalComponent } from './components/modal/modal.component';

import { SpeechService } from './services/speech.service';

@NgModule({
    declarations: [
        NavbarComponent,
        SpeechFormComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        NgbCollapseModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModalModule,
        NgbDatepickerModule
    ],
    exports: [
        NavbarComponent,
        SpeechFormComponent,
        ModalComponent
    ],
    providers: [
        SpeechService
    ]
})
export class SharedModule { }
