import React,{Component,Fragment}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/header/header";
import Calculator from './components/calculator/index';
import List from './components/list/index'
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            /*控制是否显示计算器*/
            isCal:false,
            /*控制当前tab的样式*/
            navCalActive:'',
            navListActive:'active'
        };
        this.showCal=this.showCal.bind(this);
        this.showList=this.showList.bind(this);
    }

    render(){
        let  calOrList=this.state.isCal? (<Calculator> </Calculator>):(<List> </List>);
        return(
            <Fragment>
                {/*头部---------------------------------------- 开始*/}
                <Header> </Header>
                {/*头部-----------------------------------------结束*/}

                {/*导航栏----------------------------------------开始*/}
                <nav>
                    <ul className="zNav">
                        {/*//tab切换*/}
                        <li className={this.state.navCalActive} onClick={this.showCal}>首页</li>
                        <li  className={this.state.navListActive} onClick={this.showList}>收入分析</li>
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
    }
    // 显示计算器
    showCal() {
        this.setState({
            isCal: true,
            navCalActive: "active",
            navListActive: ""
        })
    }

    // 显示列表
    showList() {
        this.setState({
            isCal: false,
            navCalActive: "",
            navListActive: "active"
        })
    }

}

ReactDOM.render(<Main/>, document.getElementById('root'));

