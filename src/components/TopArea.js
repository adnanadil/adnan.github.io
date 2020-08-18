import React from 'react'
import SearchBox from './SearchBox'
import './TopArea.css'

function TopArea ({onSearchFunction, onClick1, onClick2}) {
    return(
        <div className = "topArea">
            <h1>Covid-19 Cases World Wide</h1>
            {/*
            <SearchBox
                functionSent = {onSearchFunction}
            ></SearchBox>
            */}
            <input className ="searchBox" placeholder="Search Country..." onChange={onSearchFunction} />
            <div className = "sortMain">
                <label>Sort By:</label>
                <button className = {"active"} onClick = {onClick1}> Overall Cases</button>
                <button className = {"active"} onClick = {onClick2}>Highest Daily cases</button>
            </div>
            
        </div>
    );
}

export default TopArea