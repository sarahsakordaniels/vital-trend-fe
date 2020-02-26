import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Logout extends Component {
    render(){
        return(
        <div className='center'>
            <h3>You are logged out.</h3>
            <p>Click <Link to='/login'>here</Link> to log back in.</p>    
        </div>
        )
    }
}
export default Logout