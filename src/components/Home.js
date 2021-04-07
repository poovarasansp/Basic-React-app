import React from 'react';
import logo from '../Images/hero-img.png';
import './Homes.css'



    const Home = () =>{

        return(
            <div className="main">
                <div className="top">
                    <div>
                        <div className="head1">Elegant and creative solutions</div>
                        <div className="text">We are team of talented designers making websites with Bootstrap</div>
                        <button className="button">Get Started</button>
                        <button className="button2">Explore</button>
                    </div>
                    <div>
                    <img src={logo} alt="Logo" className="logo"/>
                    </div>
                </div>
            </div>
        ) 
    }
    
export default Home;