import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-awards',
    templateUrl: './awards.component.html',
    styleUrls: ['./awards.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AwardsComponent implements OnInit {

    public awardArr:Array<string> = [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1st Place - James Buchanan High School - Hackathon 2006",
        "3rd Place - James Buchanan High School - Hackathon 2005"
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
