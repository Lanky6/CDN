//UA适配内容
var browser = {
versions: function () {
var u = navigator.userAgent, app = navigator.appVersion;
return {
trident: u.indexOf('Trident') > -1,
presto: u.indexOf('Presto') > -1,
webKit: u.indexOf('AppleWebKit') > -1,
gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/),
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
iPhone: u.indexOf('iPhone') > -1 || (u.indexOf('Mac') > -1 && u.indexOf
('Macintosh') < 0),
iPad: u.indexOf('iPad') > -1,
webApp: u.indexOf('Safari') == -1
};} (),language: (navigator.browserLanguage || navigator.language).toLowerCase()}
if(!browser.versions.iPad){
if (browser.versions.android || browser.versions.iPhone) {
self.location = "https://lanky.cn/m.html";
}}
//IE内核屏蔽
;(function() {
        if (!!window.ActiveXObject || 'ActiveXObject' in window) {
	window.location.href = 'https://lanky.cn/api/up-browser.html'
        }
      })()
//流量统计
var cnzz_s_tag = document.createElement('script');
cnzz_s_tag.type = 'text/javascript';
cnzz_s_tag.async = true;
cnzz_s_tag.charset = 'utf-8';
cnzz_s_tag.src = 'https://w.cnzz.com/c.php?id=1279171634&async=1';
var root_s = document.getElementsByTagName('script')[0];
root_s.parentNode.insertBefore(cnzz_s_tag, root_s);
//源码保护
if(window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x6f\x73\x74"] != 'lanky.cn' && window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x6f\x73\x74"] != 'd9y.net'){
    alert('警告！检测到该网站为恶意镜像站点，将立即为您跳转到官方站点！');
    window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x72\x65\x66"] = 'https://'+'lanky.cn/';
}
window.onload = function(){
   document.onkeydown = function(event){
    var ev = event || window.event || arguments.callee.caller.arguments[0];
    //123=F12 | 屏蔽F^N键和Ctrl键
    if(event.keyCode = 123){
     return false;
    }
   }
  }
document.oncontextmenu=new Function("event.returnValue=false;");
document.onselectstart=new Function("event.returnValue=false;");// 屏蔽鼠标右键和文本选择
if (top.location != self.location) {top.location=self.location;}// 屏蔽非法镜像或引用
//动态标题
var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        document.title = "蓝奇云冲浪";
        clearTimeout(titleTime)
    } else {
        document.title = "欢迎回来" ;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        500)
    }
});
//切换内容菜单
function show(id){
var divs = document.getElementsByName("nav")
for (var i = 0 ; i < divs.length ; i++){
if (divs[i].id == "n"+id ){
divs[i].style.display=""
}else{
divs[i].style.display="none"
}
}
}
/*//密码保护
function password() {   
var testV = 1;   
var pass1 = prompt('此页不直接开放，请输入密码','');   
while (testV < 999999999999) {   
if (!pass1)   
history.go(-1);   
if (pass1 == "Lanky6") {//Password   
alert('密码正确，欢迎使用');   
break;   
}   
testV+=1;   
var pass1 =   
prompt('密码错误，请重新输入');   
}   
if (pass1!="password" & testV ==3)   
history.go(-1);   
return " ";   
}   
document.write(password());
//动态背景
var BKs = [];
BKs[0] = "https://lanky6.gitee.io/files/img/BKs/000.jpg";
BKs[1] = "https://lanky6.gitee.io/files/img/BKs/001.jpg";
var randomBK = 
Math.round( Math.random() * 1 );
//输出随机图片
document.write('<style>.page{background:url(' + BKs[randomBK] + ') repeat-x}</style>');*/