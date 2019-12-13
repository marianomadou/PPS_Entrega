import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-direction-geo',
  templateUrl: './direction-geo.page.html',
  styleUrls: ['./direction-geo.page.scss'],
})
export class DirectionGeoPage implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  constructor(private fb: FormBuilder, private geolocation: Geolocation) {
    this.createDirectionForm();
  }

  ngOnInit() {
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
      var actual=this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
      console.log('latitud actual: ', this.currentLocation.lat + ' longitud actual: ', this.currentLocation.lng);
    });
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 12,
      center: {lat: -34.609100, lng: -58.370157}
    });
    this.directionsDisplay.setMap(map);

  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    var destino= formValues.destination;
    console.log('destino: ', destino)
    this.directionsService.route({
      origin: this.currentLocation,
      destination: destino,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);

        var myLatLngCurrent = new google.maps.LatLng(this.currentLocation.lat, this.currentLocation.lng); 
        console.log('current location lat', myLatLngCurrent);

        
        var myLatLngDestiny = new google.maps.LatLng(destino); 
        console.log('destiny location lat', myLatLngDestiny );


        var distancia=google.maps.geometry.spherical.computeDistanceBetween (myLatLngCurrent , myLatLngDestiny);
        console.log('distancia entre puntos: ', distancia)



      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
//paseo colon 275, buenos aires, argentina