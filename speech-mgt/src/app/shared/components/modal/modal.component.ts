import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Output() closeEvent = new EventEmitter();
    closeResult: string;

    constructor(
        
    ) {
    }

	ngOnInit() {
        
    }
    
    close() {
        this.closeEvent.emit();
    }

}
