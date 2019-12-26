import React,{Fragment}from 'react';
import {connect} from 'react-redux';
import './index.css';
import Header from "./components/header/header";
import Calculator from './components/calculator/index';
import List from './components/list/index'
import * as action from "./store/actionCreator";
import {bindActionCreators} from "redux";

const Main = (props) => {
        const {navCalActive,navListActive,isCal,actions} = props;
        let  calOrList=isCal? (<Calculator> </Calculator>):(<List> </List>);
        return(
            <Fragment>
                {/*头部---------------------------------------- 开始*/}
                <Header> </Header>
                {/*头部-----------------------------------------结束*/}

                {/*导航栏----------------------------------------开始*/}
                <nav>
                    <ul className="zNav">
                        {/*//tab切换*/}
                        <li className={navCalActive} onClick={actions.showCal}>首页</li>
                        <li  className={navListActive} onClick={actions.showList}>收入分析</li>
                        <li>营销转化分析 <span>α</span></li>
                        <li>广告管理</li>
                        <li>统计分析</li>
                        <li>用户管理</li>
                        <li>便捷工具</li>
                    </ul>
                </nav>
                {/*导航栏----------------------------------------结束*/}

                <div className="line"> </div>

                {/*计算器或者列表------------------------------------开始*/}
                {calOrList}
                {/*计算器或者列表------------------------------------结束*/}
            </Fragment>
        )
};

const mapStateToProps =(state)=>{
    return{
        isCal:state.isCal,
        navCalActive:state.navCalActive,
        navListActive:state.navListActive
    }
};
const mapDispatchToProps =(dispatch)  => {
    return{
    actions:bindActionCreators(action, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Main);