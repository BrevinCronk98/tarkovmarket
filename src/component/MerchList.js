import React from 'react';
import Merch from './Merch';



const ragManVendor = [
    {
        itemName: "Paca",
        itemDesc:"Class 2 Body Armor",
        itemCost: 24535,
        itemQuant: 25,     
    },
    {
        itemName: "SSh-68 helmet",
        itemDesc: "Class 3 Helmet",
        itemCost: 18329,
        itemQuant: 15



    },
    {
        itemName: "Slick Plate Carrier",
        itemDesc: "Class 6 Throax Armor",
        ItemCost: 65000,
        ItemQuan: 10
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