import axios from 'axios';

class Routes {
  static fetch() {
    return axios.get(`http://localhost:3001/routes`).then(res => res.data);
  }
}
export default Routes;
