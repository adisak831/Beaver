import React from 'react';
import Navbar from './navbar'
import Aside from './aside'
import Footer from './footer'

export default function Private(){
    return(
        <div id='app'>
            <Navbar/> 
            <Aside/>
            <section className="section main-section">KARM</section>
 
        </div>
    )
}