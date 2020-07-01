import React from 'react';
import Merch from './Merch';
import paca from '../PACA.png';
import ssh from '../ssh.png';
import slick from '../slick.png';
import gen4 from '../gen4.png';
import tv110 from '../tv110.png';
import PropTypes from 'prop-types';



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
    },

    {
        itemName: "Gen4 Assault Armor",
        itemDesc: "Class 5 Throax Armor",
        itemCost: 45000,
        itemQuant: 10,
        itemPhoto: gen4
    },

    {
        itemName: "Wartech TV-110 Plate Carrier",
        itemDesc: "Class 5 Plate Carrier",
        itemCost: 65000,
        itemQuant: 10,
        itemPhoto: tv110
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