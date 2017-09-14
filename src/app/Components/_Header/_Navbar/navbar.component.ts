import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {
    pages = [
        { name: 'Home', path: 'home' },
        { name: 'Info', path: 'info' }
    ]
}