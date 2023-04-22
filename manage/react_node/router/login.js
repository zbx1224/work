const express = require("express");
const router = express.Router();
const axios = require("axios")
const {
    setLogin,
    setAdd,
    getRoot,
    getPage,
    removeUser,
    changeUser
} = require("../module/manage/handleLogin");


//退出session路由
router.get("/removeexit",(req,res)=>{
    req.session.adminRoot = ""
    res.send({code:0,value:"退出session",data:{}})
})

// 免登录路由
router.post("/avoidLand",(req,res)=>{
    if(req.session.adminRoot){
        res.send({code:1,value:"免登录成功",data:req.session.adminRoot})
    }else{
        res.send({code:0,value:"session不存在",data:{}})
    }
   
})


// 登录路由
router.post("/sumbit",async (req,res)=>{
    let result = await setLogin(req.body)
    if(result.code){
        req.session.adminRoot = result
    }
    res.send(result)
})

// 配置天气路由
// router.get("/weather",async (req,res)=>{

//     let {data} = await axios.get("http://pv.sohu.com/cityjson?ie=utf-8")
//     // 剪切的时候  市字不能存在
//     console.log(data)
//     // res.send(11111)
//     let url = data.split("省")[1]
//     console.log(url);
//     // axios.get(`https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=${encodeURIComponent(url)}`)
//     // .then(( {data} )=>{
//     //     res.send({code:1,value:"天气测试",data:{
//     //         value:data.data[0],
//     //         city: data.city,
//     //         update_time: data.update_time,
//     //     } })
//     // })
//     // .catch(()=>{
//     //     res.send({code:0,value:"天气获取失败",data:{}})
//     // })

    
// })

// 添加用户路由
router.post("/add",async (req,res)=>{
    let result = await setAdd(req.body)
    res.send(result)
})

// 获取所有账号路由
router.get("/root",async (req,res)=>{
    let result = await getRoot()
    res.send(result)
})

// 分页获取账号路由
router.get("/getpage",async (req,res)=>{
    let result = await getPage(req.query)
    res.send(result)
})

// 删除账号路由
router.post("/delete", (req,res)=>{
    removeUser(req.body)
    res.send({code:1,value:"删除成功",data:{}})
})

// 修改账号路由
router.post("/change",async (req,res)=>{
    let result = await changeUser(req.body)
    res.send(result)
}) 
module.exports = router