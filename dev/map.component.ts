import {Component, OnChanges, Output, EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';

declare var google: any;

@Component({
    selector: 'my-map',
    template: `<p id="googleMap" style="width:500px;height:400px;"></p>`,
    inputs: ['latitude', 'longitude'],
})

export class MapComponent implements OnChanges {
    latitude: number;
    longitude: number;
    showMap: boolean = false;
    @Output() showMaptoImage = new EventEmitter<Boolean>();

    ngOnChanges() {
        if (this.latitude != null && this.longitude != null) {
            var mapProp = {
                center: new google.maps.LatLng(this.latitude, this.longitude),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            this.showMap = true;
            this.showMaptoImage.emit(this.showMap);

            var marker = new google.maps.Marker({
                position: [this.latitude, this.longitude],
                map: map,
                title: 'BART Station'
            });
        }
    }
}