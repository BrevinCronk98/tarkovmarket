import React from 'react';
import PropTypes from 'prop-types';


//   function Merch(props) {
    class Merch extends React.Component {
        constructor(props){
            super(props);
            this.state ={
                ragManVedor: []
            };
    
        }

    render()
    {
        return (
            <React.Fragment>
                <div className='list'>
                    <h3>
                        <em>{this.props.itemName}</em>
                    </h3>
                    <p> 
                      Description <em>{this.props.itemDesc}</em>
                    </p>
    
                    <p> 
                       Price: <em>{this.props.itemCost}</em>
                    </p>
                    
                    <p> 
                       Quantity: <em>{this.props.itemQuant}</em>
                    </p>
    
                   <img id="img" src={this.props.itemPhoto} alt=''/>
                    
                   <button id='btn' onClick={this.handleBuyRequest}>BUY ME NOW</button>
                </div>
            </React.Fragment>
        )
    }
   
}

Merch.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemDesc: PropTypes.string.isRequired,
    itemCost:PropTypes.number.isRequired,
    itemQuant: PropTypes.number.isRequired,
    itemPhoto: PropTypes.string
}



export default Merch;