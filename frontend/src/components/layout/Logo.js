import React from 'react';

function Logo(props){

    return(
        <div>
            <img class = "bar-brand" src={props.source} alt="Logo"/>
        </div>

    );
}

export default Logo;