import {Component, Input, Output, OnChanges, EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-table-query',
    template: `
        <h2 class="sub-header" [hidden] = "hideTable">Other Arrivals</h2>
        <div class="table-responsive">
            <table class="table table-striped" [hidden] = "hideTable">
                <thead>
                    <tr>
                        <th>Direction</th>
                        <th>Estimated Arrival Time</th>
                        <th>Number of Cars</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <option *ngFor="#station of selectedStationDestinations">
                                {{station}}
                            </option>
                        </td>
                        <td>
                            <option *ngFor="#time of realEstimatedArrivalTimeArray">
                                {{time}}
                            </option>
                        </td>
                        <td>
                            <option *ngFor="#car of realNumberofCarsArray">
                                {{car}}
                            </option>
                        </td>
                    </tr> 
                    <!--<tr>
                        <td>Pittsburg/Bay Point</td>
                        <td>8 minutes</td>
                        <td>7</td>
                    </tr>-->
                </tbody>
            </table>    
        </div>    
    `,
    styleUrls: ['../src/css/dashboard.css'],
})

export class HTTPTableComponent implements OnChanges {
    @Input() queryURLs: string[];
    @Input() hideTable: boolean;
    @Input() selectedStationDestinations: string[];

    realEstimatedArrivalTimeArray: string[] = [];
    realNumberofCarsArray: string[] = [];
    imageDirectory = "../assets/img/loading_spinner.gif";

    constructor(private http: Http) { }

    ngOnChanges() {
        if (this.queryURLs && this.realEstimatedArrivalTimeArray) {
            for (var i = 0, len = this.queryURLs.length; i < len; i++) {
                this.getTime(this.queryURLs[i], i);
                this.getCar(this.queryURLs[i], i);
            }
        }
    }


    getTime(url: string, index: number) {
        let result: string
        this.http.get(url + "|Real Estimated Arrival Time")
            .subscribe(
            resp => {
                let timeData = resp.json();
                let timeValueURL = timeData.Links.Value;
                this.http.get(timeValueURL)
                    .subscribe(
                    resp => {
                        let data = resp.json();
                        result = data.Value;
                        if (result == 'Unavailable' || result == 'Leaving') {

                        }
                        else if (result == '1') {
                            result = result + ' minute'
                        }
                        else {
                            result = result + ' minutes'
                        }
                        this.realEstimatedArrivalTimeArray[index] = result;
                    },
                    error => alert(error),
                    () => console.log()
                    );
            },
            error => alert(error),
            () => console.log()//Get time URL Request Finished
            );
    }

    getCar(url: string, index: number) {
        let result: string;
        this.http.get(url + "|Real Number of Cars")
            .subscribe(
            resp => {
                let carData = resp.json();
                let carValueURL = carData.Links.Value;
                this.http.get(carValueURL)
                    .subscribe(
                    resp => {
                        let data = resp.json();
                        result = data.Value;
                        this.realNumberofCarsArray[index] = result;
                    },
                    error => alert(error),
                    () => console.log()
                    );
            },
            error => alert(error),
            () => console.log()//"Get car URL Request Finished"
            );
    }
}

