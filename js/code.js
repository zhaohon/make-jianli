!function () {
    var cssCode = window.cssCode = `
/*你好，我是赵宏，一名大专实习生。
请允许我做一个简单的自我介绍，但是纯文字太单调，所以我想来点特别的。
首先我准备一下样式。*/
*{
	transition: all .5s;
}
/*白色伤眼睛，来点暗色系的背景吧！*/
html{
	background: #636e72;
}
/*让我们给它加一个边框吧*/
#code{
    border: 2px solid #00FF1B;
    padding: 20px;
}
/*代码看不清楚？来点高亮吧！*/
.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.punctuation{
    color: #f8f8f2;
}
.token.function{
    color: red;
}
#code{
    color: #f8f8f2;
}
/*来点动画吧*/
#code{
    animation: breath 4s linear infinite;
}
/*现在开始写简历吧*/
/*首先我需要一张纸*/
`
    var htmlCode = window.htmlCode = `
#code{
    display: inline-block;
    position: fixed;
    right: 0;
    width: 50%;
    height: 80%;
    margin-right: 20px;
}
#paper{
    position: fixed;
    left: 0;
    width: 45%;
    height: 80%;
    background: linear-gradient(to bottom, #f4f39e, #f5da41); 
    padding: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    margin-top: 30%;
    
}
/*掉下去了！怎么办？*/
/*没关系，再用胶带粘住它*/
#paper:after {
    width: 25%;
    height: 5%;
    content: " ";
    margin-left: -90px;
    border: 1px solid rgba(200, 200, 200, .8);
    background: rgba(254, 254, 254, .6);
    box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    transform: rotate(-5deg);
    position: absolute;
    left: 50%;
    top:-15px;
}
#paper{
    margin-top: 0;
}
`
    var markdown = window.markdown = `
# 简历
## 基本资料
**姓名：赵宏**
**年龄：21**
**地址：河北石家庄**
**电话：15075158358**
**QQ: 2855675294**
**微信: (电话同步)**
## 技能介绍

1.掌握HTML5,CSS3 & JavaScript
2.熟练使用vue
3.熟练使用微信小程序
4.对tp5,node有简单了解
5.了解bootstrap,element-ui,mint-ui等框架


`
    var changeCode = window.changeCode = `
/*这样看起来很不舒服？让我们把markdown转换成更易读的显示方式吧*/
`
    var conclusion = window.conclusion = `
/*好了，这个就是我的初步简历了。如果您想要更多了解的话，可以电话联系我*/
`
}.call()
