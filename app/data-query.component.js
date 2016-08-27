System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HTTPDataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HTTPDataComponent = (function () {
                function HTTPDataComponent(http) {
                    this.http = http;
                }
                HTTPDataComponent.prototype.ngOnChanges = function () {
                    if (this.queryURL) {
                        this.getTime(this.queryURL);
                        this.getCar(this.queryURL);
                    }
                };
                HTTPDataComponent.prototype.getTime = function (url) {
                    var _this = this;
                    var result;
                    this.http.get(url + "|Real Estimated Arrival Time")
                        .subscribe(function (resp) {
                        var timeData = resp.json();
                        var timeValueURL = timeData.Links.Value;
                        _this.http.get(timeValueURL)
                            .subscribe(function (resp) {
                            var data = resp.json();
                            result = data.Value;
                            if (result == 'Unavailable' || result == 'Leaving') {
                            }
                            else if (result == '1') {
                                result = result + ' minute';
                            }
                            else {
                                result = result + ' minutes';
                            }
                            _this.realEstimatedArrivalTime = result;
                        }, function (error) { return alert(error); }, function () { return console.log(); });
                    }, function (error) { return alert(error); }, function () { return console.log(); });
                };
                HTTPDataComponent.prototype.getCar = function (url) {
                    var _this = this;
                    var result;
                    this.http.get(url + "|Real Number of Cars")
                        .subscribe(function (resp) {
                        var carData = resp.json();
                        var carValueURL = carData.Links.Value;
                        _this.http.get(carValueURL)
                            .subscribe(function (resp) {
                            var data = resp.json();
                            result = data.Value;
                            _this.realNumberofCars = result;
                        }, function (error) { return alert(error); }, function () { return console.log(); });
                    }, function (error) { return alert(error); }, function () { return console.log(); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HTTPDataComponent.prototype, "queryURL", void 0);
                HTTPDataComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-query',
                        template: "\n        <li><a>Estimated Arrival Time: {{realEstimatedArrivalTime}}</a></li>\n        <li><a>Number of Cars: {{realNumberofCars}}</a></li>\n    ",
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPDataComponent);
                return HTTPDataComponent;
            }());
            exports_1("HTTPDataComponent", HTTPDataComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtcXVlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBS0ksMkJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBSSxDQUFDO2dCQUVuQyx1Q0FBVyxHQUFYO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxtQ0FBTyxHQUFQLFVBQVEsR0FBVztvQkFBbkIsaUJBOEJDO29CQTdCRyxJQUFJLE1BQWMsQ0FBQTtvQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLDhCQUE4QixDQUFDO3lCQUM5QyxTQUFTLENBQ1YsVUFBQSxJQUFJO3dCQUNBLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQzs2QkFDdEIsU0FBUyxDQUNWLFVBQUEsSUFBSTs0QkFDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUNwQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksYUFBYSxJQUFJLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUVyRCxDQUFDOzRCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDckIsTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUE7NEJBQy9CLENBQUM7NEJBQ0QsSUFBSSxDQUFDLENBQUM7Z0NBQ0YsTUFBTSxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUE7NEJBQ2hDLENBQUM7NEJBQ0QsS0FBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQzt3QkFDM0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBYixDQUFhLENBQ2xCLENBQUM7b0JBQ1YsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBYixDQUFhLENBQ2xCLENBQUM7Z0JBQ1YsQ0FBQztnQkFFRCxrQ0FBTSxHQUFOLFVBQU8sR0FBVztvQkFBbEIsaUJBcUJDO29CQXBCRyxJQUFJLE1BQWMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLHNCQUFzQixDQUFDO3lCQUN0QyxTQUFTLENBQ1YsVUFBQSxJQUFJO3dCQUNBLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQ3RDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzs2QkFDckIsU0FBUyxDQUNWLFVBQUEsSUFBSTs0QkFDQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUNwQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO3dCQUNuQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFiLENBQWEsQ0FDbEIsQ0FBQztvQkFDVixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQVosQ0FBWSxFQUNyQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFiLENBQWEsQ0FDbEIsQ0FBQztnQkFDVixDQUFDO2dCQWxFRDtvQkFBQyxZQUFLLEVBQUU7O21FQUFBO2dCQVRaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSxvSkFHVDtxQkFDSixDQUFDOztxQ0FBQTtnQkFzRUYsd0JBQUM7WUFBRCxDQXBFQSxBQW9FQyxJQUFBO1lBcEVELGlEQW9FQyxDQUFBIiwiZmlsZSI6ImRhdGEtcXVlcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1kYXRhLXF1ZXJ5JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGxpPjxhPkVzdGltYXRlZCBBcnJpdmFsIFRpbWU6IHt7cmVhbEVzdGltYXRlZEFycml2YWxUaW1lfX08L2E+PC9saT5cclxuICAgICAgICA8bGk+PGE+TnVtYmVyIG9mIENhcnM6IHt7cmVhbE51bWJlcm9mQ2Fyc319PC9hPjwvbGk+XHJcbiAgICBgLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhUVFBEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xyXG4gICAgQElucHV0KCkgcXVlcnlVUkw6IHN0cmluZztcclxuICAgIHJlYWxFc3RpbWF0ZWRBcnJpdmFsVGltZTogc3RyaW5nO1xyXG4gICAgcmVhbE51bWJlcm9mQ2Fyczogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnlVUkwpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUaW1lKHRoaXMucXVlcnlVUkwpO1xyXG4gICAgICAgICAgICB0aGlzLmdldENhcih0aGlzLnF1ZXJ5VVJMKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZSh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZ1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsICsgXCJ8UmVhbCBFc3RpbWF0ZWQgQXJyaXZhbCBUaW1lXCIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVEYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZVZhbHVlVVJMID0gdGltZURhdGEuTGlua3MuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KHRpbWVWYWx1ZVVSTClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRhLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09ICdVbmF2YWlsYWJsZScgfHwgcmVzdWx0ID09ICdMZWF2aW5nJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyAnIG1pbnV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICcgbWludXRlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWxFc3RpbWF0ZWRBcnJpdmFsVGltZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsICsgXCJ8UmVhbCBOdW1iZXIgb2YgQ2Fyc1wiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJEYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyVmFsdWVVUkwgPSBjYXJEYXRhLkxpbmtzLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldChjYXJWYWx1ZVVSTClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRhLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWxOdW1iZXJvZkNhcnMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
