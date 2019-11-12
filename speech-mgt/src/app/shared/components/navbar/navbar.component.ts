import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
	windowVar = null;

	constructor(
		private router: Router,
		private activated: ActivatedRoute
	){}

	ngOnInit() {
		this.windowVar = window.location.pathname;
	}
}
