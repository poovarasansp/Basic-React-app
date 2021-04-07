import React from 'react';
import logo from '../Images/hero-img.png';
import bootstrap from '../Images/bootstrap.jpg'
import './Homes.css'



    const Home = () =>{

        return(
            <div className="main">
                <div className="navbar">
                <img src={bootstrap} alt="Logo" className="boot" />
                <p class="text-white Boot-text" >Bootstrap</p>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link text-white " href="https://getbootstrap.com/" target="_blank">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">About</a>
                    </li>
                    <li >
                        <a class="nav-link text-white" href="https://icons.getbootstrap.com/" target="_blank">Icons</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="https://mdbootstrap.com/docs/b4/jquery/sections/contact/" target="_blank">Contact</a>
                    </li>
                </ul>
                </div>
                <div className="top">
                    <div>
                        <div className="head1">Elegant and creative solutions</div>
                        <div className="text">We are team of talented designers making websites with Bootstrap</div>
                        <button type="button" class="btn btn-info" >Get Started</button>
                        <button type="button" class="btn btn-danger">Explore</button>
                        <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-success">Success</button>
                    </div>
                    <div>
                    <img src={logo} alt="Logo" className="logo"/>
                    

                    </div>
                </div>
            </div>
        ) 
    }
    
export default Home;