import React from 'react';
import MerchList from './MerchList';

class MerchControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleonPage: false,
        }
    }

    render(){

        return(
           <React.Fragment>
               
            <MerchList />
           </React.Fragment>
        )
    }
}


export default MerchControl;