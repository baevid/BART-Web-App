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
    var HTTPTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HTTPTableComponent = (function () {
                function HTTPTableComponent(http) {
                    this.http = http;
                    this.realEstimatedArrivalTimeArray = [];
                    this.realNumberofCarsArray = [];
                    this.imageDirectory = "../assets/img/loading_spinner.gif";
                }
                HTTPTableComponent.prototype.ngOnChanges = function () {
                    if (this.queryURLs && this.realEstimatedArrivalTimeArray) {
                        for (var i = 0, len = this.queryURLs.length; i < len; i++) {
                            this.getTime(this.queryURLs[i], i);
                            this.getCar(this.queryURLs[i], i);
                        }
                    }
                };
                HTTPTableComponent.prototype.getTime = function (url, index) {
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
                            _this.realEstimatedArrivalTimeArray[index] = result;
                        }, function (error) { return alert(error); }, function () { return console.log(); });
                    }, function (error) { return alert(error); }, function () { return console.log(); } //Get time URL Request Finished
                     //Get time URL Request Finished
                    );
                };
                HTTPTableComponent.prototype.getCar = function (url, index) {
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
                            _this.realNumberofCarsArray[index] = result;
                        }, function (error) { return alert(error); }, function () { return console.log(); });
                    }, function (error) { return alert(error); }, function () { return console.log(); } //"Get car URL Request Finished"
                     //"Get car URL Request Finished"
                    );
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HTTPTableComponent.prototype, "queryURLs", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], HTTPTableComponent.prototype, "hideTable", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HTTPTableComponent.prototype, "selectedStationDestinations", void 0);
                HTTPTableComponent = __decorate([
                    core_1.Component({
                        selector: 'my-table-query',
                        template: "\n        <h2 class=\"sub-header\" [hidden] = \"hideTable\">Other Arrivals</h2>\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped\" [hidden] = \"hideTable\">\n                <thead>\n                    <tr>\n                        <th>Direction</th>\n                        <th>Estimated Arrival Time</th>\n                        <th>Number of Cars</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <option *ngFor=\"#station of selectedStationDestinations\">\n                                {{station}}\n                            </option>\n                        </td>\n                        <td>\n                            <option *ngFor=\"#time of realEstimatedArrivalTimeArray\">\n                                {{time}}\n                            </option>\n                        </td>\n                        <td>\n                            <option *ngFor=\"#car of realNumberofCarsArray\">\n                                {{car}}\n                            </option>\n                        </td>\n                    </tr> \n                    <!--<tr>\n                        <td>Pittsburg/Bay Point</td>\n                        <td>8 minutes</td>\n                        <td>7</td>\n                    </tr>-->\n                </tbody>\n            </table>    \n        </div>    \n    ",
                        styleUrls: ['../src/css/dashboard.css'],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTableComponent);
                return HTTPTableComponent;
            }());
            exports_1("HTTPTableComponent", HTTPTableComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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aWxlIjoidGFibGUtcXVlcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS10YWJsZS1xdWVyeScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMiBjbGFzcz1cInN1Yi1oZWFkZXJcIiBbaGlkZGVuXSA9IFwiaGlkZVRhYmxlXCI+T3RoZXIgQXJyaXZhbHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIiBbaGlkZGVuXSA9IFwiaGlkZVRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlyZWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVzdGltYXRlZCBBcnJpdmFsIFRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIENhcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjc3RhdGlvbiBvZiBzZWxlY3RlZFN0YXRpb25EZXN0aW5hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N0YXRpb259fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3RpbWUgb2YgcmVhbEVzdGltYXRlZEFycml2YWxUaW1lQXJyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RpbWV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI2NhciBvZiByZWFsTnVtYmVyb2ZDYXJzQXJyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Nhcn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPiBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGl0dHNidXJnL0JheSBQb2ludDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD44IG1pbnV0ZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj4tLT5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+ICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vc3JjL2Nzcy9kYXNoYm9hcmQuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSFRUUFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIHF1ZXJ5VVJMczogc3RyaW5nW107XHJcbiAgICBASW5wdXQoKSBoaWRlVGFibGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZFN0YXRpb25EZXN0aW5hdGlvbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIHJlYWxFc3RpbWF0ZWRBcnJpdmFsVGltZUFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcmVhbE51bWJlcm9mQ2Fyc0FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaW1hZ2VEaXJlY3RvcnkgPSBcIi4uL2Fzc2V0cy9pbWcvbG9hZGluZ19zcGlubmVyLmdpZlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnlVUkxzICYmIHRoaXMucmVhbEVzdGltYXRlZEFycml2YWxUaW1lQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMucXVlcnlVUkxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbWUodGhpcy5xdWVyeVVSTHNbaV0sIGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYXIodGhpcy5xdWVyeVVSTHNbaV0sIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRUaW1lKHVybDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nXHJcbiAgICAgICAgdGhpcy5odHRwLmdldCh1cmwgKyBcInxSZWFsIEVzdGltYXRlZCBBcnJpdmFsIFRpbWVcIilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZURhdGEgPSByZXNwLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lVmFsdWVVUkwgPSB0aW1lRGF0YS5MaW5rcy5WYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQodGltZVZhbHVlVVJMKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRhdGEuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gJ1VuYXZhaWxhYmxlJyB8fCByZXN1bHQgPT0gJ0xlYXZpbmcnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCA9PSAnMScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArICcgbWludXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgJyBtaW51dGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhbEVzdGltYXRlZEFycml2YWxUaW1lQXJyYXlbaW5kZXhdID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCkvL0dldCB0aW1lIFVSTCBSZXF1ZXN0IEZpbmlzaGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyKHVybDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsICsgXCJ8UmVhbCBOdW1iZXIgb2YgQ2Fyc1wiKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXJEYXRhID0gcmVzcC5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FyVmFsdWVVUkwgPSBjYXJEYXRhLkxpbmtzLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldChjYXJWYWx1ZVVSTClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3AuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYXRhLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWxOdW1iZXJvZkNhcnNBcnJheVtpbmRleF0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcclxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coKS8vXCJHZXQgY2FyIFVSTCBSZXF1ZXN0IEZpbmlzaGVkXCJcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
