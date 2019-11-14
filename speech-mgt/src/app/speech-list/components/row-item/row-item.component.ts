import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpeechService } from '../../../shared/services/speech.service';
import { Speech } from 'src/app/shared/models/speech';

@Component({
    selector: 'app-row-item',
    templateUrl: './row-item.component.html',
    styleUrls: ['./row-item.component.scss']
})
export class RowItemComponent implements OnInit {
    isCollapsed = true;
    subscriber: Array<Subscription> = [];

    @Input() speech: Speech;

    constructor(
        private speechService: SpeechService
    ) {}

    ngOnInit() {
    }

    saveEdit(values: Speech, id: number) {
        let data = {
            _id: id,
            speechTitle: values.speechTitle,
            author: values.author,
            dateCreated: values.dateCreated,
            speechContent: values.speechContent
        }

        this.speechService.editSpeech(data, id);
        console.log(data);
        console.log(id);
    }

    deleteSpeech(id) {
        if (confirm('Are you sure you want to delete this?')) {
            this.speechService.deleteSpeech(id);
        }
    }
}
