import  { v4 } from 'uuid'
import React from 'react'


function NewMerchForm() {
    return ( 

        <React.Fragment>

        <form>
            <input type='text' name='itemName' placeholder='Enter Item Name'/>
            <input type='text' name='itemDesc' placeholder='Enter Item Description'/>
            <input type='number' name='itemCost' placeholder='Enter Item Cost'/>
            <input type='number' name='itemQuant' placeholder='Enter Item Quanity'/>
            <button type='submit'>Help</button>
        </form>

            
        </React.Fragment>
        
    )
}






export default NewMerchForm;