import React from 'react';
import Filter from './components/filter';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as action from "../../store/actionCreator";

const Table = (props) => {
    let {zero, pageNumber, pageSize, allList, actions} = props;
    let innerHTML = allList.map(value => {
        return (
            <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.create_time}</td>
                <td>{value.pay_money}(元)</td>
                <td>{value.openid}</td>
                <td>{value.name}</td>
                <td>{value.type}</td>
                <td>{value.user_where}</td>
                <td>{value.package}</td>
                <td>{value.order_no}</td>
                <td>{value.expire_date}</td>
                <td>{value.phone}</td>
                <td>{value.zihao}</td>
                <td>{value.account}</td>
                <td>{value.password}</td>
                <td>分析</td>
            </tr>
        )
    });
    return (
        <div className='money'>
            {/*筛选部分-----------------------------------------------------头部*/}
            <Filter/>
            {/*筛选部分-----------------------------------------------------尾部*/}

            {/*表格------------------------------------------------------------------------开始*/}
            <table className="table" id="table" cellSpacing={zero}>
                <thead>
                <tr>
                    <td>客户ID</td>
                    <td>创建时间</td>
                    <td>花费(元)</td>
                    <td>开房ID</td>
                    <td>姓名</td>
                    <td>类型</td>
                    <td>用户地址</td>
                    <td>包</td>
                    <td>订单号</td>
                    <td>终止时间</td>
                    <td>电话</td>
                    <td>字号</td>
                    <td>说明</td>
                    <td>密码</td>
                    <td>来源</td>
                </tr>
                </thead>
                {/*渲染身体----------------------------------------开始*/}
                <tbody id="tb">
                {innerHTML}
                </tbody>
                {/*渲染身体----------------------------------------结束*/}
            </table>
            {/*表格------------------------------------------------------------------------结束*/}

            {/*翻页------------------------------------------------------------------------开始*/}
            <div className="page">
                <button onClick={actions.prevPage}>上一页</button>
                <span>{pageNumber}</span>/<span>{Math.ceil(256 / pageSize)}</span>
                <button onClick={actions.nextPage}>下一页</button>
            </div>
            {/*翻页--------------------------------------------------------------------------结束*/}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        zero: state.zero,
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        allList: state.allList
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(action, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);