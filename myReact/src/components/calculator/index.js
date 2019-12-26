import React,{Component} from 'react';
import Loading from './components/loading';
import Screen from './components/screen';
import Button from './components/buttons';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 结果
            result: 0,
            // 原先的数
            num: 0,
            //当前显示的数
            numShow: 0,
            // 符号
            symbols: "",
            // 表示是否有初始数值
            haveNum: false,
            // 控制动画的显示和隐藏
            loading: false,
        };
        this.changeState=this.changeState.bind(this);
    }
    render() {
        // 控制动画的显示和隐藏
           let loading =this.state.loading ?( <Loading> </Loading>):'';
        return (
            <div className='cal' id="cal">
                {/*计算器屏幕显示区域----------------------------------开始*/}
                <Screen result={this.state.result}/>
                {/*计算器屏幕显示区域----------------------------------结束*/}

                {/*三个圆点------------------------------------开始*/}
                <ol className="ol">
                    <li> </li>
                    <li> </li>
                    <li> </li>
                </ol>
                {/*三个圆点------------------------------------结束*/}

                {/*按键区域--------------------------------------------开始*/}
                <Button changeState={this.changeState} value={this.state}/>
                {/*按键区域--------------------------------------------结束*/}

                {/*动画------------------------------------------------*/}
                {loading}
                {/*动画------------------------------------------------*/}
            </div>
        )
    }
    // 修改数据
    changeState = (data) => {
        this.setState(()=>(
            data
        ));
    };
}

export default Calculator;