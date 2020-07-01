import React from 'react';
import Header from './Header';
import MerchControl from './MerchControl'


function App() {
    return (
        <React.Fragment>

            <div class="header">
            <Header />
            </div>
        

        <div class="item-grid">
        <MerchControl />
        </div>
        


        </ React.Fragment>
    );  
}


export default App;