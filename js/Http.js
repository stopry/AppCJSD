//var ApiHost = "http://192.168.19.222:8080";//host
var ApiHost = "http://www.0001wan.com";//host;
			function toUrlPar(obj) {
			    var s = ""
			    for (var itm in obj) {
			        if (obj[itm] instanceof Array == true) {
			            //是数组
			            s += "&" + itm + "_count=" + obj[itm].length
			            for (var i = 0; i < obj[itm].length; i++) {
			                if (obj[itm][i] instanceof Array == true) {
			                    s += ergodicJson2(obj[itm][i]);
			                } else if (obj[itm][i] instanceof Object == true) {
			                    s += ergodicJson2(obj[itm][i]);
			                } else {
			                    s += "&" + encodeURI(obj[itm][i]) + "=" + encodeURI(obj[itm][i]);
			                }
			            }
			        } else if (obj[itm] instanceof Object == true) {
			            //是json对象。
			            s += ergodicJson2(obj[itm]);
			        }
			        else {
			            //是简单数值   
			            s += "&" + encodeURI(itm) + "=" + encodeURI(obj[itm]);
			        }
			    }
			    if(s){
			        s = "?"+s.substring(1,s.length);
			        return s;
			    }else{
			        return '';
			    }
			    
			}
			var Http = (function(http){
			http=http||{};
			//post请求
			http.post = function(url,data,callBack,header,callErrBack){
				document.getElementById('ajaxloading').style.display = 'block';
				header = header||void(0);
				var xhr = new plus.net.XMLHttpRequest();//xhr对象;
				xhr.onreadystatechange = function () {
					switch ( xhr.readyState ) {
						case 4:
							if ( xhr.status == 200 ) {
								callBack( JSON.parse(xhr.responseText) );
								document.getElementById("ajaxloading").style.display = 'none';
							} else {
					            document.getElementById("ajaxloading").style.display = 'none';
					            callErrBack&&callErrBack();
								console.log( "xhr请求失败："+xhr.responseText );
							}
						break;
						default :
						break;
					}
				}
				//超时处理
				xhr.ontimeout = function(e){
					LayaSample.littleTip.showThis("网络超时");
					document.getElementById("ajaxloading").style.display = 'none';
				}
				xhr.timeout = 10000;
				xhr.overrideMimeType( "json; charset=utf-8" );
				xhr.open( "POST", ApiHost+url );
				//请求头设置
				xhr.setRequestHeader('Accept','*/*');
				xhr.setRequestHeader('Accept-Encoding',' deflate, sdch');
				xhr.setRequestHeader('Accept-Language','h-CN,zh;q=0.8');
				xhr.setRequestHeader('Connection','keep-alive');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.setRequestHeader('Host','www.0001wan.com');
				xhr.setRequestHeader('Referer','http://www.0001wan.com/');
				if(header){
					xhr.setRequestHeader(header[0],header[1]);
				}
				
				xhr.send(data);
				console.log(data)
			};
			
			//get请求
			http.get = function(url,data,callBack,header,callErrBack){
				document.getElementById('ajaxloading').style.display = 'block';
				header = header||void(0);
				var xhr = new plus.net.XMLHttpRequest();
				xhr.onreadystatechange = function () {
					switch ( xhr.readyState ) {
						case 4:
							if ( xhr.status == 200 ) {
								callBack( JSON.parse(xhr.responseText) );
								document.getElementById("ajaxloading").style.display = 'none';
							} else {
					            document.getElementById("ajaxloading").style.display = 'none';
					            callErrBack&&callErrBack();
								console.log( "xhr请求失败："+xhr.responseText);
							}
						break;
						default :
						break;
					}
				}
				//超时处理
				xhr.ontimeout = function(e){
					if(LayaSample!='undefine'){
						LayaSample.littleTip.showThis("网络超时");
					}
					document.getElementById("ajaxloading").style.display = 'none';
				}
				xhr.timeout = 10000;
				xhr.overrideMimeType( "json; charset=utf-8" );
				//打开请求
				xhr.open( "GET", ApiHost+url+toUrlPar(data) );
				//请求头设置
				xhr.setRequestHeader('Accept','*/*');
				xhr.setRequestHeader('Accept-Encoding',' deflate, sdch');
				xhr.setRequestHeader('Accept-Language','h-CN,zh;q=0.8');
				xhr.setRequestHeader('Connection','keep-alive');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.setRequestHeader('Host','www.0001wan.com');
				xhr.setRequestHeader('Referer','http://www.0001wan.com/');
				if(header){
					xhr.setRequestHeader(header[0],header[1]);
				}
				xhr.send();
			}
			
			//得到好友信息
    		http.friend = function(url,data,callBack,header){
        		document.getElementById('ajaxloading').style.display = 'block';
				header = header||void(0);
				var xhr = new plus.net.XMLHttpRequest();
				xhr.onreadystatechange = function () {
					switch ( xhr.readyState ) {
						case 4:
							if ( xhr.status == 200 ) {
								callBack( JSON.parse(xhr.responseText) );
								document.getElementById("ajaxloading").style.display = 'none';
							} else {
					            document.getElementById("ajaxloading").style.display = 'none';
					            callErrBack&&callErrBack();
								console.log( "xhr请求失败："+xhr.responseText);
							}
						break;
						default :
						break;
						
					}
				}
				//超时处理
				xhr.ontimeout = function(e){
					if(LayaSample!='undefine'){
						LayaSample.littleTip.showThis("网络超时");
					}
					document.getElementById("ajaxloading").style.display = 'none';
				}
				xhr.timeout = 10000;
				xhr.overrideMimeType( "json; charset=utf-8" );
				//打开请求
				xhr.open("GET",ApiHost+url+"/"+data);
				//请求头设置
				xhr.setRequestHeader('Accept','*/*');
				xhr.setRequestHeader('Accept-Encoding',' deflate, sdch');
				xhr.setRequestHeader('Accept-Language','h-CN,zh;q=0.8');
				xhr.setRequestHeader('Connection','keep-alive');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.setRequestHeader('Host','www.0001wan.com');
				xhr.setRequestHeader('Referer','http://www.0001wan.com/');
				if(header){
					xhr.setRequestHeader(header[0],header[1]);
				}
				xhr.send();
    		}
			return http;
		})(Http);
		

function skipToUrl(url){
    if(!url || url == ''){
        return;
    }
    Http.get('/api/game/getSkipSign',{},function(result){
         if(!result.success) return;
         if(url.indexOf('?') >= 0){
             url += '&'+new Date().getTime()+'&sign=';
         }else{
             url += '?'+new Date().getTime()+'&sign=';
         }
         url += result.obj;
         window.location = url;
    },['Authorization','bearer '+localStorage.getItem('access_token')]);
}