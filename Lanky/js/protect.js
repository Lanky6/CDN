//保护知识产权 禁止非法盗用 请遵守法律和道德底线
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