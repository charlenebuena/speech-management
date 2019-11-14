import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Speech } from '../../models/speech';


@Component({
	selector: 'app-speech-form',
	templateUrl: './speech-form.component.html',
	styleUrls: ['./speech-form.component.scss']
})
export class SpeechFormComponent implements OnInit{
	speechForm: FormGroup;
	@Input() speech: Speech;

	timeValidation = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

	constructor(
		private fb: FormBuilder,
		private calendar: NgbCalendar
	) {}

	ngOnInit() {
		this.buildSpeechForm();
	}

	buildSpeechForm() {
		this.speechForm = this.fb.group({
			'speechTitle': [this.speech.speechTitle, [
				Validators.required
			]],
			'author': [this.speech.author, [
				Validators.required
			]],
			'dateCreated': [this.speech.dateCreated ? this.extractDate() : this.calendar.getToday(), [
				Validators.required
			]],
			'speechContent': [this.speech.speechContent, [
				Validators.required
			]]
		});
	}

    get formValues() {
		if (this.speechForm.valid) {
			this.speechForm.value.dateCreated = this.speechForm.value.dateCreated && typeof(this.speechForm.value.dateCreated) === 'object' ? `${this.speechForm.value.dateCreated.year}-${this.speechForm.value.dateCreated.month}-${this.speechForm.value.dateCreated.day}` : this.speechForm.value.dateCreated;
			return this.speechForm.value;
		}
	}

	extractDate() {
		var dateArray = null;
		dateArray = this.speech.dateCreated ? this.speech.dateCreated.split('-') : null;
		if (dateArray) {
			console.log(dateArray)
			return {
				year: parseInt(dateArray[0]),
				month: parseInt(dateArray[1]),
				day: parseInt(dateArray[2])
			};
		} else {
			return '';
		}
	}


}
