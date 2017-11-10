import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface EducationData {
    school:string;
    degree:string;
    department:string;
    gpa:string;
    startDate:string;
    endDate:string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

    public educationArr:EducationData[] = [
        {
            school: "University of Colorado Boulder",
            degree: "Bachelor of Science",
            department: "Computer Science - Web Development Track",
            gpa: "3.23",
            startDate: "August 2006",
            endDate: "May 2010"
        },
        {
            school: "James Buchanan High School",
            degree: "Student",
            department: "Technology Magnet Program",
            gpa: "3.56",
            startDate: "August 2002",
            endDate: "May 2006"
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
