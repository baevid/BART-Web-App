System.register(['angular2/core', './app.component', './about.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_component_1, about_component_1, router_1;
    var ViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ViewComponent = (function () {
                function ViewComponent() {
                }
                ViewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                        aria-controls=\"navbar\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" [routerLink]=\"['WebApp']\">Welcome to the BART Web App!</a>\n                </div>\n                <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a href=\"https://www.bart.gov/\">BART</a></li>\n                        <li><a [routerLink]=\"['WebApp']\">Web App</a></li>\n                        <li><a [routerLink]=\"['About']\">About</a></li>\n                    </ul>\n                    <!--SEARCH BAR-->\n                    <!--<form class=\"navbar-form navbar-right\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                    </form>-->\n                </div>\n            </div>\n        </nav>\n        <!--<my-web-app></my-web-app>-->\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['../src/css/dashboard.css'],
                    }),
                    router_1.RouteConfig([
                        { path: '/webapp', name: 'WebApp', component: app_component_1.AppComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ViewComponent);
                return ViewComponent;
            }());
            exports_1("ViewComponent", ViewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkNBO2dCQUFBO2dCQUVBLENBQUM7Z0JBMUNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSwwZ0RBNEJUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFDMUMsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQ2hGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO3FCQUMvRCxDQUFDOztpQ0FBQTtnQkFJRixvQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQseUNBRUMsQ0FBQSIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vYWJvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWd9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgW3JvdXRlckxpbmtdPVwiWydXZWJBcHAnXVwiPldlbGNvbWUgdG8gdGhlIEJBUlQgV2ViIEFwcCE8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmJhcnQuZ292L1wiPkJBUlQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnV2ViQXBwJ11cIj5XZWIgQXBwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLVNFQVJDSCBCQVItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGZvcm0gY2xhc3M9XCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4tLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8IS0tPG15LXdlYi1hcHA+PC9teS13ZWItYXBwPi0tPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9jc3MvZGFzaGJvYXJkLmNzcyddLFxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy93ZWJhcHAnLCBuYW1lOiAnV2ViQXBwJywgY29tcG9uZW50OiBBcHBDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgeyBwYXRoOiAnL2Fib3V0JywgbmFtZTogJ0Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9LFxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
