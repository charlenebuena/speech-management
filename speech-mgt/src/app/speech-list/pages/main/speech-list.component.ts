import { Component, OnInit } from '@angular/core';
import { Speech } from 'src/app/shared/models/speech';
import { Subscription } from 'rxjs';

import { SpeechService } from '../../../shared/services/speech.service';


@Component({
    selector: 'app-speech-list',
    templateUrl: './speech-list.component.html',
    styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit{
    speeches: Speech[];
    subscriber: Array<Subscription> = [];

    constructor(
        private speechService: SpeechService
    ) {}

    ngOnInit() {
        this.subscriber.push(this.speechService.onRefresh().subscribe(
            resp => {
                alert(resp);
                this.getAllSpeeches();
            }
        ));
        this.getAllSpeeches();
    }

    deleteAll() {
        this.speechService.deleteAll();
    }

    getAllSpeeches() {
        this.speeches = this.speechService.getAllSpeeches();
        console.log(this.speeches);
    }
}
