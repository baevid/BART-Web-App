System.register(['angular2/core', './station', 'angular2/http', './map.component'], function(exports_1, context_1) {
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
    var core_1, station_1, http_1, map_component_1;
    var ImageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (station_1_1) {
                station_1 = station_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            }],
        execute: function() {
            ImageComponent = (function () {
                function ImageComponent(http) {
                    this.http = http;
                    this.hideImage = false;
                    this.showMap = false;
                    this.elementURL = 'https://10.32.209.193/piwebapi/elements/E0c3EoIhHIREW5_e3hYxPTVQqYsUJlg95hGUGQAd2LcwvQRFlBTkc2MjIwXEJBUlRcU1RBVElPTlM/elements';
                    this.selectedStation = new station_1.Station('', '', 0, 0, []);
                    this.showMaptoApp = new core_1.EventEmitter();
                }
                ImageComponent.prototype.getStationAttributeURL = function () {
                    var _this = this;
                    var locationURL;
                    this.http.get(this.elementURL)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        _this.locationURL = data.Items[_this.selectedStation.id].Links.Attributes;
                    }, function (error) { return alert(error); }, function () { return console.log(); } //"Get Stations Request Finished"
                     //"Get Stations Request Finished"
                    );
                };
                ImageComponent.prototype.getLatitude = function () {
                    var _this = this;
                    var latitude;
                    this.http.get(this.locationURL)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        var valueURL = data.Items[0].Links.Value;
                        _this.http.get(valueURL)
                            .subscribe(function (resp) {
                            var data = resp.json();
                            _this.selectedStationLatitude = Number(data.Value);
                        }, function (error) { return alert(error); }, function () { return console.log(); } //"Get Latitude Value Request Finished"
                         //"Get Latitude Value Request Finished"
                        );
                    }, function (error) { return alert(error); }, function () { return console.log(); } //"Get Latitude URL Request Finished"
                     //"Get Latitude URL Request Finished"
                    );
                };
                ImageComponent.prototype.getLongitude = function () {
                    var _this = this;
                    var longitude;
                    this.http.get(this.locationURL)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        var valueURL = data.Items[1].Links.Value;
                        _this.http.get(valueURL)
                            .subscribe(function (resp) {
                            var data = resp.json();
                            _this.selectedStationLongitude = Number(data.Value);
                        }, function (error) { return alert(error); }, function () { return console.log(); } //"Get Longitude Value Request Finished"
                         //"Get Longitude Value Request Finished"
                        );
                    }, function (error) { return alert(error); }, function () { return console.log(); } //"Get Longitude URL Request Finished"
                     //"Get Longitude URL Request Finished"
                    );
                };
                ImageComponent.prototype.ngOnInit = function () {
                    this.imageDirectory = "../assets/img/bart-system-map.gif";
                };
                ImageComponent.prototype.ngDoCheck = function () {
                    if (this.hideImage && this.locationURL == null) {
                        //console.log("ngDoCheck() condition 1")
                        this.getStationAttributeURL();
                        this.imageDirectory = "../assets/img/loading_spinner.gif";
                    }
                    if (this.locationURL != null && this.selectedStationLatitude == null && this.selectedStationLongitude == null) {
                        //console.log("ngDoCheck() condition 2")
                        this.getLatitude();
                        this.getLongitude();
                    }
                    if (this.selectedStationLatitude != null && this.selectedStationLongitude != null) {
                        this.showMaptoApp.emit(false);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ImageComponent.prototype, "showMaptoApp", void 0);
                ImageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-image',
                        template: "\n        <img src={{imageDirectory}} width=\"400\" height=\"400\" alt=\"BART Map not Available.\" [hidden] = \"showMap\">\n        <!--<p>{{selectedStation.name}}: NOT IMPORTANT: ({{selectedStation.latitude}}, {{selectedStation.longitude}}) {{selectedStation.destinations[1]}}</p>-->\n        <!--<p>{{selectedStation.name}}: REAL COORDINATES:({{selectedStationLatitude}}, {{selectedStationLongitude}})</p>-->\n        <my-map [latitude]=\"selectedStationLatitude\" [longitude]=\"selectedStationLongitude\" (showMaptoImage)=\"showMap=$event\" [hidden] = \"!showMap\"></my-map>    \n        ",
                        inputs: ['selectedStation', 'hideImage' /*, 'selectedStationLatitude', 'selectedStationLongitude'*/],
                        directives: [map_component_1.MapComponent],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ImageComponent);
                return ImageComponent;
            }());
            exports_1("ImageComponent", ImageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUksSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzVHLHdDQUF3Qzt3QkFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDaEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLENBQUM7Z0JBQ0wsQ0FBQztnQkEvRUQ7b0JBQUMsYUFBTSxFQUFFOztvRUFBQTtnQkFyQmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLGlsQkFLTDt3QkFDTCxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUEsMkRBQTJELENBQUM7d0JBQ25HLFVBQVUsRUFBRSxDQUFDLDRCQUFZLENBQUM7cUJBQzdCLENBQUM7O2tDQUFBO2dCQTJGRixxQkFBQztZQUFELENBekZBLEFBeUZDLElBQUE7WUF6RkQsMkNBeUZDLENBQUEiLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrLCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U3RhdGlvbn0gZnJvbSAnLi9zdGF0aW9uJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtNYXBDb21wb25lbnR9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaW1hZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aW1nIHNyYz17e2ltYWdlRGlyZWN0b3J5fX0gd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiBhbHQ9XCJCQVJUIE1hcCBub3QgQXZhaWxhYmxlLlwiIFtoaWRkZW5dID0gXCJzaG93TWFwXCI+XHJcbiAgICAgICAgPCEtLTxwPnt7c2VsZWN0ZWRTdGF0aW9uLm5hbWV9fTogTk9UIElNUE9SVEFOVDogKHt7c2VsZWN0ZWRTdGF0aW9uLmxhdGl0dWRlfX0sIHt7c2VsZWN0ZWRTdGF0aW9uLmxvbmdpdHVkZX19KSB7e3NlbGVjdGVkU3RhdGlvbi5kZXN0aW5hdGlvbnNbMV19fTwvcD4tLT5cclxuICAgICAgICA8IS0tPHA+e3tzZWxlY3RlZFN0YXRpb24ubmFtZX19OiBSRUFMIENPT1JESU5BVEVTOih7e3NlbGVjdGVkU3RhdGlvbkxhdGl0dWRlfX0sIHt7c2VsZWN0ZWRTdGF0aW9uTG9uZ2l0dWRlfX0pPC9wPi0tPlxyXG4gICAgICAgIDxteS1tYXAgW2xhdGl0dWRlXT1cInNlbGVjdGVkU3RhdGlvbkxhdGl0dWRlXCIgW2xvbmdpdHVkZV09XCJzZWxlY3RlZFN0YXRpb25Mb25naXR1ZGVcIiAoc2hvd01hcHRvSW1hZ2UpPVwic2hvd01hcD0kZXZlbnRcIiBbaGlkZGVuXSA9IFwiIXNob3dNYXBcIj48L215LW1hcD4gICAgXHJcbiAgICAgICAgYCxcclxuICAgIGlucHV0czogWydzZWxlY3RlZFN0YXRpb24nLCAnaGlkZUltYWdlJy8qLCAnc2VsZWN0ZWRTdGF0aW9uTGF0aXR1ZGUnLCAnc2VsZWN0ZWRTdGF0aW9uTG9uZ2l0dWRlJyovXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtNYXBDb21wb25lbnRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcclxuICAgIGhpZGVJbWFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd01hcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZWxlbWVudFVSTCA9ICdodHRwczovLzEwLjMyLjIwOS4xOTMvcGl3ZWJhcGkvZWxlbWVudHMvRTBjM0VvSWhISVJFVzVfZTNoWXhQVFZRcVlzVUpsZzk1aEdVR1FBZDJMY3d2UVJGbEJUa2MyTWpJd1hFSkJVbFJjVTFSQlZFbFBUbE0vZWxlbWVudHMnO1xyXG4gICAgbG9jYXRpb25VUkw6IHN0cmluZztcclxuICAgIGltYWdlRGlyZWN0b3J5OiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZFN0YXRpb246IFN0YXRpb24gPSBuZXcgU3RhdGlvbignJywgJycsIDAsIDAsIFtdKTtcclxuICAgIHNlbGVjdGVkU3RhdGlvbkxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZFN0YXRpb25Mb25naXR1ZGU6IG51bWJlcjtcclxuICAgIEBPdXRwdXQoKSBzaG93TWFwdG9BcHAgPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRTdGF0aW9uQXR0cmlidXRlVVJMKCkge1xyXG4gICAgICAgIGxldCBsb2NhdGlvblVSTDogc3RyaW5nO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5lbGVtZW50VVJMKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uVVJMID0gZGF0YS5JdGVtc1t0aGlzLnNlbGVjdGVkU3RhdGlvbi5pZF0uTGlua3MuQXR0cmlidXRlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpLy9cIkdldCBTdGF0aW9ucyBSZXF1ZXN0IEZpbmlzaGVkXCJcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXRpdHVkZSgpIHtcclxuICAgICAgICBsZXQgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMubG9jYXRpb25VUkwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVVSTCA9IGRhdGEuSXRlbXNbMF0uTGlua3MuVmFsdWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQodmFsdWVVUkwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpb25MYXRpdHVkZSA9IE51bWJlcihkYXRhLlZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpLy9cIkdldCBMYXRpdHVkZSBWYWx1ZSBSZXF1ZXN0IEZpbmlzaGVkXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCkvL1wiR2V0IExhdGl0dWRlIFVSTCBSZXF1ZXN0IEZpbmlzaGVkXCJcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb25naXR1ZGUoKSB7XHJcbiAgICAgICAgbGV0IGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5sb2NhdGlvblVSTClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVVJMID0gZGF0YS5JdGVtc1sxXS5MaW5rcy5WYWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldCh2YWx1ZVVSTClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGlvbkxvbmdpdHVkZSA9IE51bWJlcihkYXRhLlZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpLy9cIkdldCBMb25naXR1ZGUgVmFsdWUgUmVxdWVzdCBGaW5pc2hlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpLy9cIkdldCBMb25naXR1ZGUgVVJMIFJlcXVlc3QgRmluaXNoZWRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VEaXJlY3RvcnkgPSBcIi4uL2Fzc2V0cy9pbWcvYmFydC1zeXN0ZW0tbWFwLmdpZlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oaWRlSW1hZ2UgJiYgdGhpcy5sb2NhdGlvblVSTCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZ0RvQ2hlY2soKSBjb25kaXRpb24gMVwiKVxyXG4gICAgICAgICAgICB0aGlzLmdldFN0YXRpb25BdHRyaWJ1dGVVUkwoKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZURpcmVjdG9yeSA9IFwiLi4vYXNzZXRzL2ltZy9sb2FkaW5nX3NwaW5uZXIuZ2lmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uVVJMICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZFN0YXRpb25MYXRpdHVkZSA9PSBudWxsICYmIHRoaXMuc2VsZWN0ZWRTdGF0aW9uTG9uZ2l0dWRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5nRG9DaGVjaygpIGNvbmRpdGlvbiAyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TGF0aXR1ZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRMb25naXR1ZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTdGF0aW9uTGF0aXR1ZGUgIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGVkU3RhdGlvbkxvbmdpdHVkZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01hcHRvQXBwLmVtaXQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
