System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                    this.showMap = false;
                    this.showMaptoImage = new core_1.EventEmitter();
                }
                MapComponent.prototype.ngOnChanges = function () {
                    if (this.latitude != null && this.longitude != null) {
                        var mapProp = {
                            center: new google.maps.LatLng(this.latitude, this.longitude),
                            zoom: 16,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                        this.showMap = true;
                        this.showMaptoImage.emit(this.showMap);
                        var marker = new google.maps.Marker({
                            position: [this.latitude, this.longitude],
                            map: map,
                            title: 'BART Station'
                        });
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "showMaptoImage", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'my-map',
                        template: "<p id=\"googleMap\" style=\"width:500px;height:400px;\"></p>",
                        inputs: ['latitude', 'longitude'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtvQkFHSSxZQUFPLEdBQVksS0FBSyxDQUFDO29CQUNmLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7Z0JBb0IzRCxDQUFDO2dCQWxCRyxrQ0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxPQUFPLEdBQUc7NEJBQ1YsTUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUM3RCxJQUFJLEVBQUUsRUFBRTs0QkFDUixTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzt5QkFDM0MsQ0FBQzt3QkFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRXZDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7NEJBQ2hDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDekMsR0FBRyxFQUFFLEdBQUc7NEJBQ1IsS0FBSyxFQUFFLGNBQWM7eUJBQ3hCLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUM7Z0JBbkJEO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBVmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDhEQUEwRDt3QkFDcEUsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDcEMsQ0FBQzs7Z0NBQUE7Z0JBMEJGLG1CQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCx1Q0F3QkMsQ0FBQSIsImZpbGUiOiJtYXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktbWFwJyxcclxuICAgIHRlbXBsYXRlOiBgPHAgaWQ9XCJnb29nbGVNYXBcIiBzdHlsZT1cIndpZHRoOjUwMHB4O2hlaWdodDo0MDBweDtcIj48L3A+YCxcclxuICAgIGlucHV0czogWydsYXRpdHVkZScsICdsb25naXR1ZGUnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgc2hvd01hcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIHNob3dNYXB0b0ltYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPigpO1xyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxhdGl0dWRlICE9IG51bGwgJiYgdGhpcy5sb25naXR1ZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgbWFwUHJvcCA9IHtcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLmxhdGl0dWRlLCB0aGlzLmxvbmdpdHVkZSksXHJcbiAgICAgICAgICAgICAgICB6b29tOiAxNixcclxuICAgICAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGVNYXBcIiksIG1hcFByb3ApO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNYXB0b0ltYWdlLmVtaXQodGhpcy5zaG93TWFwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbdGhpcy5sYXRpdHVkZSwgdGhpcy5sb25naXR1ZGVdLFxyXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0JBUlQgU3RhdGlvbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
