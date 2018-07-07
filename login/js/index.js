mui.init({
      		subpages:[//首先加载首页  
                        {  
                            url:'html/book/book.html',  
                            id:'tab_home',  
                            styles:{  
                                top:'0px',  
                                bottom:'60px'  
                            }  
                        }  
                    ],  
            preloadPages:[//预加载其他页面  
                {  
                    url:'html/group/group.html',  
                    id:'tab_message',  
                    styles:{
	                top:'0px',
	                bottom:'60px'  
                    }  
                },  
                {  
	                url:'html/gathering/gathering.html',  
	                id:'tab_contact',  
	                styles:{  
	                    top:'0px',  
	                    bottom:'60px'  
	                }  
                },
                {
                	url:'html/config/config.html',
                	id:'tab_setting',
                	styles:{
                		top:'0px',
                		bottom:'60px'
                	}
                }
            ] 
      	});
      	mui.plusReady(function(){
      		var tab_home,tab_message,tab_contact  
                mui("#nav").on("tap","#tab_home",function(){//点击触发   
                    tab_home=plus.webview.getWebviewById("tab_home");  
                    tab_home.show()  
                    tab_message.hide()
                    tab_contact.hide()
                    tab_setting.hide()
                })  
                mui("#nav").on("tap","#tab_message",function(){//点击触发  
                    tab_message=plus.webview.getWebviewById("tab_message");  
                    tab_message.show()
                })  
                mui("#nav").on("tap","#tab_contact",function(){//点击触发  
                    tab_contact=plus.webview.getWebviewById("tab_contact");  
                    tab_contact.show()
                })  
                mui("#nav").on("tap","#tab_setting",function(){//点击触发  
                	tab_setting=plus.webview.getWebviewById("tab_setting");
                	tab_setting.show()
                })
      	})