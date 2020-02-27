import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VitalDataService from '../api/VitalDataService'

class Home extends Component {

    constructor(props) {
        super(props)

    }

    getVitalDataService(){
        VitalDataService.executeVitalDataService()
    }

    render() {

        return (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your stuff <Link to="/vitallist">here</Link>.
                </div>
                <button onClick={this.getVitalDataService}>Click Me</button>
            </div>
        )
    }
}

export default Home