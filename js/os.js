//Web Security
if(window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x6f\x73\x74"] != 'lanky.cn' && window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x6f\x73\x74"] != 'd9y.net'){alert('警告！系统检测到该网站为恶意镜像站点，点击确认将立即自动跳转到官方站点！');window["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"]["\x68\x72\x65\x66"] = 'https://'+'lanky.cn/';}
document.oncontextmenu=new Function("event.returnValue=false;");document.onselectstart=new Function("event.returnValue=false;");if (top.location != self.location) {top.location=self.location;};(function() {if (!!window.ActiveXObject || 'ActiveXObject' in window) {window.location.href = 'https://lanky.cn/Home/up-browser.html'}})()
//Web Traffic
//Live Title
var OriginTitile = document.title,titleTime;document.addEventListener("visibilitychange",
function() {if (document.hidden) {document.title = "喜欢就赞助杯咖啡吧~";clearTimeout(titleTime)} else {document.title = "欢迎回来 | 蓝奇.中国" ;titleTime = setTimeout(function() {document.title = OriginTitile},1000)}});
//System functions
//UP TO TOP
$(window).scroll(function() {
var scroll_len = $(window).scrollTop();
if (scroll_len > 10) {
$('.side_bar').fadeIn();
} else {
$('.side_bar').fadeOut();
};
});
$(".side_bara").bind("click touch",function(){
$('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},300);
});
$(function(){
//获取要定位元素距离浏览器顶部的距离
var navH = $("#useruurl_tag").offset().top;
// console.log(navH);
//滚动条事件
$(window).scroll(function(){
//获取滚动条的滑动距离
var scroH = $(this).scrollTop();
// console.log(scroH);
//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
if(scroH>=navH){
$("#useruurl_tag").css({"position":"sticky","top":'10px'});
}
else if(scroH<navH){
$("#useruurl_tag").css({"position":"static"});
}
})
}); 

function apply_style_value( style_value )
{	
var ame_sack = new sack( ajaxurl );
ame_sack.execute = 1;
ame_sack.method = 'POST';
ame_sack.setVar( "action", "scap_apply_setbgcookies" );	
ame_sack.setVar( "style_value", style_value );	
ame_sack.onError = function() { 
console.log(style_value);
};
ame_sack.runAJAX();
}
function submit_url_edit( value )
{	
var ame_sack = new sack( ajaxurl );
ame_sack.execute = 1;
ame_sack.method = 'POST';
ame_sack.setVar( "action", "submit_url_edit_process" );	
ame_sack.setVar( "value", value );	
ame_sack.onError = function() { 
console.log(value);
};
ame_sack.runAJAX();
}
$('#in_taguurl_ajaxget').val('');
function share_taguurl_ajaxget( tagsid )
{	
if( tagsid > 0 ){
$("#uurltop").hide();
$("#utagadmin-"+tagsid).children("div").find("li").each(function(){
//var sta_data_image = $(this).find("img").attr('data-image');
//console.log(sta_data_image);
if($(this).find("img").attr('src') == '' ){					
$(this).find("img").attr('src', $(this).find("img").attr('data-image'));
}
});
}else{
$("#uurltop").show();
}
$('#useruurl_tag ul li a').removeClass('useruurl_a');
$('#utags-' + tagsid + ' a' ).addClass('useruurl_a');
$("#uurltagall").children("div").hide();
$("#uurltagall").children("div").each(function(){
//$(this).hide();
if($(this).attr('id') == 'utagadmin-'+tagsid){
$(this).show();
$(this).find("fieldset").first().css("margin-top","5px");
}
});
//if($('#utagadmin-'+tagsid).attr('tagsid-date') == tagsid)return false;
//if($('#utagadmin-1').length > 0)return false;
//$('#uurltagall').is(":empty") && 
if (tagsid == '0' && $("#in_taguurl_ajaxget").val() !== "1"){
var ame_sack = new sack( ajaxurl );
ame_sack.execute = 1;
ame_sack.method = 'POST';
ame_sack.setVar( "action", "share_taguurl_ajaxget" );	
ame_sack.setVar( "tagsid", tagsid );	
ame_sack.onError = function() { 
//console.log(tagsid);
};
ame_sack.runAJAX();
}else{
return false;
}
}
share_taguurl_ajaxget(0);
function refreshlogin(){
window.location.reload();
}