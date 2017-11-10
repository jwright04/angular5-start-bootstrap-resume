import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

    public title:string = "Angular 5 Start Bootstrap - Resume";
    public navigation:Array<string> = [
        "About",
        "Experience",
        "Education",
        "Skills",
        "Interests",
        "Awards"
    ];

    constructor() {
    }

    ngOnInit() {
    }

    makeLowerCase(value:string):string {
        return value.toLocaleLowerCase();
    }

}
