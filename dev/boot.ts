///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {ViewComponent} from "./view.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(ViewComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);