import React from 'react'
import './CounrtyCard.css'

const CounrtyCard = (props) => {

    {if (props.sorted){
        return(
            <div className = "Card">
                <img src = {props.link}/>
                <p className = "countryName">{props.countryName}</p>
                <p className = "casesToday">{`New Confirmed Cases: ${props.casesToday}`}</p>
                <p className = "totalCase">{`Total Confirmed Cases: ${props.totalCase}`}</p>
                <p className = "TotalDeaths">{`Total Deaths: ${props.TotalDeaths}`}</p>
                <p className = "date">{`Updated: ${props.date}`}</p>
                <p className = "rank">{`rank: ${props.rank}`}</p>
            </div>
        );
    }else {
        return(
            <div className = "Card">
                <img src = {props.link}/>
                <p className = "countryName">{props.countryName}</p>
                <p className = "casesToday">{`New Confirmed Cases: ${props.casesToday}`}</p>
                <p className = "totalCase">{`Total Confirmed Cases: ${props.totalCase}`}</p>
                <p className = "TotalDeaths">{`Total Deaths: ${props.TotalDeaths}`}</p>
                <p className = "date">{`Updated: ${props.date}`}</p>
            </div>
        );
    }

}
    
}

export default CounrtyCard;