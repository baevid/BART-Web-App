import {Component, Input, Output, SimpleChange, EventEmitter} from 'angular2/core';
import {Station} from './station';

@Component({
    selector: 'my-form',
    template: `      
         <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
            <li><a>
                <label>Please select your station:</label>
                <select ngControl="selectedStation" [(ngModel)]="userForm.selectedStation" (change)="UpdateDestinations(myForm.value.selectedStation)">
                    <option *ngFor="#station of stations" >
                        {{station.name}}
                    </option>
                </select>
            </a></li>
            <li><a>
                <label>Please select your destination:</label>
                <select ngControl="selectedDirection" [(ngModel)]=selectedStationDestination>
                    <option *ngFor="#direction of selectedStationDestinations" >
                        {{direction}}
                    </option>
                </select>
            </a></li>
                     
            <button type="submit" [disabled]="submitted">
                Submit
            </button>
        </form>
    `,
    inputs: ['stations'],
    styleUrls: ['../src/css/app.css'],
})

export class UserForm {
    submitted: boolean = false;
    showImage: boolean = false;
    stations: Station[] = [new Station('12th', '12th St. Oakland City Center', 37.803664, -122.271604, ['24th Street', 'Daly City', 'Fremont', 'Millbrae', 'North Concord', 'Pittsburg/Bay Point', 'Pleasant Hill', 'Richmond', 'SF Airport'])];
    selectedStationDestinations = this.stations[0].destinations;
    selectedStationDestination: string = this.stations[0].destinations[0];
    selectedStationDestinationUrls: string[] = [];
    selectedStation: Station = this.stations[0];
    selectedStationLatitude = this.stations[0].latitude;
    selectedStationLongitude = this.stations[0].longitude;

    @Output() dataQueryURLtoApp = new EventEmitter<string>();
    @Output() dataQueryURLArraytoApp = new EventEmitter<string[]>();
    @Output() selectedStationDestinationstoApp = new EventEmitter<string[]>();
    @Output() selectedStationtoApp = new EventEmitter<Station>();
    @Output() selectedStationLatitudetoApp = new EventEmitter<Number>();
    @Output() selectedStationLongitudetoApp = new EventEmitter<Number>();
    @Output() showImagetoApp = new EventEmitter<Boolean>();

    private userForm: any = {
        selectedStation: this.stations[0].name,
        selectedDirection: this.selectedStationDestinations[0],
    };

    onSubmit(form: any) {
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
            alert("Destination undefined, please refresh the page. (onSubmit)")
        }
    }

    UpdateDestinations(form: any) {
        let index = -1;
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
            //console.log(this.selectedStationDestination);
        }
        else {
            alert("Destination undefined, please refresh the page. (UpdateDefaultDestination)")
        }

    }

    //This method calls the data query component to retrieve the Urls for all the trains in the station
    otherTrains(form: any) {
        for (var i = 0, len = this.selectedStationDestinations.length; i < len; i++) {
            this.selectedStationDestinationUrls[i] = "https://10.32.209.193//piwebapi/attributes?path=\\\\dyang6220\\bart\\stations\\" + form.selectedStation + "\\" + this.selectedStationDestinations[i]
        }
        this.dataQueryURLArraytoApp.emit(this.selectedStationDestinationUrls);
    }
}