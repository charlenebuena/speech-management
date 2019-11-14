import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SpeechService } from '../../../shared/services/speech.service';
import { Speech } from '../../../shared/models/speech';




@Component({
    selector: 'app-new-speech',
    templateUrl: './new-speech.component.html',
    styleUrls: ['./new-speech.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})
export class NewSpeechComponent implements OnInit {
    speech: Speech;
    speeches: Speech[];

    subscriber: Array<Subscription> = [];


    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private speechService: SpeechService
    ) {
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit() {
        this.getAllSpeeches();
        this.subscriber.push(this.speechService.onAddNew().subscribe(
            resp => {
                alert(resp);
                this.getAllSpeeches();
                this.speech = {
                    _id: this.speeches[this.speeches.length-1]._id + 1,
                    speechTitle: '',
                    author: '',
                    dateCreated: '',
                    speechContent: ''
                };
                window.location.reload();
            }
        ));

        this.speech = {
            _id: this.speeches.length > 0 ? this.speeches[this.speeches.length-1]._id + 1 : 1,
            speechTitle: '',
            author: '',
            dateCreated: '',
            speechContent: ''
        };
    }

    getAllSpeeches() {
        this.speeches = this.speechService.getAllSpeeches();
    }

    saveSpeech(values, content) {
        if (values) {
            var data: Speech = {
                _id: this.speech._id,
                speechTitle: values.speechTitle,
                author: values.author,
                dateCreated: values.dateCreated,
                speechContent: values.speechContent
            }

            this.speechService.addNewSpeech(data);
        } else {
            this.open(content);
        }
    }

    open(content) {
        this.modalService.open(content);
    }



}
