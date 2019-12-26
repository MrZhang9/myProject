window.onload = () => {

    //封装获取id;
    function $(id) {
        return typeof id === "string" ? document.getElementById(id) : null;
    }

    //tab切换
    $('firstpage').onclick = () => {    //切换到首页
        $('cal').style.display = 'block';
        $('money').style.display = 'none';
        $('firstpage').classList.add("active");
        $('income').classList.remove('active');
    };
    $('income').onclick = () => {           //切换到收入分析
        $('money').style.display = 'block';
        $('cal').style.display = 'none';
        $('income').classList.add("active");
        $('firstpage').classList.remove('active');
    };


    /*-------------------------计算器---------------------------------------------start */
    //定义初始值
    let num = 0, result = 0, numshow = "0";
    let instatus = 0;               //判断输入状态的标志
    let calcul = 0;               //判断计算状态的标志
    let quit = 0;                 //防止重复按键的标志

    //数字输入
    const number = (num) => {
        let str = $('res').value; //获得当前显示数据
        str = (str != "0") ? ((instatus == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
        str = str + num; //给当前值追加字符
        $('res').value = str; //刷新显示
        instatus = 0; //重置输入状态
        quit = 0; //重置防止重复按键的标志
    };

    //点输入
    const dot = () => {
        var str = $('res').value;
        str = (str != "0") ? ((instatus == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";z
        for (let i of str) { //判断是否已经有一个点号
            if (str.substr(i, 1) == ".") return false; //如果有则不再插入
        }
        str = str + ".";
        $('res').value = str;
        instatus = 0;
    };

    //清除数据
    const clearscreen = () => {
        num = 0;
        result = 0;
        numshow = "0";
        instatus = 0;
        $('res').value = "0";
    };

    //加法
    const add = () => { //加法
        calculate(); //调用计算函数
        instatus = 1; //更改输入状态
        calcul = 1; //更改计算状态为加
    };

    //减法
    const reduce = () => {
        calculate();
        instatus = 1;
        calcul = 2;
    };

    //乘法
    const mul = () => {
        calculate();
        instatus = 1;
        calcul = 3;
    };

    //除法
    const div = () => {
        calculate();
        instatus = 1;
        calcul = 4;
    };

    //余数
    const per = () => {
        calculate();
        instatus = 1;
        calcul = 5;
    };

    //取反
    const reverse = () => {

        if (Number($('res').value) >= 0) {
            $('res').value = '-' + $('res').value;
        } else {
            $('res').value = String($('res').value).substring(1);
        }
    };

    //等于
    const equal = () => {
        calculate();
        instatus = 1;
        num = 0;
        result = 0;
        numshow = "0";
    };

    //计算
    const calculate = () => {
        numshow = Number($('res').value);
        if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态
            switch (calcul) { //判断要输入状态
                case 1:
                    result = num + numshow;
                    break; //计算"+"

                case 2:
                    result = num - numshow;
                    break; //计算"-"

                case 3:
                    result = num * numshow;
                    break;  //计算"*"

                case 4:
                    if (numshow != 0) {
                        result = num / numshow;
                    }

                    else {
                        document.getElementById("demo").innerText = "除数不能为零!!";
                        setTimeout(() => { //清空提示
                            document.getElementById("demo").innerText = "";
                        }, 2000)
                    }
                    break;

                case 5:
                    result = num % numshow;
                    break;

            }
            quit = 1; //避免重复按键
        }
        else {
            result = numshow;
        }
        numshow = result;
        $('res').value = numshow;
        num = result; //存储当前值
    }


    //数字键的点击
    $('one').onclick = () => {
        number(1);
    };
    $('two').onclick = () => {
        number(2);
    };
    $('three').onclick = () => {
        number(3);
    };
    $('four').onclick = () => {
        number(4);
    };
    $('five').onclick = () => {
        number(5);
    };
    $('six').onclick = () => {
        number(6);
    };
    $('seven').onclick = () => {
        number(7);
    };
    $('eight').onclick = () => {
        number(8);
    };
    $('nine').onclick = () => {
        number(9);
    };
    $('zero').onclick = () => {
        number(0);
    };
    $("dot").onclick = () => {
        dot();
    };

    //运算键的点击
    $('reset').onclick = () => {
        clearscreen();
    };
    $('add').onclick = () => {
        add();
    };
    $('reduce').onclick = () => {
        reduce();
    };
    $('mul').onclick = () => {
        mul();
    };
    $('div').onclick = () => {
        div();
    };
    $('per').onclick = () => {
        per();
    };
    $('reverse').onclick = () => {
        reverse();
    };
    $('equal').onclick = () => {
        $('box').style.display = "block";
        setTimeout(() => {
            equal();
            $('box').style.display = "none";
        }, 1500);
    };
    /*-------------------------计算器---------------------------------------------end */


    /*--------------------------收入分析表-----------------------------------------start*/

    //点击渲染页面
    $('find').onclick = () => {
        getJson().then((data) => {
            renderPage($("tb"), renderItem, $('select').value, data, $('prepage'), $('nextpage'), 1);
            //渲染总页数
            $('numtwo').innerHTML = parseInt(7 % $('select').value) == 0 ? parseInt(7 / $('select').value) : parseInt(7 / $('select').value) + 1;
        });

    };

    //时间戳方法
    const timestamp = (time) => {
        return (new Date(time)).valueOf();
    };

    //获取json数据
    const getJson = () => {
        //获取异步读取的数据
        return new Promise(function (resolve, reject) {
            return fetch("data.json")
                .then((res) => res.json())
                .then(data => {
                    let val = data.content;
                    let datajson = [];
                    val.forEach((value) => {
                        if (timestamp(value.day) >= timestamp($('stime').value) && timestamp(value.day) < timestamp($('etime').value)) {
                            datajson.push(value);
                        }
                    });
                    resolve(datajson);
                })
                .catch(
                    err => console.log(err)
                );
        })
    };


    //分页--------------------------------------------------------------start


    //分页函数( 列表，渲染函数，一页最大显示数 ，数据 ，上一页，下一页，首页 )
    const renderPage = (listTarget, renderFunc, pageSize, tbchild, pre, next, nowpage) => {
        //总页数
        const allpages = Math.ceil(tbchild.length / pageSize);
        //页面控制器
        const pageController = {
            cur: 0,
            toPage: function (index) {
                listTarget.innerHTML = '';
                for (let i = (index - 1) * pageSize; i < index * pageSize; i++) {
                    if (tbchild[i]) {
                        listTarget.innerHTML += (renderFunc(tbchild[i]));
                    } else {
                        break;
                    }
                }
                this.cur = index;
                $('numone').innerHTML = this.cur;
            },

            current: function () {
                this.toPage(1);
            },
            next: function () {
                this.toPage(this.cur + 1);

            },
            prev: function () {
                this.toPage(this.cur - 1);
            },
        };
        //第一页
        if (nowpage == 1) {
            pageController.current();
        }
        // 上一页按钮
        pre.onclick = () => {
            if (pageController.cur != 1)
                pageController.prev()
        };

        // 下一页按钮
        next.onclick = () => {
            if (pageController.cur != allpages) {
                pageController.next();
            }
        };
    }

    //渲染单个页面
    const renderItem = (value) => {
        const innerH = `<tr>
            <td>${value.day}</td>
            <td>${value.payorder}</td>
            <td>${value.freeorder}</td>
            <td>${value.singleprice}</td>
            <td>${value.totalprice}</td>
            <td>${value.vipafterdatenum}</td>
            <td>${value.neworder}(${value.neworderpay}元)</td>
            <td>${value.againorder}(${value.neworderpay}元)</td>
            <td>${value.updateorder}(${value.updateorderpay}元)</td>
            <td>${value.autoagainorder}</td>
            <td>${value.vipagainpaynum}%</td>
            <td>${value.monthcycle}</td>
            <td>${value.aquartercycle}(${value.aquartercyclepay}元)</td>
            <td>${value.sixmonthscycle}(${value.sixmonthscyclepay}元)</td>
            <td>${value.ayearcycle}(${value.ayearcyclepay}元)</td>
            <td><span>分析</span></td>
            </tr>`;
        $('tb').innerHTML = innerH;
        return $('tb').innerHTML = innerH;
    }

    //分页-----------------------------------------------------------end

    /*--------------------------收入分析表-----------------------------------------end*/
};
