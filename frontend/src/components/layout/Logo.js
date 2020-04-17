import React from 'react';

function Logo(props) {

    return (
        <div>
            <img className="bar-brand" src={props.source} alt="Logo"/>
        </div>

    );
}

export default Logo;
