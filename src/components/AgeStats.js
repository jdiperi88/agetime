import React, {Component} from 'react'
import Party from '../assets/party.gif'

class AgeStats extends Component {
    constructor(props){
        super(props)
    }
    timeSince(date){
        let today = new Date().getTime();
        let otherDay = new Date(date).getTime();
        let difference = Math.abs(today-otherDay);
        let days = Math.floor(difference/(1000*3600*24))
        let years = Math.floor(days/365);
        days -= years*365
        let months = Math.floor(days/31);
        days-=months*31;
        return `${years} years ${months} months ${days} days`
    }
    render(){
        return(
            <div>
                <h3>{this.props.date}</h3>
                <h4>congrats on {this.timeSince(this.props.date)}</h4>
                <img src={Party} alt='party' className='party'/>
            </div>
        )
    }
}

export default AgeStats;