import {Component, OnInit, OnChanges, DoCheck, Output, EventEmitter} from 'angular2/core';
import {Station} from './station';
import {Http} from 'angular2/http';
import {MapComponent} from './map.component';

@Component({
    selector: 'my-image',
    template: `
        <img src={{imageDirectory}} width="400" height="400" alt="BART Map not Available." [hidden] = "showMap">
        <!--<p>{{selectedStation.name}}: NOT IMPORTANT: ({{selectedStation.latitude}}, {{selectedStation.longitude}}) {{selectedStation.destinations[1]}}</p>-->
        <!--<p>{{selectedStation.name}}: REAL COORDINATES:({{selectedStationLatitude}}, {{selectedStationLongitude}})</p>-->
        <my-map [latitude]="selectedStationLatitude" [longitude]="selectedStationLongitude" (showMaptoImage)="showMap=$event" [hidden] = "!showMap"></my-map>    
        `,
    inputs: ['selectedStation', 'hideImage'/*, 'selectedStationLatitude', 'selectedStationLongitude'*/],
    directives: [MapComponent],
})

export class ImageComponent implements OnInit, DoCheck {
    hideImage: boolean = false;
    showMap: boolean = false;
    elementURL = 'https://10.32.209.193/piwebapi/elements/E0c3EoIhHIREW5_e3hYxPTVQqYsUJlg95hGUGQAd2LcwvQRFlBTkc2MjIwXEJBUlRcU1RBVElPTlM/elements';
    locationURL: string;
    imageDirectory: string;
    selectedStation: Station = new Station('', '', 0, 0, []);
    selectedStationLatitude: number;
    selectedStationLongitude: number;
    @Output() showMaptoApp = new EventEmitter<Boolean>();

    constructor(private http: Http) { }

    getStationAttributeURL() {
        let locationURL: string;
        this.http.get(this.elementURL)
            .subscribe(
            resp => {
                let data = resp.json();
                this.locationURL = data.Items[this.selectedStation.id].Links.Attributes;
            },
            error => alert(error),
            () => console.log()//"Get Stations Request Finished"
            );
    }

    getLatitude() {
        let latitude: number;
        this.http.get(this.locationURL)
            .subscribe(
            resp => {
                let data = resp.json();
                let valueURL = data.Items[0].Links.Value
                this.http.get(valueURL)
                    .subscribe(
                    resp => {
                        let data = resp.json();
                        this.selectedStationLatitude = Number(data.Value);
                    },
                    error => alert(error),
                    () => console.log()//"Get Latitude Value Request Finished"
                    );
            },
            error => alert(error),
            () => console.log()//"Get Latitude URL Request Finished"
            );
    }

    getLongitude() {
        let longitude: number;
        this.http.get(this.locationURL)
            .subscribe(
            resp => {
                let data = resp.json();
                let valueURL = data.Items[1].Links.Value
                this.http.get(valueURL)
                    .subscribe(
                    resp => {
                        let data = resp.json();
                        this.selectedStationLongitude = Number(data.Value);
                    },
                    error => alert(error),
                    () => console.log()//"Get Longitude Value Request Finished"
                    );
            },
            error => alert(error),
            () => console.log()//"Get Longitude URL Request Finished"
            );
    }

    ngOnInit() {
        this.imageDirectory = "../assets/img/bart-system-map.gif";
    }

    ngDoCheck() {
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
    }
}