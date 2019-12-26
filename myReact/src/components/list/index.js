import React,{Component} from 'react';
import Filter from './components/filter';
class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            zero:0,   /*外边距*/
            allList:[],  /*总数据*/
            pageSize:35, /*一页最大显示数*/
            pageNumber:1 /*当前页数*/

        };
        this.changeState=this.changeState.bind(this);
        this.prevPage=this.prevPage.bind(this);
        this.nextPage=this.nextPage.bind(this);

    }
    /*获取异步数据,自动渲染*/
    componentDidMount() {
        this.getList();
    }
    render(){
        return (
                <div className='money'>
                    {/*筛选部分-----------------------------------------------------头部*/}
                    <Filter changeState={this.changeState}  getList={this.getList}/>
                    {/*筛选部分-----------------------------------------------------尾部*/}

                    {/*表格------------------------------------------------------------------------开始*/}
                    <table className="table" id="table" cellSpacing={this.state.zero}>
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
                        {this.state.allList}
                        </tbody>
                        {/*渲染身体----------------------------------------结束*/}
                    </table>
                    {/*表格------------------------------------------------------------------------结束*/}

                    {/*翻页------------------------------------------------------------------------开始*/}
                    <div className="page">
                        <button onClick={this.prevPage}>上一页</button>
                        <span>{this.state.pageNumber}</span>/<span>{Math.ceil(256 / this.state.pageSize)}</span>
                        <button onClick={this.nextPage}>下一页</button>
                    </div>
                    {/*翻页--------------------------------------------------------------------------结束*/}
                </div>
        )
    }

    //更改数据
    changeState = (data,func) => {
        this.setState(()=>(
            data
        ),func);
    };
    /*获取全部列表数据*/
     getList=()=>{
        // 固定this指向
        const $this = this;
        let url = 'http://pre.zhushang.net/Supplychain/getDataForHavePost?type=1&page='+this.state.pageNumber+'&num='+this.state.pageSize;
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                // 渲染列表
                let innerHTML = data.map(value => {
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
                $this.setState({
                    allList: innerHTML
                })
            })
            .catch(
                err => console.log(err)
            );
    };

    // 切换上一页
    prevPage = () => {
        // 判断是否为第一页
        if(this.state.pageNumber>1) {
            this.changeState({
            pageNumber:this.state.pageNumber - 1,
        })
        }
        this.getList();
    };

    // 切换下一页
    nextPage = () => {
        // 总页数
        let allPage = Math.ceil(256 / this.state.pageSize);
        if(this.state.pageNumber < allPage) {
            this.changeState({
                pageNumber: this.state.pageNumber + 1,
            });
            this.getList();
        }
    }

}
export default Table;