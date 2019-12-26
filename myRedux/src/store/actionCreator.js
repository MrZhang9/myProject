import {SHOW_CAL, SHOW_LIST, NUMBER_INPUT_ONE, NUMBER_INPUT_TWO, CLEAR_ALL, NUMBER_REVERSE_NUMSHOW, NUMBER_REVERSE_NUM, SHOW_LOADING,HIDE_LOADING, SYMBOLS, ORIGINAL_STATE, INIT_LIST,CHANGE_PAGESIZE,PREV_PAGE,NEXT_PAGE} from './actionTypes';

//显示计算器
export const showCal = () => {
    return (dispatch,getState)=>{
        dispatch({
            type: SHOW_CAL
        })
    }
};
//显示列表
export const showList = () => {
    return (dispatch,getState)=>{
        dispatch({
            type: SHOW_LIST
        });
        getList(dispatch,getState);
    }
};

/*计算器-----------------------------------------------------------------------------开始*/

//数字和点的输入
export const numberAction = (number) => {
    return (dispatch, getState) => {
        let {haveNum,num,numShow} = getState();
        // 判断是否有原先值
        if (haveNum) {   /*有原先值*/
            let val = numShow + number;
            dispatch({
                type: NUMBER_INPUT_TWO,
                data: {
                    numShow: val, result: (Math.round(parseFloat(val) * 100000) / 100000)
                }
            });
        } else {  /*无原先值*/
            let val = num + number;
            dispatch({
                type: NUMBER_INPUT_ONE,
                data: {
                    num: val, result: (Math.round(parseFloat(val) * 100000) / 100000)
                }
            });
        }
    };
};

//清空数据
export const clearScreen = () => {
    return (dispatch, getState) => {
        dispatch({
            type: CLEAR_ALL,
            data: {
                num: 0, numShow: 0, haveNum: false, symbols: '', result: 0
            }
        })
    }
};

//取反
export const reverse = () => {
    return (dispatch, getState) => {
        const num = getState().num;
        const numShow = getState().numShow;
        if (num) {
            if (numShow) {
                dispatch({
                    type: NUMBER_REVERSE_NUMSHOW,
                    data: {
                        numShow: -numShow, result: -numShow
                    }
                })
            } else {
                dispatch({
                    type: NUMBER_REVERSE_NUM,
                    data: {
                        num: -num, result: -num
                    }
                })
            }
        }
    }
};

//加减乘除模计算
export const calculate = (symbol) => {
    return (dispatch, getState) => {
        const {num,numShow,symbols} = getState();
        if (num) {
            if (numShow) {
                //判断符号
                switch (symbols) {
                    case '+' :
                        let valOne = parseFloat(num) + parseFloat(numShow);
                        calResult(valOne,dispatch);
                        break;
                    case '-' :
                        let valTwo = parseFloat(num) - parseFloat(numShow);
                        calResult(valTwo,dispatch);
                        break;
                    case 'x' :
                        let valThree = parseFloat(num) * parseFloat(numShow);
                        calResult(valThree,dispatch);
                        break;
                    case '÷' :
                        let valFour = parseFloat(num) / parseFloat(numShow);
                        calResult(valFour,dispatch);

                        break;
                    case '%' :
                        let valFive = parseFloat(num) % parseFloat(numShow);
                        calResult(valFive,dispatch);
                        break;
                }
            }
            if (symbol !== '=') {
                dispatch({
                    type: SYMBOLS,
                    data: {symbols: symbol}
                })
            }
            //变成有初始值状态
            dispatch({
                type: ORIGINAL_STATE,
                data: {haveNum: true}
            })
        }
    };
};

//显示计算结果结果
export const calResult = (val,dispatch) => {
    /*显示动画*/
    function loadingShow() {
        return {
            type:SHOW_LOADING,
        }
    }
    /*隐藏动画*/
     const loadingClose =function (val){
        return {
            type: HIDE_LOADING,
            data: {result: Number(val), num: val, numShow: 0}
        }
    };
    dispatch(loadingShow());
    setTimeout(()=>{
        dispatch(loadingClose(val));
    },1500)
};
/*计算器-----------------------------------------------------------------------------结束*/



/*列表-------------------------------------------------------------------------------开始*/

/*获取列表数据方法*/
export const getList = (dispatch, getState) => {
    // return (dispatch, getState) => {
        let {pageNumber, pageSize} = getState();
        let url = 'http://pre.zhushang.net/Supplychain/getDataForHavePost?type=1&page=' + pageNumber + '&num=' + pageSize;
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                dispatch({
                    type:INIT_LIST,
                    data:{allList:data}
                })
            })
            .catch(
                err => console.log(err)
            );
    // }
};

/*更改一页显示数目*/
export const changePageSize=(e)=>{
    const event=e.target.value;
    return(dispatch,getState)=>{
        dispatch({
            type:CHANGE_PAGESIZE,
            data:{
                pageSize:event
            }
        });
        getList(dispatch,getState);
    }
};

//上一页
export const prevPage=()=>{
    return (dispatch,getState)=>{
        // 判断是否为第一页
        let {pageNumber}=getState();
        if(pageNumber>1){
            dispatch({
                type:PREV_PAGE,
                data:{pageNumber:pageNumber-1}
            })
        }
        getList(dispatch,getState);
    }

};
//下一页
export const nextPage=()=>{
    return (dispatch,getState)=>{
        let {pageNumber,pageSize}=getState();
        // 总页数
        let allPage = Math.ceil(256 / pageSize);
        if(pageNumber<allPage){
            dispatch({
                type:NEXT_PAGE,
                data:{pageNumber:pageNumber+1}
            })
        }
        getList(dispatch,getState);
    }

};

/*列表-------------------------------------------------------------------------------结束*/


