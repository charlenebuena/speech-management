import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { NewSpeechRoutingModule } from './new-speech-routing.module';

import { NewSpeechComponent } from './pages/main/new-speech.component';
import { ModalComponent } from '../shared/components/modal/modal.component';

@NgModule({
    declarations: [
        NewSpeechComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        NewSpeechRoutingModule,
        SharedModule
    ],
    exports: [
        NewSpeechComponent
    ], 
    entryComponents: [
        ModalComponent
    ]
})
export class NewSpeechModule { }
