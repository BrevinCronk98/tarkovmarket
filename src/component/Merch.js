import React from 'react';
import PropTypes from 'prop-types';


function Merch(props) {
    return (
        <React.Fragment>
            <div className='list'>
                <h3>
                    <em>{props.itemName}</em>
                </h3>
                <p> 
                  Description <em>{props.itemDesc}</em>
                </p>

                <p> 
                   Price: <em>{props.itemCost}</em>
                </p>
                
                <p> 
                   Quantity: <em>{props.itemQuant}</em>
                </p>

               <img id="img" src={props.itemPhoto} alt=''/>
            </div>
        </React.Fragment>
    )
}

Merch.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemDesc: PropTypes.string.isRequired,
    itemCost:PropTypes.number.isRequired,
    itemQuant: PropTypes.number.isRequired,
    itemPhoto: PropTypes.string
}

export default Merch;