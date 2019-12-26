import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as action from '../../../store/actionCreator';

const Filter=(props)=> {
        let {actions}=props;
        return (
            <form className="form" action="">
                <div className="jy">
                    <select>
                        <option value="交易">交易</option>
                    </select>
                </div>
                <div className="fy">
                    <select id="select" onChange={actions.changePageSize}>
                        <option value="15">15</option>
                        <option value="12">12</option>
                        <option value="9">9</option>
                        <option value="6">6</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="date">
                    <span>日期选择</span>
                    <input id="sTime" type="date"/> - <input id="eTime" type="date"/>
                </div>
                <div className="cxTb">
                    <span id="find">查询</span>
                    <span id="tongBu">同步</span>
                </div>
                <div className="text">
                    <span>交易上次手动同步时间：2019-09-25 10:09:36</span>
                </div>
            </form>

        )
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(action, dispatch)
}
};
export default connect(null, mapDispatchToProps)(Filter);