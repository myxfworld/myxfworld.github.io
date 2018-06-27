"use strict";

var odds = {
    currency1:[
        [0.2,0.3],[-0.167,-0.231],[0.1,0.2],[0.1,0.2],[0.1,0.2],[-0.091,-0.167],[-0.091,-0.167],[-0.091,-0.167],[0,0.1],[0,0.1],[0,0.1],
        [0,0.1],[0,0.1],[0,0.1],[0,-0.091],[0,-0.091],[0,-0.091],[0,-0.091],[0,-0.091],[0,-0.091]
    ],
    currency2:[
        [0.4,0.5],[0.5,0.6],[0.6,0.7],[0.7,0.8],[0.8,0.9],[0.9,1],[-0.286,-0.333],[-0.333,-0.375],[-0.375,-0.412],[-0.412,-0.444],[-0.444,-0.474],[-0.474,-0.5],
        [0.4,0.5],[0.5,0.6],[0.6,0.7],[0.7,0.8],[0.8,0.9],[0.9,1],[-0.286,-0.333],[-0.333,-0.375],[-0.375,-0.412],[-0.412,-0.444],[-0.444,-0.474],[-0.474,-0.5],
        [0.3,0.4],[0.3,0.4],[0.3,0.4],[-0.231,-0.286],[-0.231,-0.286],[-0.231,-0.286],[0,0.3],[0,0.3],[0,0.3],[0,0.3],[0,0.3],[0,-0.231],[0,-0.231],[0,-0.231],[0,-0.231],[0,-0.231]
    ],
    currency3:[
        [0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],
        [1,2],[1,2],[1,2],[2,3],[2,3],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],
        [-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1]
    ]
};

var events = [
    {'content':'ASIC矿机第三代发布，再度引发矿机热11111','once':true,'token':false,'upRange':[0.2,0.3],major:'比特币'},
    {'content':'蚂蚁矿机，阿瓦隆矿机接连交货，比特币总算力猛增22222','once':true,'token':false,'upRange':[0.2,0.3],major:'比特币'},
    {'content':'内地首台比特币ATM机在上海张江高科技园区的一家咖啡店内正式亮相，目前应用场景不断丰富33333','once':true,'token':false,'upRange':[0.15,0.3],major:'比特币'},
    {'content':'比特币被爆暗网使用率占50%以上，多名权威专家提示洗钱风险44444','once':true,'token':false,'downRange':[0.2,0.3],major:'比特币'},
    {'content':'多家科技公司财报显示家用机显卡占比下降，矿机公司业务猛增','upRange':[0.2,0.3],major:'比特币'},
    {'content':'全球股市普跌，市场避险情绪明显，美元下跌，抛售情绪加剧，比特币因此大涨','upRange':[0.1,1],major:'比特币'},
    {'content':'市场开始出现去中心化交易所，山寨币流通性增加','upRange':[0.2,0.3],major:'山寨币'},
    {'content':'比特币繁荣只是浮云——《纽约时报》','downRange':[0.2,0.3],major:'比特币,山寨币'},
    {'content':'多家媒体报道认为比特币及其他数字货币都是旁氏骗局','downRange':[0.2,0.3],major:'比特币,山寨币'},
    {'content':'美股专栏作家认为比特币是黄金金价疲软的重要原因，甚至占据了上风','upRange':[0.2,0.3],major:'比特币'},
    {'content':'美国银行:比特币可能成为“主要的支付方式”','upRange':[0.2,0.3],major:'比特币'},
    {'content':'美国：美国司法部和美国证交会的代表称，比特币是一种合法的金融工具','upRange':[0.2,0.3],major:'比特币,山寨币'},
    {'content':'德国：正式承认比特币的合法货币地位，允许比特币用于缴税等合法用途','upRange':[0.2,0.3],major:'比特币,山寨币'},
    {'content':'法国：法国央行对比特币风险发出警告，称比特币代表着一种金融风险','downRange':[0.2,0.3],major:'比特币,山寨币'},
    {'content':'比特币在印度开始热络','upRange':[0.2,0.3],major:'比特币'},
    {'content':'《大家》栏目详细报道了比特币的系列文章，并揭露了比特币在黑市中拥有极高的便利和实用性'},
];

var coinName = ['MBI','M3币','暗黑币','亚洲币','恒星币','长江国际虚拟币','分红点币','虚拟金币','百川币',
    '红通币','雷恩斯电子货币','HGC','COA','LFG','SRI','bismall','AHKCAP','CPF','亿分','K币','R币','K宝',
    '中富通宝','航海币','汇爱币','五行币','中央币','IPC','无极币','善心币','马克币','维卡币','利物币','ATC',
    '中华币','至尊币','克拉币','世华币','恩特币','业绩币','补助币','翼币','M币','BCI','EV币','FIS','U币',
    '格拉斯贝格','FIS','世界云联云币','视界链','天使链','流量魔石','金元币','垠盛','西游链','高兴币','电能链',
    '柠檬币','凯帝币','炭汇币','帮呗','绿链','防伪币','睿鑫宝','弗益币','融易通','万福币','美安','Kyani','WFG',
    '珍宝币','买卖宝','美三','友钱宝','友义宝','智富宝','雷达币','光彩币','万福币','奇妙生物','利阁币','万维币',
    '贝格邦BGB','莱汇币','马克币','金农币','BM币','BCI虚拟币','多宝币','福特币','海纳币','火箭币','华勒斯币',
    '华天币','黑石币','赫尔币','际通币','JPM摩根币','开普币','开元币','可汗币','霹克币','平民币','鲨鱼币','天元币',
    '熊猫币','云鼎云币','易特币','中天币','中华币'];




var LeekItem = function(text) {
    if (text) {
        var obj = JSON.parse(text);
        this.pCash = obj.pCash;
        this.content = obj.content;
        this['比特币'] = obj['比特币'];
        this['狗狗币'] = obj['狗狗币'];
        this['莱特币'] = obj['莱特币'];
        this['指数币'] = obj['指数币'];
        this['未来币'] = obj['未来币'];
        this.usedEvent = [];
        this.own = {};
    } else {
        this.pCash = 0;
        this.content = '';
        this['比特币'] = 0;
        this['狗狗币'] = 0;
        this['莱特币'] = 0;
        this['指数币'] = 0;
        this['未来币'] = 0;
        this.usedEvent = [];
        this.own = {};
    }
};

LeekItem.prototype = {
    toString: function () {
        return JSON.stringify(this);
    }
};


var Leek = function () {
    LocalContractStorage.defineMapProperty(this, "allCurrency", {
        parse: function (text) {
            return new LeekItem(text);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

Leek.prototype = {
    init: function () {

    },
    get:function(day){
        if(day==1){
            var leekItem = new LeekItem();
            leekItem.pCash = 20000;
            leekItem.content = '欢迎来到韭菜之路';
            leekItem['比特币'] = 5000;
            leekItem['狗狗币'] = 0;
            leekItem['莱特币'] = 0;
            leekItem['指数币'] = 0;
            leekItem['未来币'] = 0;
            return leekItem;
        }
        // return this.allCurrency;
        // return this.allCurrency.get(from);
    },
    endOneDay: function (day,leekItem) {
        leekItem.content = '';
        var nowEvent;
        var upOrDown,upOrDownVal;//随机选择涨或跌，，涨跌幅度
        var randomVal1 = Math.floor(Math.random()*20);

        var randomCopyVal1 = Math.floor(Math.random()*40);
        var randomCopyVal2 = Math.floor(Math.random()*40);
        var randomCopyVal3 = Math.floor(Math.random()*40);
        var randomCopyVal4 = Math.floor(Math.random()*40);

        var randomAirVal1 = Math.floor(Math.random()*50);
        var randomAirVal2 = Math.floor(Math.random()*50);
        var randomAirVal3 = Math.floor(Math.random()*50);
        var randomAirVal4 = Math.floor(Math.random()*50);
        var randomAirVal5 = Math.floor(Math.random()*50);
        var randomAirVal6 = Math.floor(Math.random()*50);
        var randomAirVal7 = Math.floor(Math.random()*50);
        var randomAirVal8 = Math.floor(Math.random()*50);
        var randomAirVal9 = Math.floor(Math.random()*50);
        var randomAirVal10 = Math.floor(Math.random()*50);

        var randomArr1 = odds.currency1[randomVal1];

        var randomCopyArr1 = odds.currency2[randomCopyVal1];
        var randomCopyArr2 = odds.currency2[randomCopyVal2];
        var randomCopyArr3 = odds.currency2[randomCopyVal3];
        var randomCopyArr4 = odds.currency2[randomCopyVal4];

        var randomAirArr1 = odds.currency3[randomAirVal1];
        var randomAirArr2 = odds.currency3[randomAirVal2];
        var randomAirArr3 = odds.currency3[randomAirVal3];
        var randomAirArr4 = odds.currency3[randomAirVal4];
        var randomAirArr5 = odds.currency3[randomAirVal5];
        var randomAirArr6 = odds.currency3[randomAirVal6];
        var randomAirArr7 = odds.currency3[randomAirVal7];
        var randomAirArr8 = odds.currency3[randomAirVal8];
        var randomAirArr9 = odds.currency3[randomAirVal9];
        var randomAirArr10 = odds.currency3[randomAirVal10];

        if(day<6){
            bitNormalDay();
        }
        else if(day==6){
            leekItem['狗狗币'] = 1;
            leekItem['莱特币'] = 15;
            leekItem['指数币'] = 4;
            leekItem['未来币'] = 1;
            leekItem.content = '山寨币发行,新增币种狗狗币,莱特币,指数币,未来币';
            bitNormalDay();
        }
        else if(day==7){
            nowEvent = {'content':'山寨币深受投机者喜爱，价格普涨','upRange':[0.2,0.3],major:'山寨币'};
            handleEvent(nowEvent);

        }
        else if(day>7&&day<24){
            nowEvent = findRightEvent();
            handleEvent(nowEvent);
        }else if(day==24){
            nowEvent = {'content':'Y行约谈第三方支付防范比特币风险','downRange':[0.25,0.25],major:'比特币'};
            handleEvent(nowEvent);
        }else if(day==25){
            nowEvent = {'content':'受近期媒体集体唱空及相关政策，比特币暴跌并引发恐慌','downRange':[0.25,0.25],major:'比特币'};
            handleEvent(nowEvent);
        }else if(day==26){
            nowEvent = {'content':'市场大量出现新的山寨币和空气币','upRange':[0,0.05],major:'比特币,山寨币'};
            handleEvent(nowEvent);

            var out = [];
            var num = 10;
            while(out.length < num){
                var temp = (Math.random()*coinName.length) >> 0;
                var tempVal = coinName.splice(temp,1);
                out.push(tempVal);
            }
            leekItem[out[0]] = 1;
            leekItem[out[1]] = 1;
            leekItem[out[2]] = 1;
            leekItem[out[3]] = 1;
            leekItem[out[4]] = 1;
            leekItem[out[5]] = 1;
            leekItem[out[6]] = 1;
            leekItem[out[7]] = 1;
            leekItem[out[8]] = 1;
            leekItem[out[9]] = 1;

        }else if(day==27){
            nowEvent = {'content':'IBM专利技术可以跟踪数字货币的价值','upRange':[0.10,0.20],major:'比特币'};
            handleEvent(nowEvent);

        }else if(day==28){
            nowEvent = {'content':'IBM专利技术可以跟踪数字货币的价值','upRange':[0.10,0.20],major:'比特币'};
            handleEvent(nowEvent);
        }else if(day>28){
            bitNormalDay();
            copycatNormalDay();
            airNormalDay();
        }

        //随机找出正确的事件
        function findRightEvent(){
            var randomTemp = findOnlyNum(leekItem.usedEvent);
            var tempEvent = events[randomTemp];
            if(tempEvent.once){
                leekItem.usedEvent.push(randomTemp);
            }
            return tempEvent;

        }

        function findOnlyNum(arr){
            var random = Math.floor(Math.random()*16);
            if(arr.indexOf(random)!=-1){
                return findOnlyNum(arr);
            }else{
                return random;
            }
        }

        //处理事件
        function handleEvent(nowEvent){
            leekItem.content = nowEvent.content;
            if(nowEvent.major == '比特币'){
                if(nowEvent.upRange){
                    var upOrDownVal = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    leekItem['比特币'] =  Math.round(leekItem['比特币'] *(1+upOrDownVal));
                }else{
                    var upOrDownVal = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    leekItem['比特币'] =  Math.round(leekItem['比特币'] *(1-upOrDownVal));
                }
                copycatNormalDay();
                if(day>26){
                    airNormalDay();
                }


            }else if(nowEvent.major == '山寨币'){

                if(nowEvent.upRange){
                    var upOrDownVal1 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal2 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal3 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal4 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    leekItem['狗狗币'] =  Math.round(leekItem['狗狗币'] *(1+upOrDownVal1));
                    leekItem['莱特币'] =  Math.round(leekItem['莱特币'] *(1+upOrDownVal2));
                    leekItem['指数币'] =  Math.round(leekItem['指数币'] *(1+upOrDownVal3));
                    leekItem['未来币'] =  Math.round(leekItem['未来币'] *(1+upOrDownVal4));
                }else{
                    var upOrDownVal1 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal2 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal3 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal4 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    leekItem['狗狗币'] =  Math.round(leekItem['狗狗币'] *(1-upOrDownVal1));
                    leekItem['莱特币'] =  Math.round(leekItem['莱特币'] *(1-upOrDownVal2));
                    leekItem['指数币'] =  Math.round(leekItem['指数币'] *(1-upOrDownVal3));
                    leekItem['未来币'] =  Math.round(leekItem['未来币'] *(1-upOrDownVal4));
                }
                bitNormalDay();
                if(day>26){
                    airNormalDay();
                }
            }else if(nowEvent.major == '空气币'){
                if(nowEvent.upRange){
                    var upOrDownVal2 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    leekItem['空气币'] =  Math.round(leekItem['空气币'] *(1+upOrDownVal));
                }else{
                    var upOrDownVal2 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    leekItem['空气币'] =  Math.round(leekItem['空气币'] *(1-upOrDownVal));
                }
                copycatNormalDay();
                bitNormalDay();
            }else if(nowEvent.major == '比特币,山寨币'){

                if(nowEvent.upRange){
                    var upOrDownVal = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal1 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal2 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal3 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    var upOrDownVal4 = Math.random()*(nowEvent.upRange[1] - nowEvent.upRange[0])+nowEvent.upRange[0];
                    leekItem['比特币'] =  Math.round(leekItem['比特币'] *(1+upOrDownVal));
                    leekItem['狗狗币'] =  Math.round(leekItem['狗狗币'] *(1+upOrDownVal1));
                    leekItem['莱特币'] =  Math.round(leekItem['莱特币'] *(1+upOrDownVal2));
                    leekItem['指数币'] =  Math.round(leekItem['指数币'] *(1+upOrDownVal3));
                    leekItem['未来币'] =  Math.round(leekItem['未来币'] *(1+upOrDownVal4));
                }else{
                    var upOrDownVal = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal1 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal2 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal3 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    var upOrDownVal4 = Math.random()*(nowEvent.downRange[1] - nowEvent.downRange[0])+nowEvent.downRange[0];
                    leekItem['比特币'] =  Math.round(leekItem['比特币'] *(1-upOrDownVal));
                    leekItem['狗狗币'] =  Math.round(leekItem['狗狗币'] *(1-upOrDownVal1));
                    leekItem['莱特币'] =  Math.round(leekItem['莱特币'] *(1-upOrDownVal2));
                    leekItem['指数币'] =  Math.round(leekItem['指数币'] *(1-upOrDownVal3));
                    leekItem['未来币'] =  Math.round(leekItem['未来币'] *(1-upOrDownVal4));
                }
                if(day>26){
                    airNormalDay();
                }
            }
            else{
                bitNormalDay();
                copycatNormalDay();
                if(day>26){
                    airNormalDay();
                }
            }
        }

        //比特币正常涨跌
        function bitNormalDay(){
            var nowBit = leekItem['比特币'];

            var upOrDownVal = Math.random()*(Math.abs(randomArr1[1]) - Math.abs(randomArr1[0]))+Math.abs(randomArr1[0]);

            if(randomArr1[1]<0){
                upOrDownVal = -upOrDownVal;
            }
            leekItem['比特币'] = Math.round(nowBit *(1+upOrDownVal));

        }

        //山寨币正常涨跌
        function copycatNormalDay(){

            var upOrDownVal1 = Math.random()*(Math.abs(randomCopyArr1[1]) - Math.abs(randomCopyArr1[0]))+Math.abs(randomCopyArr1[0]);
            if(randomCopyArr1[1]<0){
                upOrDownVal1 = -upOrDownVal1;
            }
            var upOrDownVal2 = Math.random()*(Math.abs(randomCopyArr2[1]) - Math.abs(randomCopyArr2[0]))+Math.abs(randomCopyArr2[0]);
            if(randomCopyArr2[1]<0){
                upOrDownVal2 = -upOrDownVal2;
            }
            var upOrDownVal3 = Math.random()*(Math.abs(randomCopyArr3[1]) - Math.abs(randomCopyArr3[0]))+Math.abs(randomCopyArr3[0]);
            if(randomCopyArr3[1]<0){
                upOrDownVal3 = -upOrDownVal3;
            }
            var upOrDownVal4 = Math.random()*(Math.abs(randomCopyArr4[1]) - Math.abs(randomCopyArr4[0]))+Math.abs(randomCopyArr4[0]);
            if(randomCopyArr4[1]<0){
                upOrDownVal4 = -upOrDownVal4;
            }

            leekItem['狗狗币'] =  Math.round(leekItem['狗狗币'] *(1+upOrDownVal1));
            leekItem['莱特币'] =  Math.round(leekItem['莱特币'] *(1+upOrDownVal2));
            leekItem['指数币'] =  Math.round(leekItem['指数币'] *(1+upOrDownVal3));
            leekItem['未来币'] =  Math.round(leekItem['未来币'] *(1+upOrDownVal4));
        }

        //空气币正常涨跌
        function airNormalDay(){

            var upOrDownVal1 = Math.random()*(Math.abs(randomAirArr1[1]) - Math.abs(randomAirArr1[0]))+ Math.abs(randomAirArr1[0]);
            if(randomAirArr1[1]<0){
                upOrDownVal1 = -upOrDownVal1;
            }
             var upOrDownVal2 = Math.random()*( Math.abs(randomAirArr2[1]) -  Math.abs(randomAirArr2[0]))+ Math.abs(randomAirArr2[0]);
            if(randomAirArr2[1]<0){
                upOrDownVal2 = -upOrDownVal2;
            }
             var upOrDownVal3 = Math.random()*( Math.abs(randomAirArr3[1]) -  Math.abs(randomAirArr3[0]))+ Math.abs(randomAirArr3[0]);
            if(randomAirArr3[1]<0){
                upOrDownVal3 = -upOrDownVal3;
            }
             var upOrDownVal4 = Math.random()*( Math.abs(randomAirArr4[1]) -  Math.abs(randomAirArr4[0]))+ Math.abs(randomAirArr4[0]);
            if(randomAirArr4[1]<0){
                upOrDownVal4 = -upOrDownVal4;
            }
             var upOrDownVal5 = Math.random()*( Math.abs(randomAirArr5[1]) -  Math.abs(randomAirArr5[0]))+ Math.abs(randomAirArr5[0]);
            if(randomAirArr5[1]<0){
                upOrDownVal5 = -upOrDownVal5;
            }
             var upOrDownVal6 = Math.random()*( Math.abs(randomAirArr6[1]) -  Math.abs(randomAirArr6[0]))+ Math.abs(randomAirArr6[0]);
            if(randomAirArr6[1]<0){
                upOrDownVal6 = -upOrDownVal6;
            }
             var upOrDownVal7 = Math.random()*( Math.abs(randomAirArr7[1]) -  Math.abs(randomAirArr7[0]))+ Math.abs(randomAirArr7[0]);
            if(randomAirArr7[1]<0){
                upOrDownVal7 = -upOrDownVal7;
            }
             var upOrDownVal8 = Math.random()*( Math.abs(randomAirArr8[1]) -  Math.abs(randomAirArr8[0]))+ Math.abs(randomAirArr8[0]);
            if(randomAirArr8[1]<0){
                upOrDownVal8 = -upOrDownVal8;
            }
             var upOrDownVal9 = Math.random()*( Math.abs(randomAirArr9[1]) -  Math.abs(randomAirArr9[0]))+ Math.abs(randomAirArr9[0]);
            if(randomAirArr9[1]<0){
                upOrDownVal9 = -upOrDownVal9;
            }
             var upOrDownVal10 = Math.random()*( Math.abs(randomAirArr10[1]) -  Math.abs(randomAirArr10[0]))+ Math.abs(randomAirArr10[0]);
            if(randomAirArr10[1]<0){
                upOrDownVal10 = -upOrDownVal10;
            }

            leekItem['airCoin1'] =  Math.round(leekItem['airCoin1'] *(1+upOrDownVal1));
            leekItem['airCoin2'] =  Math.round(leekItem['airCoin2'] *(1+upOrDownVal2));
            leekItem['airCoin3'] =  Math.round(leekItem['airCoin3'] *(1+upOrDownVal3));
            leekItem['airCoin4'] =  Math.round(leekItem['airCoin4'] *(1+upOrDownVal4));
            leekItem['airCoin5'] =  Math.round(leekItem['airCoin5'] *(1+upOrDownVal5));
            leekItem['airCoin6'] =  Math.round(leekItem['airCoin6'] *(1+upOrDownVal6));
            leekItem['airCoin7'] =  Math.round(leekItem['airCoin7'] *(1+upOrDownVal7));
            leekItem['airCoin8'] =  Math.round(leekItem['airCoin8'] *(1+upOrDownVal8));
            leekItem['airCoin9'] =  Math.round(leekItem['airCoin9'] *(1+upOrDownVal9));
            leekItem['airCoin10'] =  Math.round(leekItem['airCoin10'] *(1+upOrDownVal10));
        }

        return leekItem;
        // this.allCurrency.put(from,leekItem);

    }
};
module.exports = Leek;