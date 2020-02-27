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
                console.log(response);

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
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Systolic BP</th>
                                <th>Diastolic BP</th>
                                <th>Pulse</th>
                                <th>SpO2</th>
                                <th>Temperature</th>
                                <th>Time Stamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vitalsets.map(
                                    vitalset =>
                                        <tr key={vitalset.id}>
                                            <td>{vitalset.patientName}</td>
                                            <td>{vitalset.systolic}</td>
                                            <td>{vitalset.diastolic}</td>
                                            <td>{vitalset.pulse}</td>
                                            <td>{vitalset.spo2}</td>
                                            <td>{vitalset.temperature}</td>
                                            <td>{vitalset.timeStamp}</td>
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