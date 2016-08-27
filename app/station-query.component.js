System.register(['angular2/core', './station', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, station_1, http_1;
    var HTTPStationComponent;
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
            }],
        execute: function() {
            HTTPStationComponent = (function () {
                function HTTPStationComponent(http) {
                    this.http = http;
                    this.elementURL = 'https://10.32.209.193/piwebapi/elements/E0c3EoIhHIREW5_e3hYxPTVQqYsUJlg95hGUGQAd2LcwvQRFlBTkc2MjIwXEJBUlRcU1RBVElPTlM/elements';
                    this.stations = [];
                    this.stationListCreated = new core_1.EventEmitter();
                }
                HTTPStationComponent.prototype.getStations = function () {
                    var _this = this;
                    this.http.get(this.elementURL)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        for (var i = 0, len = data.Items.length; i < len; i++) {
                            _this.stations[i] = new station_1.Station('', '', null, null, []);
                            var destinationURL = data.Items[i].Links.Elements;
                            _this.locationURL = data.Items[i].Links.Attributes;
                            _this.stations[i].id = String(i);
                            _this.stations[i].name = data.Items[i].Name;
                            _this.stations[i].destinations = _this.getDestinations(destinationURL);
                            _this.stations[i].latitude = _this.getLatitude(_this.locationURL);
                            _this.stations[i].longitude = _this.getLongitude(_this.locationURL);
                        }
                    }, function (error) { return alert(error); }, function () { return console.log(); });
                };
                HTTPStationComponent.prototype.getDestinations = function (link) {
                    var destinations = [];
                    this.http.get(link)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        for (var i = 0, len = data.Items.length; i < len; i++) {
                            destinations[i] = data.Items[i].Name;
                        }
                    }, function (error) { return alert(error); }, function () { return console.log(); });
                    return destinations;
                };
                HTTPStationComponent.prototype.getLatitude = function (link) {
                    var _this = this;
                    var latitude;
                    this.http.get(link)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        var valueURL = data.Items[0].Links.Value;
                        _this.http.get(valueURL)
                            .subscribe(function (resp) {
                            var data = resp.json();
                            latitude = Number(data.Value);
                        }, function (error) { return alert(error); }, function () { return console.log(); });
                    }, function (error) { return alert(error); }, function () { return console.log(); });
                    return latitude;
                };
                HTTPStationComponent.prototype.getLongitude = function (link) {
                    var _this = this;
                    var longitude;
                    this.http.get(link)
                        .subscribe(function (resp) {
                        var data = resp.json();
                        var valueURL = data.Items[1].Links.Value;
                        _this.http.get(valueURL)
                            .subscribe(function (resp) {
                            var data = resp.json();
                            longitude = Number(data.Value);
                        }, function (error) { return alert(error); }, function () { return console.log(); });
                    }, function (error) { return alert(error); }, function () { return console.log(); });
                    return longitude;
                };
                HTTPStationComponent.prototype.ngOnInit = function () {
                    if (this.elementURL) {
                        this.getStations();
                        this.stationListCreated.emit(this.stations);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HTTPStationComponent.prototype, "stationListCreated", void 0);
                HTTPStationComponent = __decorate([
                    core_1.Component({
                        selector: 'my-station-query',
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPStationComponent);
                return HTTPStationComponent;
            }());
            exports_1("HTTPStationComponent", HTTPStationComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24tcXVlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBT0ksOEJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFOOUIsZUFBVSxHQUFHLGdJQUFnSSxDQUFDO29CQUU5SSxhQUFRLEdBQWMsRUFBRSxDQUFDO29CQUVmLHVCQUFrQixHQUFHLElBQUksbUJBQVksRUFBYSxDQUFDO2dCQUUzQixDQUFDO2dCQUVuQywwQ0FBVyxHQUFYO29CQUFBLGlCQW9CQztvQkFuQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5QkFDekIsU0FBUyxDQUNWLFVBQUEsSUFBSTt3QkFDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3ZCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUNwRCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7NEJBQ3RELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs0QkFDbEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7NEJBQ2xELEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFD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N0ZEO29CQUFDLGFBQU0sRUFBRTs7Z0ZBQUE7Z0JBVmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsRUFBRTtxQkFDZixDQUFDOzt3Q0FBQTtnQkFxR0YsMkJBQUM7WUFBRCxDQW5HQSxBQW1HQyxJQUFBO1lBbkdELHVEQW1HQyxDQUFBIiwiZmlsZSI6InN0YXRpb24tcXVlcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1N0YXRpb259IGZyb20gJy4vc3RhdGlvbic7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktc3RhdGlvbi1xdWVyeScsXHJcbiAgICB0ZW1wbGF0ZTogYGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIVFRQU3RhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlbGVtZW50VVJMID0gJ2h0dHBzOi8vMTAuMzIuMjA5LjE5My9waXdlYmFwaS9lbGVtZW50cy9FMGMzRW9JaEhJUkVXNV9lM2hZeFBUVlFxWXNVSmxnOTVoR1VHUUFkMkxjd3ZRUkZsQlRrYzJNakl3WEVKQlVsUmNVMVJCVkVsUFRsTS9lbGVtZW50cyc7XHJcbiAgICBsb2NhdGlvblVSTDogc3RyaW5nO1xyXG4gICAgc3RhdGlvbnM6IFN0YXRpb25bXSA9IFtdO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzdGF0aW9uTGlzdENyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFN0YXRpb25bXT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldFN0YXRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5lbGVtZW50VVJMKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5JdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlvbnNbaV0gPSBuZXcgU3RhdGlvbignJywgJycsIG51bGwsIG51bGwsIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvblVSTCA9IGRhdGEuSXRlbXNbaV0uTGlua3MuRWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvblVSTCA9IGRhdGEuSXRlbXNbaV0uTGlua3MuQXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpb25zW2ldLmlkID0gU3RyaW5nKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlvbnNbaV0ubmFtZSA9IGRhdGEuSXRlbXNbaV0uTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpb25zW2ldLmRlc3RpbmF0aW9ucyA9IHRoaXMuZ2V0RGVzdGluYXRpb25zKGRlc3RpbmF0aW9uVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpb25zW2ldLmxhdGl0dWRlID0gdGhpcy5nZXRMYXRpdHVkZSh0aGlzLmxvY2F0aW9uVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpb25zW2ldLmxvbmdpdHVkZSA9IHRoaXMuZ2V0TG9uZ2l0dWRlKHRoaXMubG9jYXRpb25VUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0aW9uc1tpXS5uYW1lLCB0aGlzLnN0YXRpb25zW2ldLmxhdGl0dWRlLCB0aGlzLnN0YXRpb25zW2ldLmRlc3RpbmF0aW9uc1swXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzdGluYXRpb25zKGxpbms6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgZGVzdGluYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQobGluaylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEuSXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbnNbaV0gPSBkYXRhLkl0ZW1zW2ldLk5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZXN0aW5hdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGF0aXR1ZGUobGluazogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGxpbmspXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVVSTCA9IGRhdGEuSXRlbXNbMF0uTGlua3MuVmFsdWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQodmFsdWVVUkwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUgPSBOdW1iZXIoZGF0YS5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBsYXRpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb25naXR1ZGUobGluazogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChsaW5rKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVVUkwgPSBkYXRhLkl0ZW1zWzFdLkxpbmtzLlZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHZhbHVlVVJMKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZSA9IE51bWJlcihkYXRhLlZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGxvbmdpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50VVJMKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGlvbnMoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRpb25MaXN0Q3JlYXRlZC5lbWl0KHRoaXMuc3RhdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
