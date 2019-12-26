import React from 'react';
import Loading from './components/loading';
import Screen from './components/screen';
import Button from './components/buttons';
import {connect} from "react-redux";

const Calculator =(props)=> {
        // 控制动画的显示和隐藏
           let loading =props.loading ?( <Loading> </Loading>):'';
        return (
            <div className='cal'>
                {/*计算器屏幕显示区域----------------------------------开始*/}
                <Screen/>
                {/*计算器屏幕显示区域----------------------------------结束*/}

                {/*三个圆点------------------------------------开始*/}
                <ol className="ol">
                    <li> </li>
                    <li> </li>
                    <li> </li>
                </ol>
                {/*三个圆点------------------------------------结束*/}

                {/*按键区域--------------------------------------------开始*/}
                <Button/>
                {/*按键区域--------------------------------------------结束*/}

                {/*动画------------------------------------------------*/}
                {loading}
                {/*动画------------------------------------------------*/}
            </div>
        )
};
const mapStateToProps=(state)=>{
    return {
        loading:state.loading
    }
};
export default connect(mapStateToProps,null)(Calculator);