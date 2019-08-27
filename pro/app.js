//创建web服务器
const mysql = require("mysql");
const express = require("express");
const bodyParser=require('body-parser');
const session=require("express-session");
var cors=require('cors');
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"xmb",
  connectionLimit:10
});

var server=express();

//托管静态资源到public
server.use(express.static("public"));
//4.1:配置session
server.use(session({
  secret:"128位字符串",   //配置密钥
  resave:false,  //每次请求是否更新数据
  saveUninitialized:true  //保存初始化数据
}))
server.listen(3000);

server.use(cors({"orgin":"http://127.0.0.1:5500"}));
//配置body-parser中间件
server.use(bodyParser.urlencoded({
  extended:false
}));

server.get("/login",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var sql='SELECT uid FROM user WHERE uname = ? AND upwd = ?';
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
      }else{
         //将用户登录成功凭据保存session对象
       //result=[{id:1}]
       //获取uid
       var uid=result[0].uid
       //保存session对象中
       //console.log(uid);
       req.session.uid=uid; 
       res.send({code:1,msg:"登录成功"})
  }
});
});

server.post("/register",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  //var upwdconfirm=req.body.upwdconfirm;
  var phone=req.body.phone;
  var email=req.body.email;
  //console.log(req.body);
  if(!uname){
    res.send({code:-1,msg:"用户名不能为空"});
  }
  if(!upwd){
    res.send({code:-1,msg:"密码不能为空"});
  }
  // if(upwd!=upwdconfirm){
  //   res.send({code:-1,msg:"密码不一致"});
  // }
  if(!phone){
    res.send({code:-1,msg:"号码不能为空"});
  }
  if(!email){
    res.send({code:-1,msg:"邮件名不能为空"});
  }
  var sql='SELECT uid FROM user WHERE uname=?'
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      var sql='INSERT INTO user SET ?';
      pool.query(sql,[req.body],(err,result)=>{
        if(err) throw err;
        if(result.effectedRows==0){
          res.send({code:-1,msg:"注册失败"})
        }else{
          res.send({code:1,msg:"注册成功"})
        }
      })
    }else{
      res.send({code:-2,msg:"此用户名已被占用"})
    }
  })
  
})



server.get("/index",(req,res)=>{
  var sql='select * from product';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

server.get("/detail",(req,res)=>{
  var pid=req.query.pid;
  if(pid!=undefined){
    var sql='SELECT * FROM detail_product WHERE pid=?';
    pool.query(sql,[pid],(err,result)=>{
      if(err) throw err;
      res.send(result);
    })
  }else{
    res.send("");
  }
})





server.get("/list",(req,res)=>{
  //1:获取参数pno pageSize
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!ps){
    ps=6;
  }
  var offset = (pno-1)*ps;
  ps = parseInt(ps);
  var sql='SELECT * FROM product LIMIT ?,?';
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
})




