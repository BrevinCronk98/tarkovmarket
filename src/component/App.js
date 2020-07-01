import React from 'react';
import Header from './Header';
import MerchControl from './MerchControl'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <React.Fragment>

            <div className="header">
            <Header />
            </div>
        

        <div className="container" id='item-grid'>
        <MerchControl />
        </div>
        


        </ React.Fragment>
    );  
}


export default App;