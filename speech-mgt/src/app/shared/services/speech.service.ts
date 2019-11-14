import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Speech } from '../models/speech';


@Injectable()
export class SpeechService {
    private refreshSubject = new Subject<any>();
    private addNewSubject = new Subject<any>();


    constructor() { }

    getAllSpeeches() {
        console.log(JSON.parse(localStorage.getItem('speeches')));
        return localStorage.getItem('speeches') ? JSON.parse(localStorage.getItem('speeches')) : [];
    }

    getSpeechById(id) {

    }

    addNewSpeech(toBeAdded: Speech) {
        let speeches = this.getAllSpeeches();
        speeches.push(toBeAdded);
        localStorage.setItem('speeches', JSON.stringify(speeches));
        this.addNewSubject.next('Successfully added new speech.');
    }

    editSpeech(toBeEdited: Speech, id: number) {
        let speeches = this.getAllSpeeches();
        
        for(let x = 0; x < speeches.length; x++) {
            if (speeches[x]._id === id) {
                speeches[x] = toBeEdited;
            }
        }

        localStorage.setItem('speeches', JSON.stringify(speeches));
        this.refreshSubject.next('Successfully edited.');
    }

    deleteSpeech(id: number){
        let speeches = this.getAllSpeeches();
        if (speeches.length > 0) {
            for (let x = 0; x < speeches.length; x++) {
                if (id === speeches[x]._id) {
                    speeches.splice(x,1);
                    break;
                }
            }
            localStorage.setItem('speeches', JSON.stringify(speeches));
        }

        this.refreshSubject.next('Successfully deleted.');
    }

    deleteAll() {
        localStorage.removeItem('speeches');
        this.refreshSubject.next('Successfully deleted.');
    }

    onRefresh() {
        return this.refreshSubject.asObservable();
    }

    onAddNew() {
        return this.addNewSubject.asObservable();
    }


}
