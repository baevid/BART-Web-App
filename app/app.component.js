System.register(['angular2/core', './data-query.component', './station-query.component', './table-query.component', './form.component', './image.component', './station'], function(exports_1, context_1) {
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
    var core_1, data_query_component_1, station_query_component_1, table_query_component_1, form_component_1, image_component_1, station_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_query_component_1_1) {
                data_query_component_1 = data_query_component_1_1;
            },
            function (station_query_component_1_1) {
                station_query_component_1 = station_query_component_1_1;
            },
            function (table_query_component_1_1) {
                table_query_component_1 = table_query_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (image_component_1_1) {
                image_component_1 = image_component_1_1;
            },
            function (station_1_1) {
                station_1 = station_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.dataQueryURLArray = [];
                    this.selectedStationDestinationsArray = [];
                    this.imageStation = new station_1.Station('0', '12th St. Oakland City Center', 37.803664, -122.271604, ['24th Street', 'Daly City', 'Fremont', 'Millbrae', 'North Concord', 'Pittsburg/Bay Point', 'Pleasant Hill', 'Richmond', 'SF Airport']);
                    this.hideDisplayApp = true;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        templateUrl: "dev/app.component.html",
                        directives: [data_query_component_1.HTTPDataComponent, station_query_component_1.HTTPStationComponent, table_query_component_1.HTTPTableComponent, form_component_1.UserForm, image_component_1.ImageComponent],
                        styleUrls: ['../src/css/dashboard.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFFSSxzQkFBaUIsR0FBYSxFQUFFLENBQUM7b0JBRWpDLHFDQUFnQyxHQUFhLEVBQUUsQ0FBQztvQkFDaEQsaUJBQVksR0FBWSxJQUFJLGlCQUFPLENBQUMsR0FBRyxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUl6TyxtQkFBYyxHQUFZLElBQUksQ0FBQztnQkFDbkMsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsd0JBQXdCO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQyx3Q0FBaUIsRUFBRSw4Q0FBb0IsRUFBRSwwQ0FBa0IsRUFBRSx5QkFBUSxFQUFFLGdDQUFjLENBQUM7d0JBQ25HLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUMxQyxDQUFDOztnQ0FBQTtnQkFZRixtQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsdUNBVUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBEYXRhQ29tcG9uZW50fSBmcm9tICcuL2RhdGEtcXVlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHtIVFRQU3RhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9zdGF0aW9uLXF1ZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SFRUUFRhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLXF1ZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlckZvcm19IGZyb20gJy4vZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ltYWdlQ29tcG9uZW50fSBmcm9tICcuL2ltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3RhdGlvbn0gZnJvbSAnLi9zdGF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6IGBkZXYvYXBwLmNvbXBvbmVudC5odG1sYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtIVFRQRGF0YUNvbXBvbmVudCwgSFRUUFN0YXRpb25Db21wb25lbnQsIEhUVFBUYWJsZUNvbXBvbmVudCwgVXNlckZvcm0sIEltYWdlQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvY3NzL2Rhc2hib2FyZC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgZGF0YVF1ZXJ5VVJMOiBzdHJpbmc7XHJcbiAgICBkYXRhUXVlcnlVUkxBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgIHN0YXRpb25MaXN0OiBTdGF0aW9uW107XHJcbiAgICBzZWxlY3RlZFN0YXRpb25EZXN0aW5hdGlvbnNBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgIGltYWdlU3RhdGlvbjogU3RhdGlvbiA9IG5ldyBTdGF0aW9uKCcwJywgJzEydGggU3QuIE9ha2xhbmQgQ2l0eSBDZW50ZXInLCAzNy44MDM2NjQsIC0xMjIuMjcxNjA0LCBbJzI0dGggU3RyZWV0JywgJ0RhbHkgQ2l0eScsICdGcmVtb250JywgJ01pbGxicmFlJywgJ05vcnRoIENvbmNvcmQnLCAnUGl0dHNidXJnL0JheSBQb2ludCcsICdQbGVhc2FudCBIaWxsJywgJ1JpY2htb25kJywgJ1NGIEFpcnBvcnQnXSk7XHJcbiAgICBpbWFnZVN0YXRpb25MYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgaW1hZ2VTdGF0aW9uTG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBoaWRlSW1hZ2VBcHA6IGJvb2xlYW47XHJcbiAgICBoaWRlRGlzcGxheUFwcDogYm9vbGVhbiA9IHRydWU7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
