import React, {Component} from 'react'
import moment from 'moment'
import VitalDataService from '../api/VitalDataService'
import AuthenticationService from './AuthenticationService'

class VitalList extends Component {
    constructor(props){
        super(props)
        this.state = {
           vitalsets: [] 
        }
    }

    componentDidMount = () => {
        let username = AuthenticationService.getLoggedInUserName()
        VitalDataService.retrieveAllVitalSets(username)
        .then(
            response => {
                this.setState({
                    vitalsets: response.data
                })
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Vital Sets</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Systolic BP</th>
                                <th>Diastolic BP</th>
                                <th>Pulse</th>
                                <th>SpO2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vitalsets.map(
                                    vitalset =>
                                        <tr key={vitalset.id}>
                                            <td>{vitalset.patientName}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                    </div>
                </div>
            </div>
        )
    }
}

export default VitalList