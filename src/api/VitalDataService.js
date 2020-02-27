import axios from 'axios'

class VitalDataService {
    retrieveAllVitalSets(name){
        return axios.get(`http://localhost:8080/users/${name}/vitalsets`)
    }

    deleteVitalSet(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/vitalsets/${id}`)
    }
}

export default new VitalDataService