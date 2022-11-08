import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { val } from './context';

function Apps (){

  const [value, setValue] = React.useState("")
  return(
    <>
 <React.StrictMode>
    <val.Provider value={[value, setValue]}>
         <App />
    </val.Provider>
  </React.StrictMode>
    
    </>
  )
 }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Apps/>
);