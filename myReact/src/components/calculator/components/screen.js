import React, {Component} from 'react';
class Screen extends Component {
    constructor(props) {
        super(props);
        this.state={
            flag:true
        }
    }
    render() {
        let {result}=this.props;
        return (   /*屏幕显示区域*/
            <input type="text" id="res" readOnly={this.state.flag} value={result}/>
        )
    }

}

export default Screen;