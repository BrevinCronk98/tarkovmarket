import React from 'react';
import Merch from './Merch';
import paca from '../PACA.png';
import ssh from '../ssh.png';
import slick from '../slick.png';



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

function MerchList(){
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

export default MerchList;