import React from 'react';
import Merch from './Merch';
import paca from '../PACA.png';
import ssh from '../ssh.png';
import slick from '../slick.png';
import gen4 from '../Gen4assault.png'
import tv110 from '../Wartech_TV-110_plate_carrier_icon.png'
import PropTypes from 'prop-types'



const ragManVendor = [
    {
        itemName: "Paca Soft Armor",
        itemDesc:"Class 2 Body Armor",
        itemCost: 24535,
        itemQuant: 25,
        itemPhoto: paca     
    },
    {
        itemName: "SSh-68 helmet",
        itemDesc: "Class 3 Helmet",
        itemCost: 18329,
        itemQuant: 15,
        itemPhoto: ssh



    },
    {
        itemName: "Slick Plate Carrier",
        itemDesc: "Class 6 Throax Armor",
        itemCost: 65000,
        itemQuant: 10,
        itemPhoto: slick
    }
]

function MerchList(props){
    return(
        <React.Fragment>
            {ragManVendor.map((merch,index) =>
            <Merch
            itemName={merch.itemName}
            itemDesc={merch.itemDesc}
            itemCost={merch.itemCost}
            itemQuant={merch.itemQuant}
            itemPhoto = {merch.itemPhoto}
            key={index} />)}
        </React.Fragment>
    )
}
MerchList.propTypes = {
    merchList: PropTypes.array
}



export default MerchList;