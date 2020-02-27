import axios from 'axios'

class VitalDataService {
    retrieveAllVitalSets(name){
        return axios.get(`http://localhost:8080/users/${name}/vitalsets`)
    }
}

export default new VitalDataService