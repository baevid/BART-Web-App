import {Component} from 'angular2/core';
import {HTTPDataComponent} from './data-query.component';
import {HTTPStationComponent} from './station-query.component';
import {HTTPTableComponent} from './table-query.component';
import {UserForm} from './form.component';
import {ImageComponent} from './image.component';
import {Station} from './station';

@Component({
    templateUrl: `dev/app.component.html`,
    directives: [HTTPDataComponent, HTTPStationComponent, HTTPTableComponent, UserForm, ImageComponent],
    styleUrls: ['../src/css/dashboard.css'],
})

export class AppComponent {
    dataQueryURL: string;
    dataQueryURLArray: string[] = [];
    stationList: Station[];
    selectedStationDestinationsArray: string[] = [];
    imageStation: Station = new Station('0', '12th St. Oakland City Center', 37.803664, -122.271604, ['24th Street', 'Daly City', 'Fremont', 'Millbrae', 'North Concord', 'Pittsburg/Bay Point', 'Pleasant Hill', 'Richmond', 'SF Airport']);
    imageStationLatitude: number;
    imageStationLongitude: number;
    hideImageApp: boolean;
    hideDisplayApp: boolean = true;
}