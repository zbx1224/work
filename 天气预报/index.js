let btn=document.getElementById("search")
let option1=document.getElementById("option1")
let option2=document.getElementById("option2")
let option3=document.getElementById("option3")
let conter=document.getElementById("center")
let city=document.getElementById("location")
let back=document.getElementById("return");

btn.onclick=function(){
    var input=document.getElementById("input")
    city.innerText=input.value
    if(city.innerText=='') city.innerText='重庆'
    const xhr=new XMLHttpRequest()
    xhr.open('get','https://www.tianqiapi.com/free/day?appid=38483595&appsecret=zPt5uglc&city='+input.value)
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
            var res1=JSON.parse(xhr.response)
            console.log(xhr.response)
            conter.innerHTML='<p class="tem">'+res1.tem+'°</p>'+'<p class="wea">'+res1.wea+'</p>'+'<p>'+res1.win+' '+res1.win_speed+'</p>'
            option2.innerHTML='<img src="./image/sun2.png">'+'<p style="color:orange;">今日天气</p>'
            center.style.height='63vh'
            var cityId=res1.cityid
            back.innerText='<'
            
            option1.onclick=function(){
                const xhr=new XMLHttpRequest()
                xhr.open('get','https://devapi.qweather.com/v7/indices/1d?&key=efb91c04666e4efc84cf0112c1e3b11d&type=1,2,3,4&location='+cityId)
                xhr.send()
                xhr.onreadystatechange=function(){
                    if(xhr.readyState===4){
                        if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                            var res2=JSON.parse(xhr.response)
                            center.innerHTML='<div class="content"><div class="daily"><p>钓鱼指数'+res2.daily[3].level+'</p><p>'+res2.daily[3].category+'</p><img style="height:13vw" src="./image/fich.png"></div>'+
                                             '<div class="daily"><p>洗车指数'+res2.daily[0].level+'</p><p>'+res2.daily[0].category+'</p><img style="height:13vw" src="./image/car.png"></div></div>'+
                                             '<div class="content"><div class="daily"><p>穿衣指数'+res2.daily[2].level+'</p><p>'+res2.daily[2].category+'</p><img style="height:13vw" src="./image/cloth.png"></div>'+
                                             '<div class="daily"><p>运动指数'+res2.daily[1].level+'</p><p>'+res2.daily[1].category+'</p><img style="height:13vw" src="./image/ball.png"></div></div>'
                            option1.innerHTML='<img src="./image/ball2.png">'+'<p style="color:orange;">生活指数</p>'
                            option2.innerHTML='<img src="./image/sun.png">'+'<p>今日天气</p>'
                            option3.innerHTML='<img src="./image/plane.png">'+'<p>未来天气</p>'
                            center.style.cssText='display:flex;flex-wrap:nowarp;justify-content: center;'
                            
                        }
                    }
                }
            }

            option2.onclick=function(){
                conter.innerHTML='<p class="tem">'+res1.tem+'°</p>'+'<p class="wea">'+res1.wea+'</p>'+'<p>'+res1.win+' '+res1.win_speed+'</p>'
                option2.innerHTML='<img src="./image/sun2.png">'+'<p style="color:orange;">今日天气</p>'
                option1.innerHTML='<img src="./image/ball1.png">'+'<p>生活指数</p>'
                option3.innerHTML='<img src="./image/plane.png">'+'<p>未来天气</p>'
                center.style.cssText='height:63vh;'

            }

            option3.onclick=function(){
                const xhr=new XMLHttpRequest()
                xhr.open('get','https://www.tianqiapi.com/free/week?appid=38483595&appsecret=zPt5uglc&city='+input.value)
                xhr.send()
                xhr.onreadystatechange=function(){
                if(xhr.readyState===4){
                    if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                        var res3=JSON.parse(xhr.response)
                        center.innerHTML='<div class="futurn"><p>'+res3.data[0].date+'</p><p>'+res3.data[1].date+'</p><p>'+res3.data[2].date+'</p><p>'+res3.data[3].date+'</p><p>'+res3.data[4].date+'</p><p>'+res3.data[5].date+'</p><p>'+res3.data[6].date+'</p></div>'+
                                         '<div class="futurn"><p>'+res3.data[0].wea+'</p><p>'+res3.data[1].wea+'</p><p>'+res3.data[2].wea+'</p><p>'+res3.data[3].wea+'</p><p>'+res3.data[4].wea+'</p><p>'+res3.data[5].wea+'</p><p>'+res3.data[6].wea+'</p></div>'+
                                         '<div class="futurn"><p>'+res3.data[0].tem_day+'℃/'+res3.data[0].tem_night+'℃'+'</p><p>'+res3.data[1].tem_day+'℃/'+res3.data[1].tem_night+'℃'+'</p><p>'+res3.data[2].tem_day+'℃/'+res3.data[2].tem_night+'℃'+'</p><p>'+res3.data[3].tem_day+'℃/'+res3.data[3].tem_night+'℃'+
                                         '</p><p>'+res3.data[4].tem_day+'℃/'+res3.data[4].tem_night+'℃'+'</p><p>'+res3.data[5].tem_day+'℃/'+res3.data[5].tem_night+'℃'+'</p><p>'+res3.data[6].tem_day+'℃/'+res3.data[6].tem_night+'℃'+'</p></div>'
                        option3.innerHTML='<img src="./image/plane2.png">'+'<p style="color:orange">未来天气</p>'
                        option1.innerHTML='<img src="./image/ball1.png">'+'<p>生活指数</p>'
                        option2.innerHTML='<img src="./image/sun.png">'+'<p>今日天气</p>'
                        center.style.cssText='display:flex;flex-wrap:nowrap;justify-content: space-around;'

                    }
                }
            }

            }

            }
        }
    }  
}

let place=document.getElementById("place")
place.onclick=function(){
    conter.innerHTML='<input id="input" type="text" placeholder="请输入你想搜索的城市" value=""><img id="search" src="./image/search.png">'
    
}
back.onclick=function(){
    window.location.reload();
}