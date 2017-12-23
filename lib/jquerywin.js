//显示浮动窗口的方法  
function showwin(){  
   //1 找到对应的div节点  
    var windNode = $("#win");  
   //2 让div对应的窗口显示出来  
    //方法1.修改节点的css,让窗口显示出来  
    //windNode.css("display","block");  
    //方法2：利用Jquery的show方法  
    //windNode.show("slow");  
    //方法3: 利用Jquery的fadeIn方法  
    windNode.fadeIn("slow");  
}  
  
//隐藏窗口的方法  
function hide(){  
    //1 找到窗口对应的节点  
    var windNode = $("#win");  
    //2 将窗口隐藏起来  
    //方法1.修改节点的css,让窗口显示出来  
    //windNode.css("display","none");  
    //方法2：利用Jquery的show方法  
    //windNode.hide("slow");  
    //方法3: 利用Jquery的fadeIn方法  
    windNode.fadeOut("slow");  
}  