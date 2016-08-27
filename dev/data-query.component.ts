import {Component, Input, Output, OnChanges, EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-data-query',
    template: `
        <li><a>Estimated Arrival Time: {{realEstimatedArrivalTime}}</a></li>
        <li><a>Number of Cars: {{realNumberofCars}}</a></li>
    `,
})

export class HTTPDataComponent implements OnChanges{
    @Input() queryURL: string;
    realEstimatedArrivalTime: string;
    realNumberofCars: string;

    constructor(private http: Http) { }

    ngOnChanges() {
        if (this.queryURL) {
            this.getTime(this.queryURL);
            this.getCar(this.queryURL);
        }
    }

    getTime(url: string) {
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
                        this.realEstimatedArrivalTime = result;
                    },
                    error => alert(error),
                    () => console.log()
                    );
            },
            error => alert(error),
            () => console.log()
            );
    }

    getCar(url: string) {
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
                        this.realNumberofCars = result;
                    },
                    error => alert(error),
                    () => console.log()
                    );
            },
            error => alert(error),
            () => console.log()
            );
    }
}