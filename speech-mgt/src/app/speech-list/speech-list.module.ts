import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { SpeechListRoutingModule } from './speech-list-routing.module';

import { SpeechListComponent } from './pages/main/speech-list.component';
import { RowItemComponent } from './components/row-item/row-item.component';

@NgModule({
    declarations: [
        SpeechListComponent,
        RowItemComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        SpeechListRoutingModule,
        SharedModule
    ],
    exports: [
        SpeechListComponent
    ]
})
export class SpeechListModule { }
