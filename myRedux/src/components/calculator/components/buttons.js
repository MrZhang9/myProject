import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from'redux';
import * as action from "../../../store/actionCreator";
const Button =(props)=>{
        const { actions } = props;
        return (
            <Fragment>
                <input type="reset" id="reset" value="AC" onClick={actions.clearScreen}/>
                <input type="button" id="reverse" value="+/-" onClick={actions.reverse}/>
                <input type="button" id="per" value="%" onClick={() => {actions.calculate('%')}}/>
                <input type="button" id="div" value="÷" onClick={() => {actions.calculate('÷')}}/>

                <input className="number" type="button" id="seven" value="7" onClick={() => {actions.numberAction('7')}}/>
                <input className="number" type="button" id="eight" value="8" onClick={() => {actions.numberAction('8')}}/>
                <input className="number" type="button" id="nine" value="9" onClick={() => {actions.numberAction('9')}}/>
                <input type="button" id="mul" value="x" onClick={() => {actions.calculate('x')}}/>
                <input className="number" type="button" id="four" value="4" onClick={() => {actions.numberAction('4')}}/>
                <input className="number" type="button" id="five" value="5" onClick={() => {actions.numberAction('5')}}/>
                <input className="number" type="button" id="six" value="6" onClick={() => {actions.numberAction('6')}}/>
                <input type="button" id="reduce" value="-" onClick={() => {actions.calculate('-')}}/>

                <input className="number" type="button" id="one" value="1" onClick={() => {actions.numberAction('1')}}/>
                <input className="number" type="button" id="two" value="2" onClick={() => {actions.numberAction('2')}}/>
                <input className="number" type="button" id="three" value="3" onClick={() => {actions.numberAction('3')}}/>
                <input type="button" id="add" value="+" onClick={() => {actions.calculate('+')}}/>

                <input type="button" id="zero" value="0" onClick={() => {actions.numberAction('0')}}/>
                <input type="button" id="dot" value="." onClick={() => {actions.numberAction('.')}}/>
                <input type="button" id="equal" value="=" onClick={() => {actions.calculate('=')}}/>

            </Fragment>
        )
};

const mapDispatchToProps=(dispatch)=>{
    return {
        actions:bindActionCreators(action, dispatch)
    }
};
export default connect(null, mapDispatchToProps)(Button);