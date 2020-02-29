import React, {Component} from 'react'
import '../App.css'


class Footer extends Component {
    render(){
        return(
            <div className="footer-margin">
            <div className = "footer bg-dark">
                Created with  <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
</svg>  by Sarah Daniels
            </div>
            </div>
        )
    }
}

export default Footer