import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface ExperienceData {
    title:string;
    company:string;
    duties:string;
    startDate:string;
    endDate:string;
}

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

    public experienceArr:ExperienceData[] = [
        {
            title: "Senior Web Developer",
            company: "Intelitec Solutions",
            duties: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
            startDate: "March 2013",
            endDate: "Present"
        },
        {
            title: "Web Developer",
            company: "Intelitec Solutions",
            duties: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
            startDate: "December 2011",
            endDate: "March 2013"
        },
        {
            title: "Junior Web Designer",
            company: "Shout! Media Productions",
            duties: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
            startDate: "July 2010",
            endDate: "December 2011"
        },
        {
            title: "Web Design Intern",
            company: "Shout! Media Productions",
            duties: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
            startDate: "September 2008",
            endDate: "June 2010"
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
