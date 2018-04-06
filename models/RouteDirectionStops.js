import axios from 'axios';

class RouteDirectionStops {
  static fetch(route, direction) {
    return axios.get(`http://localhost:3001/routes/${route}/directions/${direction}`).then(res => res.data);
  }
}
export default RouteDirectionStops;
