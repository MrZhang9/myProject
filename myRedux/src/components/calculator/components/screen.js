import React from 'react';
import {connect} from'react-redux';
const Screen =(props)=> {
        let {result,flag}=props;
        return (   /*屏幕显示区域*/
            <input type="text" id="res" readOnly={flag} value={result}/>
        )

};
 const mapStateToProps=(state)=>{
    return {
        result: state.result,
        flag: state.flag
    }
 };
export default connect(mapStateToProps,null)(Screen);