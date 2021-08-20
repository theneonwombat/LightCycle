import React from 'react';
import { useState, useEffect } from 'react';
import mapStyles from './map_styles'

function ShowMap({course}) {

  useEffect(() => {
    const pins = JSON.parse(course.pins_object).pins;

    const mapOptions = {
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
    }
    debugger
    const map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
    
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: { strokeColor: "#FC4C02" },
      suppressBicyclingLayer: true,
      suppressInfoWindows: true,
      suppressMarkers: true,
    })

    window.googleMap = map;

    directionsRenderer.setMap(map);

    pins.forEach( pin => 
      placeMarker(pin));
    
    updateCourse(directionsService, directionsRenderer, pins);

    // return () => {
    //   cleanup
    // }
  }, [])

  function updateCourse(dS, dR, pins) {
    
    let waypoints = pins.slice(1, pins.length - 1 )
    .map(pin => ({
      location: pin, 
      stopover: false})) || [];

    if(pins.length > 1) {
      dS.route({
        origin: pins[0],
        waypoints: waypoints,
        destination: pins[pins.length - 1],
        travelMode: course.travel_mode
      }, (response, status) => {
          if (status === 'OK') {

            dR.setDirections(response);

          }
        }
      )
    }
  }

  function placeMarker(location) {
    // let customIcon;

    let pin = new google.maps.Marker({
      position: location, 
      map: window.googleMap,
      // icon: customIcon,
    })

  };

  return <div className='the-map' id='the-map' >MAP</div>
}

export default ShowMap;