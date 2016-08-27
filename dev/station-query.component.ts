import {Component, Output, OnInit, EventEmitter} from 'angular2/core';
import {Station} from './station';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-station-query',
    template: ``
})

export class HTTPStationComponent implements OnInit {
    elementURL = 'https://10.32.209.193/piwebapi/elements/E0c3EoIhHIREW5_e3hYxPTVQqYsUJlg95hGUGQAd2LcwvQRFlBTkc2MjIwXEJBUlRcU1RBVElPTlM/elements';
    locationURL: string;
    stations: Station[] = [];

    @Output() stationListCreated = new EventEmitter<Station[]>();

    constructor(private http: Http) { }

    getStations() {
        this.http.get(this.elementURL)
            .subscribe(
            resp => {
                let data = resp.json();
                for (var i = 0, len = data.Items.length; i < len; i++) {
                    this.stations[i] = new Station('', '', null, null, [])
                    let destinationURL = data.Items[i].Links.Elements;
                    this.locationURL = data.Items[i].Links.Attributes;
                    this.stations[i].id = String(i);
                    this.stations[i].name = data.Items[i].Name;
                    this.stations[i].destinations = this.getDestinations(destinationURL);
                    this.stations[i].latitude = this.getLatitude(this.locationURL);
                    this.stations[i].longitude = this.getLongitude(this.locationURL);
                    //console.log(this.stations[i].name, this.stations[i].latitude, this.stations[i].destinations[0])
                }
            },
            error => alert(error),
            () => console.log()
            );
    }

    getDestinations(link: string): string[] {
        let destinations: string[] = [];
        this.http.get(link)
            .subscribe(
            resp => {
                let data = resp.json();
                for (var i = 0, len = data.Items.length; i < len; i++) {
                    destinations[i] = data.Items[i].Name;
                }
            },
            error => alert(error),
            () => console.log()
            );
        return destinations;
    }

    getLatitude(link: string): number {
        let latitude: number;
        this.http.get(link)
            .subscribe(
            resp => {
                let data = resp.json();
                let valueURL = data.Items[0].Links.Value
                this.http.get(valueURL)
                    .subscribe(
                    resp => {
                        let data = resp.json();
                        latitude = Number(data.Value);
                    },
                    error => alert(error),
                    () => console.log()
                    );
            },
            error => alert(error),
            () => console.log()
            );
        return latitude;
    }

    getLongitude(link: string): number {
        let longitude: number;
        this.http.get(link)
            .subscribe(
            resp => {
                let data = resp.json();
                let valueURL = data.Items[1].Links.Value
                this.http.get(valueURL)
                    .subscribe(
                    resp => {
                        let data = resp.json();
                        longitude = Number(data.Value);
                    },
                    error => alert(error),
                    () => console.log()
                    );
            },
            error => alert(error),
            () => console.log()
            );
        return longitude;
    }

    ngOnInit() {
        if (this.elementURL) {
            this.getStations()
            this.stationListCreated.emit(this.stations);
        }
    }
}

