import React, {Component} from 'react';
class Filter extends Component {
    constructor(props) {
        super(props);
}
    render() {
        return (
                <form className="form" action="">
                    <div className="jy">
                        <select>
                            <option value="交易">交易</option>
                        </select>
                    </div>
                    <div className="fy">
                        <select id="select" onChange={this.changePageSize}>
                            <option value="35">35</option>
                            <option value="30">30</option>
                            <option value="25">25</option>
                            <option value="20">20</option>
                            <option value="15">15</option>
                            <option value="10">10</option>
                            <option value="5">5</option>
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
    }
    /*更改一页显示数目*/
    changePageSize=(e)=>{
        let {changeState,getList}=this.props;
        const event=e.target.value;
        changeState({
            pageSize:event
            },getList
        )
    }

}
export default Filter;