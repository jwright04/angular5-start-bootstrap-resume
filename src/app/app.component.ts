import {Component, Renderer2} from '@angular/core';

const resumeJS:string = "/assets/js/resume.min.js";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private loadExternalJS:Promise<any>;

    constructor(private renderer:Renderer2) {
        this.renderer.setAttribute(document.querySelector('body'), "id", "page-top");
    }

    ngAfterViewInit():void {
        //load the external .js after everything else has loaded
        this.loadExternalJS = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
    }

    private loadScript():void {
        console.log('load external js script ...');
        let node = document.createElement('script');
        node.src = resumeJS;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);

    }
}