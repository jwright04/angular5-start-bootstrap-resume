import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

    deviconArr:Array<string> = [
        "devicons-html5",
        "devicons-css3",
        "devicons-javascript",
        "devicons-jquery",
        "devicons-sass",
        "devicons-less",
        "devicons-bootstrap",
        "devicons-wordpress",
        "devicons-grunt",
        "devicons-gulp",
        "devicons-npm"
    ];

    workflowArr:Array<string> = [
        "Mobile-First, Responsive Design",
        "Cross Browser Testing &amp; Debugging",
        "Cross Functional Teams",
        "Agile Development &amp; Scrum",
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
