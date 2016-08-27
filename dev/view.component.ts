import {Component} from 'angular2/core';
import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                        aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['WebApp']">Welcome to the BART Web App!</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="https://www.bart.gov/">BART</a></li>
                        <li><a [routerLink]="['WebApp']">Web App</a></li>
                        <li><a [routerLink]="['About']">About</a></li>
                    </ul>
                    <!--SEARCH BAR-->
                    <!--<form class="navbar-form navbar-right">
                        <input type="text" class="form-control" placeholder="Search...">
                    </form>-->
                </div>
            </div>
        </nav>
        <!--<my-web-app></my-web-app>-->
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['../src/css/dashboard.css'],
})

@RouteConfig([
    { path: '/webapp', name: 'WebApp', component: AppComponent, useAsDefault: true },
    { path: '/about', name: 'About', component: AboutComponent },
])

export class ViewComponent {

}