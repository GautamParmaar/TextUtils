// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'


import TextForms from './components/TextForms'
import React from 'react'
import DismissingAlert from './components/DismissingAlert';
import { BrowserRouter, Route,Routes } from 'react-router-dom';






function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null);

  const showAlert = ()=>{
    
    }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled ",'success')
      document.title="TextUtils - Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled ",'success')


    }
  }
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    
     <Route path="/" element={<Navbar title="TextUtils"aboutText="About" mode={mode} toggleMode={toggleMode}/>}
     />
     <Route path="/about" element=
     {<><Navbar title="TextUtils"aboutText="About" mode={mode} toggleMode={toggleMode}/><About/></>} />
     <Route path="/none" element={<><Navbar title="TextUtils"aboutText="About" mode={mode} toggleMode={toggleMode}/><TextForms showAlert={showAlert} mode={mode} heading="Enter Your Text to Analyze"/></>} />
    </Routes>
    </BrowserRouter>
    <DismissingAlert alert={alert}/>
    <div className="container my-3">
    
           
          
          
   
         
        
  
  
</div>
      
          
        
    
       
    </>
  );
}

export default App;
