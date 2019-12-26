import React from "react";
import logo from '../../plane.png';
const Header =()=>{
        return (
                <header>
                    <div className="img">
                        <img  src={logo} alt="plane"/>
                    </div>
                    <p className="word">每天进步一点点， 离目标更近一点点！</p>
                    <div className="right">
                        <span className="dhq">段惠乾</span>
                        <span className="exit">退出</span>
                    </div>
                </header>
        )
};
export default Header;