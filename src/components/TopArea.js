import React from 'react'
import './TopArea.css'

function TopArea ({onSearchFunction, onClick1, onClick2}) {
    
    /*
            <div className = "sortMain">
                <label className = "labelA">Sort By:</label>
                <button className = {"active"} onClick = {onClick1}> Overall Cases</button>
                <button className = {"active"} onClick = {onClick2}>Highest Daily cases</button>
            </div>
     */

   
        return(
            <div className = "topArea">
                <p>Covid-19 Cases</p>
                <div></div>
                <input 
                 className ="searchBox" placeholder="Search Country.." onChange={onSearchFunction} />
                
                
            </div>
        );
    
    
    
}

export default TopArea