import React from 'react';
import Navbar from './navbar'
import Aside from './aside' 
import Mainuser from '../views/private/users/MainUser.js'

export default function Private(){
    return(
        <div id='app'>
            <Navbar/> 
            <Aside/>
            <section className="section main-section"> 
                <div style={{minHeight: "cale(120vh-300px)"}} className="p-4 break-words bg-white rounded-md shadow-xl" >
                    <Mainuser/>
                </div>
            </section>  
        </div>
    )
}