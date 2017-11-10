import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface PersonalInformation {
    firstName:string;
    lastName:string;
    address:Address;
    email:string;
    description:string;
    phoneNumber:string;
}

export interface Address {
    street:string;
    city:string;
    state:string;
    zipCode:string;
}

export interface SocialInfo {
    iconClassInfo:string;
    url:string;
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

    public personalInfo:PersonalInformation = {
        firstName: "Clarence",
        lastName: "Taylor",
        address: {
            street: "3542 Berry Street",
            city: "Cheyenne Wells",
            state: "CO",
            zipCode: "80810"
        },
        email: "name@email.com",
        description: "I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
        phoneNumber: "(317) 585-8468"
    };

    public socialData:SocialInfo[] = [
        {
            iconClassInfo: "fa fa-facebook fa-stack-1x fa-inverse",
            url: "#"
        },
        {
            iconClassInfo: "fa fa-twitter fa-stack-1x fa-inverse",
            url: "#"
        },
        {
            iconClassInfo: "fa fa-linkedin fa-stack-1x fa-inverse",
            url: "#"
        },
        {
            iconClassInfo: "fa fa-github fa-stack-1x fa-inverse",
            url: "#"
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
