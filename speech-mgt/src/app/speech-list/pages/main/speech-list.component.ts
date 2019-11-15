import { Component, OnInit } from '@angular/core';
import { Speech } from 'src/app/shared/models/speech';
import { Subscription } from 'rxjs';
import { Params, ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { SpeechService } from '../../../shared/services/speech.service';



@Component({
    selector: 'app-speech-list',
    templateUrl: './speech-list.component.html',
    styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit{
    searchedWord = '';
    speeches: Speech[];
    subscriber: Array<Subscription> = [];

    constructor(
        private speechService: SpeechService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => { this.queryParamsHandler(params); });

        this.subscriber.push(this.speechService.onRefresh().subscribe(
            resp => {
                alert(resp);
                this.getAllSpeeches();
            }
        ));
        this.getAllSpeeches();
    }

    deleteAll() {
        if (confirm('Are you sure you want to delete all speeches?')) {
            this.speechService.deleteAll();
        }
    }

    getAllSpeeches(search?:string) {
        search = search ? search : '';
        this.speeches = this.speechService.getAllSpeeches(search);
    }

    queryParamsHandler(params: Params) {
        this.searchedWord = params['search'] ? params['search'] : '';

        this.getAllSpeeches(this.searchedWord);
    }

    searchSpeeches() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                search: this.searchedWord
            },
            queryParamsHandling: 'merge'
        };
        this.router.navigate(['/speech-list'], navigationExtras);
    }
}
