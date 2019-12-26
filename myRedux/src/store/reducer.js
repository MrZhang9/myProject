import {SHOW_CAL,SHOW_LIST,NUMBER_INPUT_ONE,NUMBER_INPUT_TWO,CLEAR_ALL,NUMBER_REVERSE_NUM,NUMBER_REVERSE_NUMSHOW,SHOW_LOADING,HIDE_LOADING,SYMBOLS,ORIGINAL_STATE,CHANGE_PAGESIZE,INIT_LIST,PREV_PAGE,NEXT_PAGE} from './actionTypes';
const defaultState={
    isCal:true,  /*控制是否显示计算器*/
    navCalActive:'active',/*控制当前tab的样式*/
    navListActive:'',
    /*计算器 ---------------------------------------------头部*/
    result: '0',    // 结果
    num: '0',    // 原先的数
    numShow: '0', //第二次输入的数
    symbols: "", // 符号
    haveNum: false, // 表示是否有初始数值
    loading: false,  // 控制动画的显示和隐藏
    flag:true,   //控制计算机屏幕只读
    /*计算器 --------------------------------------------尾部*/
    /*列表-----------------------------------------------头部*/
    zero:0,   /*外边距*/
    allList:[],  /*总数据*/
    pageSize:15, /*一页最大显示数*/
    pageNumber:1 /*当前页数*/
    /*列表-----------------------------------------------尾部*/
};
export default (state=defaultState,action)=>{
    if(action.type===SHOW_CAL){  /*显示计算器*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.isCal=true;
        newState.navCalActive="active";
        newState.navListActive="";
        return newState;
    }
    if(action.type===SHOW_LIST){  /*显示列表*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.isCal=false;
        newState.navCalActive="";
        newState.navListActive="active";
        return newState;
    }
    if(action.type===NUMBER_INPUT_ONE){  /*第一次输入数字和点*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.num=action.data.num;
        newState.result=action.data.result;
        // console.log('111111');
        return newState;
    }
    if(action.type===NUMBER_INPUT_TWO){  /*第二次输入数字和点*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.numShow=action.data.numShow;
        newState.result=action.data.result;
        // console.log('22222222');
        return newState;
    }
    if(action.type===CLEAR_ALL){  /*清空数据*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.num=action.data.num;
        newState.numShow=action.data.numShow;
        newState.haveNum=action.data.haveNum;
        newState.result=action.data.result;
        newState.symbols=action.data.symbols;
        return newState;
    }
    if(action.type===NUMBER_REVERSE_NUMSHOW){  /*取反*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.numShow=action.data.numShow;
        newState.result=action.data.result;
        return newState;
    }
    if(action.type===NUMBER_REVERSE_NUM){  /*取反*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.num=action.data.num;
        newState.result=action.data.result;
        return newState;
    }
    if(action.type===SHOW_LOADING){  /*显示动画*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.loading=true;
        // console.log('显示');
        return newState;
    }
    if(action.type===HIDE_LOADING){  /*隐藏动画并显示结果*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.loading=false;
        newState.result=action.data.result;
        newState.num=action.data.num;
        newState.numShow=action.data.numShow;
        return newState;
    }
    if(action.type===SYMBOLS){  /*替换符号*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.symbols=action.data.symbols;
        return newState;
    }
    if(action.type===ORIGINAL_STATE){  /*恢复无初始值状态*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.haveNum=action.data.haveNum;
        return newState;
    }
    if(action.type===INIT_LIST){  /*渲染列表页*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.allList=action.data.allList;
        return newState;
    }
    if(action.type===CHANGE_PAGESIZE){  /*更新列表数据*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.pageSize=action.data.pageSize;
        return newState;
    }
    if(action.type===PREV_PAGE){  /*上一页*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.pageNumber=action.data.pageNumber;
        return newState;
    }
    if(action.type===NEXT_PAGE){  /*下一页*/
        const newState=JSON.parse(JSON.stringify(state));
        newState.pageNumber=action.data.pageNumber;
        return newState;
    }
    return state;
}