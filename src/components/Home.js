import React from 'react';
import logo from '../Images/hero-img.png';
import bootstrap from '../Images/bootstrap.jpg'
import computer from '../Images/hero-imgs.png'
import value1 from '../Images/values-1.png'
import value2 from '../Images/values-2.png'
import value3 from '../Images/values-3.png'
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
                        <a class="nav-link text-white" href="https://themes.getbootstrap.com/" target="_blank">Themes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="https://twitter.com/getbootstrap" target="_blank">Visit</a>
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

                <div>
                    <h2 className="head2">Build Better Websites With Bikin</h2>
                    <p className="text2">We are team of talented designers making websites with Bootstrap</p>
                    <button type="button" class="btn btn-primary get">Get Started</button><br></br>
                    <img src={computer} alt="Computer" className="com"/>
                </div>

                {/* Part - 3 */}
                <div className="our">OUR VALUES</div>
                <h2 className="odit">Odit est perspiciatis laborum et dicta</h2>
                <div className="three">
                <div className="values1">
                    <img src={value1} alt="Image" className="value1"/>
                    <h4 className="val1">Ad cupiditate sed est odio</h4>
                    <p className="val2">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div>

                <div className="values1">
                    <img src={value2} alt="Image" className="value1"/>
                    <h4 className="val1">Voluptatem voluptatum alias</h4>
                    <p className="val2">Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                </div>

                <div className="values1">
                    <img src={value3} alt="Image" className="value1"/>
                    <h4 className="val1">Fugit cupiditate alias nobis.</h4>
                    <p className="val2">Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                </div>
                </div>
                



            </div>

            
        ) 
    }
    
export default Home;