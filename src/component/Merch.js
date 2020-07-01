import React from 'react';
import PropTypes from 'prop-types';


function Merch(props) {
    return (
        <React.Fragment>
            <div class='list'>
                <h3>
                    <em>{props.itemName}</em>
                </h3>
                <p> 
                    <em>{props.itemDesc}</em>
                </p>

                <p> 
                    <em>{props.itemCost}</em>
                </p>
                
                <p> 
                    <em>{props.itemQuant}</em>
                </p>
            </div>
        </React.Fragment>
    )
}

Merch.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemDesc: PropTypes.string.isRequired,
    itemCost:PropTypes.number.isRequired,
    itemQuant: PropTypes.number.isRequired
}

export default Merch;