System.register(['angular2/core', './station'], function(exports_1, context_1) {
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
    var core_1, station_1;
    var UserForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (station_1_1) {
                station_1 = station_1_1;
            }],
        execute: function() {
            UserForm = (function () {
                function UserForm() {
                    this.submitted = false;
                    this.showImage = false;
                    this.stations = [new station_1.Station('12th', '12th St. Oakland City Center', 37.803664, -122.271604, ['24th Street', 'Daly City', 'Fremont', 'Millbrae', 'North Concord', 'Pittsburg/Bay Point', 'Pleasant Hill', 'Richmond', 'SF Airport'])];
                    this.selectedStationDestinations = this.stations[0].destinations;
                    this.selectedStationDestination = this.stations[0].destinations[0];
                    this.selectedStationDestinationUrls = [];
                    this.selectedStation = this.stations[0];
                    this.selectedStationLatitude = this.stations[0].latitude;
                    this.selectedStationLongitude = this.stations[0].longitude;
                    this.dataQueryURLtoApp = new core_1.EventEmitter();
                    this.dataQueryURLArraytoApp = new core_1.EventEmitter();
                    this.selectedStationDestinationstoApp = new core_1.EventEmitter();
                    this.selectedStationtoApp = new core_1.EventEmitter();
                    this.selectedStationLatitudetoApp = new core_1.EventEmitter();
                    this.selectedStationLongitudetoApp = new core_1.EventEmitter();
                    this.showImagetoApp = new core_1.EventEmitter();
                    this.userForm = {
                        selectedStation: this.stations[0].name,
                        selectedDirection: this.selectedStationDestinations[0],
                    };
                }
                UserForm.prototype.onSubmit = function (form) {
                    //console.log(typeof (form.selectedDirection))
                    //console.log(typeof form.selectedDirection !== "undefined")
                    if (typeof (form.selectedDirection) !== "undefined" && typeof (form.selectedStation) !== "undefined") {
                        this.submitted = true;
                        this.showImage = true;
                        this.dataQueryURLtoApp.emit("https://10.32.209.193//piwebapi/attributes?path=\\\\dyang6220\\bart\\stations\\" + form.selectedStation + "\\" + form.selectedDirection);
                        this.otherTrains(form);
                        this.showImagetoApp.emit(this.showImage);
                        this.selectedStationDestinationstoApp.emit(this.selectedStationDestinations);
                    }
                    else {
                        alert("Destination undefined, please refresh the page. (onSubmit)");
                    }
                };
                UserForm.prototype.UpdateDestinations = function (form) {
                    var index = -1;
                    for (var i = 0, len = this.stations.length; i < len; i++) {
                        if (this.stations[i].name === form) {
                            index = i;
                            break;
                        }
                    }
                    this.selectedStationDestinations = this.stations[index].destinations;
                    this.selectedStation = this.stations[index];
                    this.selectedStationtoApp.emit(this.selectedStation);
                    if (typeof (this.selectedStationDestination) !== "undefined") {
                        //console.log("In UpdateDefaultDestination")
                        this.selectedStationDestination = this.stations[index].destinations[0];
                    }
                    else {
                        alert("Destination undefined, please refresh the page. (UpdateDefaultDestination)");
                    }
                };
                //This method calls the data query component to retrieve the Urls for all the trains in the station
                UserForm.prototype.otherTrains = function (form) {
                    for (var i = 0, len = this.selectedStationDestinations.length; i < len; i++) {
                        this.selectedStationDestinationUrls[i] = "https://10.32.209.193//piwebapi/attributes?path=\\\\dyang6220\\bart\\stations\\" + form.selectedStation + "\\" + this.selectedStationDestinations[i];
                    }
                    this.dataQueryURLArraytoApp.emit(this.selectedStationDestinationUrls);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "dataQueryURLtoApp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "dataQueryURLArraytoApp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "selectedStationDestinationstoApp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "selectedStationtoApp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "selectedStationLatitudetoApp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "selectedStationLongitudetoApp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], UserForm.prototype, "showImagetoApp", void 0);
                UserForm = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        template: "      \n         <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n            <li><a>\n                <label>Please select your station:</label>\n                <select ngControl=\"selectedStation\" [(ngModel)]=\"userForm.selectedStation\" (change)=\"UpdateDestinations(myForm.value.selectedStation)\">\n                    <option *ngFor=\"#station of stations\" >\n                        {{station.name}}\n                    </option>\n                </select>\n            </a></li>\n            <li><a>\n                <label>Please select your destination:</label>\n                <select ngControl=\"selectedDirection\" [(ngModel)]=selectedStationDestination>\n                    <option *ngFor=\"#direction of selectedStationDestinations\" >\n                        {{direction}}\n                    </option>\n                </select>\n            </a></li>\n                     \n            <button type=\"submit\" [disabled]=\"submitted\">\n                Submit\n            </button>\n        </form>\n    ",
                        inputs: ['stations'],
                        styleUrls: ['../src/css/app.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserForm);
                return UserForm;
            }());
            exports_1("UserForm", UserForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzFFLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsR0FBRyxpRkFBaUYsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ2xNLENBQUM7b0JBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkF6REQ7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7a0ZBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztzRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7OzhFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7K0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztnRUFBQTtnQkEvQ2I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDBoQ0F1QlQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNwQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDcEMsQ0FBQzs7NEJBQUE7Z0JBdUVGLGVBQUM7WUFBRCxDQXJFQSxBQXFFQyxJQUFBO1lBckVELCtCQXFFQyxDQUFBIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTdGF0aW9ufSBmcm9tICcuL3N0YXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWZvcm0nLFxyXG4gICAgdGVtcGxhdGU6IGAgICAgICBcclxuICAgICAgICAgPGZvcm0gI215Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChteUZvcm0udmFsdWUpXCI+XHJcbiAgICAgICAgICAgIDxsaT48YT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QbGVhc2Ugc2VsZWN0IHlvdXIgc3RhdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuZ0NvbnRyb2w9XCJzZWxlY3RlZFN0YXRpb25cIiBbKG5nTW9kZWwpXT1cInVzZXJGb3JtLnNlbGVjdGVkU3RhdGlvblwiIChjaGFuZ2UpPVwiVXBkYXRlRGVzdGluYXRpb25zKG15Rm9ybS52YWx1ZS5zZWxlY3RlZFN0YXRpb24pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjc3RhdGlvbiBvZiBzdGF0aW9uc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tzdGF0aW9uLm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGE+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UGxlYXNlIHNlbGVjdCB5b3VyIGRlc3RpbmF0aW9uOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5nQ29udHJvbD1cInNlbGVjdGVkRGlyZWN0aW9uXCIgWyhuZ01vZGVsKV09c2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjZGlyZWN0aW9uIG9mIHNlbGVjdGVkU3RhdGlvbkRlc3RpbmF0aW9uc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tkaXJlY3Rpb259fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cInN1Ym1pdHRlZFwiPlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6IFsnc3RhdGlvbnMnXSxcclxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvY3NzL2FwcC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRm9ybSB7XHJcbiAgICBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJbWFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGlvbnM6IFN0YXRpb25bXSA9IFtuZXcgU3RhdGlvbignMTJ0aCcsICcxMnRoIFN0LiBPYWtsYW5kIENpdHkgQ2VudGVyJywgMzcuODAzNjY0LCAtMTIyLjI3MTYwNCwgWycyNHRoIFN0cmVldCcsICdEYWx5IENpdHknLCAnRnJlbW9udCcsICdNaWxsYnJhZScsICdOb3J0aCBDb25jb3JkJywgJ1BpdHRzYnVyZy9CYXkgUG9pbnQnLCAnUGxlYXNhbnQgSGlsbCcsICdSaWNobW9uZCcsICdTRiBBaXJwb3J0J10pXTtcclxuICAgIHNlbGVjdGVkU3RhdGlvbkRlc3RpbmF0aW9ucyA9IHRoaXMuc3RhdGlvbnNbMF0uZGVzdGluYXRpb25zO1xyXG4gICAgc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb246IHN0cmluZyA9IHRoaXMuc3RhdGlvbnNbMF0uZGVzdGluYXRpb25zWzBdO1xyXG4gICAgc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25VcmxzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgc2VsZWN0ZWRTdGF0aW9uOiBTdGF0aW9uID0gdGhpcy5zdGF0aW9uc1swXTtcclxuICAgIHNlbGVjdGVkU3RhdGlvbkxhdGl0dWRlID0gdGhpcy5zdGF0aW9uc1swXS5sYXRpdHVkZTtcclxuICAgIHNlbGVjdGVkU3RhdGlvbkxvbmdpdHVkZSA9IHRoaXMuc3RhdGlvbnNbMF0ubG9uZ2l0dWRlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBkYXRhUXVlcnlVUkx0b0FwcCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gICAgQE91dHB1dCgpIGRhdGFRdWVyeVVSTEFycmF5dG9BcHAgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkU3RhdGlvbkRlc3RpbmF0aW9uc3RvQXBwID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFN0YXRpb250b0FwcCA9IG5ldyBFdmVudEVtaXR0ZXI8U3RhdGlvbj4oKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZFN0YXRpb25MYXRpdHVkZXRvQXBwID0gbmV3IEV2ZW50RW1pdHRlcjxOdW1iZXI+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRTdGF0aW9uTG9uZ2l0dWRldG9BcHAgPSBuZXcgRXZlbnRFbWl0dGVyPE51bWJlcj4oKTtcclxuICAgIEBPdXRwdXQoKSBzaG93SW1hZ2V0b0FwcCA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJGb3JtOiBhbnkgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWRTdGF0aW9uOiB0aGlzLnN0YXRpb25zWzBdLm5hbWUsXHJcbiAgICAgICAgc2VsZWN0ZWREaXJlY3Rpb246IHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25zWzBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdChmb3JtOiBhbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiAoZm9ybS5zZWxlY3RlZERpcmVjdGlvbikpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgZm9ybS5zZWxlY3RlZERpcmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICBpZiAodHlwZW9mIChmb3JtLnNlbGVjdGVkRGlyZWN0aW9uKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgKGZvcm0uc2VsZWN0ZWRTdGF0aW9uKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ltYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhUXVlcnlVUkx0b0FwcC5lbWl0KFwiaHR0cHM6Ly8xMC4zMi4yMDkuMTkzLy9waXdlYmFwaS9hdHRyaWJ1dGVzP3BhdGg9XFxcXFxcXFxkeWFuZzYyMjBcXFxcYmFydFxcXFxzdGF0aW9uc1xcXFxcIiArIGZvcm0uc2VsZWN0ZWRTdGF0aW9uICsgXCJcXFxcXCIgKyBmb3JtLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5vdGhlclRyYWlucyhmb3JtKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW1hZ2V0b0FwcC5lbWl0KHRoaXMuc2hvd0ltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpb25EZXN0aW5hdGlvbnN0b0FwcC5lbWl0KHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRGVzdGluYXRpb24gdW5kZWZpbmVkLCBwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZS4gKG9uU3VibWl0KVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVEZXN0aW5hdGlvbnMoZm9ybTogYW55KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuc3RhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGlvbnNbaV0ubmFtZSA9PT0gZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpb25EZXN0aW5hdGlvbnMgPSB0aGlzLnN0YXRpb25zW2luZGV4XS5kZXN0aW5hdGlvbnM7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpb24gPSB0aGlzLnN0YXRpb25zW2luZGV4XTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGlvbnRvQXBwLmVtaXQodGhpcy5zZWxlY3RlZFN0YXRpb24pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb24pICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJbiBVcGRhdGVEZWZhdWx0RGVzdGluYXRpb25cIilcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpb25EZXN0aW5hdGlvbiA9IHRoaXMuc3RhdGlvbnNbaW5kZXhdLmRlc3RpbmF0aW9uc1swXTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkU3RhdGlvbkRlc3RpbmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRGVzdGluYXRpb24gdW5kZWZpbmVkLCBwbGVhc2UgcmVmcmVzaCB0aGUgcGFnZS4gKFVwZGF0ZURlZmF1bHREZXN0aW5hdGlvbilcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vVGhpcyBtZXRob2QgY2FsbHMgdGhlIGRhdGEgcXVlcnkgY29tcG9uZW50IHRvIHJldHJpZXZlIHRoZSBVcmxzIGZvciBhbGwgdGhlIHRyYWlucyBpbiB0aGUgc3RhdGlvblxyXG4gICAgb3RoZXJUcmFpbnMoZm9ybTogYW55KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25VcmxzW2ldID0gXCJodHRwczovLzEwLjMyLjIwOS4xOTMvL3Bpd2ViYXBpL2F0dHJpYnV0ZXM/cGF0aD1cXFxcXFxcXGR5YW5nNjIyMFxcXFxiYXJ0XFxcXHN0YXRpb25zXFxcXFwiICsgZm9ybS5zZWxlY3RlZFN0YXRpb24gKyBcIlxcXFxcIiArIHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25zW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YVF1ZXJ5VVJMQXJyYXl0b0FwcC5lbWl0KHRoaXMuc2VsZWN0ZWRTdGF0aW9uRGVzdGluYXRpb25VcmxzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
