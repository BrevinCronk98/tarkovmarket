import React from 'react';
import MerchList from './MerchList';
import NewMerchForm from './NewMerchForm';

class MerchControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage,
            masterMerchList: []
        }
    }
    
    handleClick = () => {
        this.setState((prevState)=>({ 
        selectionVisible: !prevState.selectionVisible}));
        
    };

    handleAddingNewItem = (newItem) => {
        const newMasterMerchList = this.state.masterMerchList.concat(newItem);
        this.setState({masterMerchList: newMasterMerchList,
        formVisibleonPage: false})
    }
   
    render(){
        let buttonText=null;
        let selectionVisible = null;


        if(this.state.formVisibleOnPage
            selectionVisible = <NewMerchForm />
            buttonText = "Return Vendor"
        }else{
            selectionVisible = <MerchList  />
            //merchList={this.state.masterMerchList}
            buttonText="Return to Form"
        }

        return(
            <React.Fragment>
                
                
                {selectionVisible}
                <button onClick={this.handleClick}>{buttonText}</button>}
            </React.Fragment>
        
        
    }  
}
            

export default MerchControl;