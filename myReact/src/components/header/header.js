import React, {Component, Fragment} from "react";
import logo from '../../plane.png';
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (

            <Fragment>
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
            </Fragment>
        )
    }
}
export default Header;