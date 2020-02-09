import React, { Component } from 'react';
import header from './components/Header.css';




class Header extends Component {
   render() {
      return (
         <div>
            
            <div class="container">
            
 <nav id="nav-menu-container">

                 <ul class="nav-menu">
                     <li class="menu-active"><a href="#hero">Home</a></li>
                     <li><a href="#about">About Us</a></li>
                     <li><a href="#Category">Category</a></li>
 
                 </ul>
             </nav>
         
         </div>
         </div>
        
      );
   }
}

export default Header;