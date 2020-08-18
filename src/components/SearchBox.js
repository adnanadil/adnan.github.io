import React from 'react'
import './SearchBox.css'

function SearchBox ({functionSent}) {

    return(
        <div>

            <input placeholder="Search Country..." onChange={functionSent} />

        </div>
    );
}

export default SearchBox;