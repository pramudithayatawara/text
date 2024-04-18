import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AddInstalllment from './AddInstallment';
import Updateinstallment from './updateinstallment';
import Remove from './remove';
import Page1 from './page1';
import Home from './home';
import UseInstallemnt from './useInstallemnt';
import Addsucccuesful from './addsucccuesful';
import Removsuccussfull from './removsuccussfull';
import Updatesuccusful from './assets/updatesuccusful';
import Reginstallment from './reginstallment';
import Viwe from './viwe';
import {BrowserRouter , Routes,Route} from"react-router-dom"


function App() {
  useEffect(()=>{
    axios.get('http://localhost:3000/getUsers' )
    .then(users=>setUsers(users.data))
    .catch(err =>console.log(err))
  },[])
  return (
    
    
    <div>
     


     
       
       
      <BrowserRouter>

      
      
        <Routes>
        
        <Route path="/" element={<Page1/>}> </Route>
        <Route path="/mm" element={<Home/>}> </Route>
        <Route path="/add" element={<Reginstallment/>}> </Route>
        <Route path="/an" element={<Updateinstallment/>}> </Route>
        <Route path="/home" element={<Page1/>}> </Route>
        <Route path="/remov" element={<Remove/>}> </Route>
        <Route path="/cancel1" element={<Page1/>}> </Route>
        <Route path="/hhh" element={<Home/>}> </Route>
        <Route path="/cancel2" element={<Home/>}> </Route>
        <Route path="/AAA" element={<Addsucccuesful/>}> </Route>
        <Route path="/Addok" element={<Home/>}> </Route>
        <Route path="/re" element={<Removsuccussfull/>}> </Route>
        <Route path="/Addok2" element={<Home/>}> </Route>
        <Route path="/upnext" element={<Updatesuccusful/>}> </Route>
        <Route path="/uppok" element={<Home/>}> </Route>
        <Route path="/ren" element={<AddInstalllment/>}> </Route>

        <Route path="/AAArr" element={<Addsucccuesful/>}> </Route>
        <Route path="/Addpayment" element={<UseInstallemnt/>}> </Route>


        <Route path="/rey" element={<UseInstallemnt/>}> </Route>
        <Route path="/regcancel" element={<Home/>}> </Route>
        <Route path="/recancel" element={<Home/>}> </Route>

        <Route path="/viwee" element={<Viwe/>}> </Route>

        <Route path="/viwecancel" element={<Home/>}> </Route>





        
       
        


        
        
        
       

        
     
        </Routes>
      </BrowserRouter>
    </div> 
  
    
    
    
     );
}

export default App;
