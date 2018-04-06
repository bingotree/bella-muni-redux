import axios from 'axios';

class RouteDirections {
  static fetch(route) {
    return axios.get(`http://localhost:3001/routes/${route}/directions`).then(res => res.data);
  }
}
export default RouteDirections;
