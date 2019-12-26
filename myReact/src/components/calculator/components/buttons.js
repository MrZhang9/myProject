import React, {Component, Fragment} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            innerText:'除数不能为零！！！'
        };
        this.number = this.number.bind(this);
        this.clearScreen = this.clearScreen.bind(this);
        this.calculate = this.calculate.bind(this);
        this.reverse = this.reverse.bind(this);
        this.calResult = this.calResult.bind(this);
        // this. isZero = this. isZero.bind(this);

    }

    render() {
        return (
            <Fragment>
                <input type="reset" id="reset" value="AC" onClick={this.clearScreen}/>
                <input type="button" id="reverse" value="+/-" onClick={this.reverse}/>
                <input type="button" id="per" value="%" onClick={() => {this.calculate('%')}}/>
                <input type="button" id="div" value="÷" onClick={() => {this.calculate('÷')}}/>

                <input className="number" type="button" id="seven" value="7" onClick={() => {this.number('7')}}/>
                <input className="number" type="button" id="eight" value="8" onClick={() => {this.number('8')}}/>
                <input className="number" type="button" id="nine" value="9" onClick={() => {this.number('9')}}/>
                <input type="button" id="mul" value="x" onClick={() => {this.calculate('x')}}/>

                <input className="number" type="button" id="four" value="4" onClick={() => {this.number('4')}}/>
                <input className="number" type="button" id="five" value="5" onClick={() => {this.number('5')}}/>
                <input className="number" type="button" id="six" value="6" onClick={() => {this.number('6')}}/>
                <input type="button" id="reduce" value="-" onClick={() => {this.calculate('-')}}/>

                <input className="number" type="button" id="one" value="1" onClick={() => {this.number('1')}}/>
                <input className="number" type="button" id="two" value="2" onClick={() => {this.number('2')}}/>
                <input className="number" type="button" id="three" value="3" onClick={() => {this.number('3')}}/>
                <input type="button" id="add" value="+" onClick={() => {this.calculate('+')}}/>

                <input type="button" id="zero" value="0" onClick={() => {this.number('0')}}/>
                <input type="button" id="dot" value="." onClick={() => {this.number('.')}}/>
                <input type="button" id="equal" value="=" onClick={() => {this.calculate('=')}}/>

            </Fragment>
        )
    }

    //数字和点输入
    number = (number) => {
        let {changeState} = this.props;
        // 判断是否有原先值
        if (this.props.value.haveNum) {   /*有原先值*/
            const val = this.props.value.numShow + number;
            changeState({
                    numShow: val,
                    result: (Math.round(parseFloat(val) * 100000) / 100000)
                }
            )
        } else {  /*无原先值*/
            const val = this.props.value.num + number;
            changeState({
                num: val,
                result:(Math.round(parseFloat(val) * 100000) / 100000)
            })
        }

    };
    //加减乘除模计算
    calculate = (symbol) => {
        if (this.props.value.num) {
            if (this.props.value.numShow) {
                // 先判断符号
                switch (this.props.value.symbols) {
                    case '+' :
                        let valOne = parseFloat(this.props.value.num) + parseFloat(this.props.value.numShow);
                        this.calResult(valOne);
                        break;
                    case '-' :
                        let valTwo = parseFloat(this.props.value.num) - parseFloat(this.props.value.numShow);
                        this.calResult(valTwo);
                        break;
                    case 'x' :
                        let valThree = parseFloat(this.props.value.num) * parseFloat(this.props.value.numShow);
                        this.calResult(valThree);
                        break;
                    case '÷' :
                        let valFour = parseFloat(this.props.value.num) / parseFloat(this.props.value.numShow);
                        this.calResult(valFour);

                        break;
                    case '%' :
                        let valFive = parseFloat(this.props.value.num) % parseFloat(this.props.value.numShow);
                        this.calResult(valFive);
                        break;
                }
            }
            if (symbol !== '=') {
                this.props.value.symbols = symbol;
            }
            //恢复初始状态
            this.props.value.haveNum = true;
        }
    };

/*    除数为零时调用
    isZero(text){
        let {changeState} = this.props;
        changeState({
            result:text
        })
    }*/
    //清除数据
    clearScreen = () => {
        let {changeState} = this.props;
        changeState({
            num: 0,
            result: '0',
            numShow: '0',
            haveNum: false,
            symbols: ''
        })
    };
    //取反
    reverse = () => {
        let {changeState} = this.props;
        if (this.props.value.num) {
            if(this.props.value.numShow){
            changeState({
                numShow: -this.props.value.numShow,
                result: -this.props.value.numShow
            })
        } else {
            changeState({
                num:-this.props.value.num,
                result: -this.props.value.num
            })
        }}
    };
    // 显示结果
    calResult = (val) => {
        let {changeState} = this.props;
        // 显示动画
        changeState({
            loading: true,
        });
        //隐藏动画
        setTimeout(() => {
            changeState({
                loading: false,
                result: parseFloat(val),
                num: val,
                numShow: 0,
            })
        }, 1500);
    }
}

export default Button;