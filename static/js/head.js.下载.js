function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var Request = new Object();


function down(id,title,html,downurl) {
	var appid = "139999";
	var baseDomains=['url.9xiazaiqi.com'];
	var i = Math.floor(Math.random()*baseDomains.length);
	var randomDomain = baseDomains[i];
	
	Request = GetRequest();
	
	if(Request['from']=='360query'){
		appid = "139999";
	}
	
	var url = location.search; //获取url中"?"符后的字串   
	var theRequest = new Object();   
	if (url.indexOf("?") != -1) {   
      var str = url.substr(1);   
      strs = str.split("&");   
      for(var i = 0; i < strs.length; i ++) {   
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
      }   
	}
   
	if(theRequest.tab>0){
		appid=theRequest.tab;
	}
	
	if($.cookie("localAppid")!=null){
		appid=$.cookie("localAppid");
	};

	downurl=downurl||"";
    //var url = 'http://'+parseInt((Date.parse(new Date()) / 1000 - 1451577600) / 3600)+'.'+randomDomain+'/xiaz/' + title + "@" + appid + "_" + id +'.exe';
	var url = downurl;
    html=html.replace(/url/g,url);
    document.write(html);
    $('#bzWrap').on('click',function(){
      window.open(url, '_blank');
  });
}