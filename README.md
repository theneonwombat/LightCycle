# LightCycle

[LightCycle](https://light-cycle.herokuapp.com/) is a clone of Strava, a popular fitness tracker. The app allows users to map bike ride routes. It also keeps track of several metics on these rides, to allow the rider to see their progress.

# Technologies

This stack utilizes:

- Ruby on Rails

- React

- Redux

- PostgreSQL database

- Google Maps API

- Google Directions API

# Features
## Courses

![Routes](https://github.com/theneonwombat/LightCycle/blob/main/app/assets/images/google_map_route.png)

```javascript

updateCourse(dS, dR) {
  let waypoints = this.pins.slice(1, this.pins.length - 1 )
  .map(pin => ({location: pin.position, stopover: false})) || [];

  if(this.pins.length > 1) {
    dS.route({
      origin: this.pins[0].position,
      waypoints: waypoints,
      destination: this.pins[this.pins.length - 1].position,
      travelMode: this.travelMode
    }, (response, status) => {
      if (status === 'OK') {

        dR.setDirections(response);

        let distance = response.routes[0].legs[0].distance.text;
        this.setState({distance: distance});

        let time = response.routes[0].legs[0].duration.text;
        this.setState({time: time});
      }
    })
  }
}

```