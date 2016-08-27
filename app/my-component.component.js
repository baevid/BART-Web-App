System.register(['angular2/core', './test.component'], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Max";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red': ''\">{{name}}</span> and this is my very first angular2 component and <span [class.is-awesome]=\"inputElement.value === 'yes'\">it's awesome!</span>\n        <br>\n        <br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n        <br><br>\n        <button [disabled]=\"inputElement.value !== 'yes'\">Only enabled if 'yes' was entered</button>     \n    ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFKRyx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQW5CTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsd2RBUVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzlCLENBQUM7O3dDQUFBO2dCQVFGLDJCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCx1REFPQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICBIaSwgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCc6ICcnXCI+e3tuYW1lfX08L3NwYW4+IGFuZCB0aGlzIGlzIG15IHZlcnkgZmlyc3QgYW5ndWxhcjIgY29tcG9uZW50IGFuZCA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+aXQncyBhd2Vzb21lITwvc3Bhbj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIElzIGl0IGF3ZXNvbWU/XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxyXG4gICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPk9ubHkgZW5hYmxlZCBpZiAneWVzJyB3YXMgZW50ZXJlZDwvYnV0dG9uPiAgICAgXHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbVGVzdENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBuZ09uSW5pdCgpOmFueXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIk1heFwiO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
