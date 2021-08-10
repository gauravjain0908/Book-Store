import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./firstComponent";  // here we have imported our first component 
import SecondComponent from "./SecondComponent";

ReactDOM.render(

<React.StrictMode>
    
    
    <SecondComponent />

    <FirstComponent />  {/* this is how we use a component */}

  </React.StrictMode>,
  
  document.getElementById('root')
);


