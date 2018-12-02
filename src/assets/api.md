接口文档

测试的时候没有token值的话 可以加debug  = 1

Code ： 1（成功） 0 （失败） 


1:  注册接口
Url:     http://148.70.56.228/index.php/CusApi/register
mothed:  POST/GET 
param:     
   账户 ： account
   真实姓名： true_name
   手机号： iphone 
   邮箱 ： email
   微信 ： wechat
   邀请码 ： code
   邀请人 ： inpeople 
   密码 ： password
   国籍 ： country
Return :   {
    "data": {
      },
      "code": 1,
      "message": "success"
}

2:  登录接口
    
Url:     http://148.70.56.228/index.php/CusApi/login
mothed:  POST/GET 
param:     
账号 ： account 
密码 ： password
Return：{
    "data": {
        "uid": "192",
        "token": "c6810ed37d06a80408aff8a9c96b609b"
    },
    "code": 1,
    "message": "success"
}
3：用户中心：

Url:     http://148.70.56.228/index.php/CusApi/customer
mothed:  POST/GET 
param:     

用户id ： uid 
Token   ： token
Return:{
    "data": {
        "id": "192",
        "account": "test7",
        "true_name": null,
        "iphone": "1534323311",
        "email": "12323213123@qq.com",
        "create_time": "2018-12-02 14:49:43",
        "status": "1",
        "wechat": "1322344",
        "code": "12321233",
        "inpeople": "kan",
        "isvip": "0",
        "starttime": null,
        "endtime": null,
        "country": "china"
    },
    "code": 1,
    "message": "success"
}

4：日常播报：

Url:     http://148.70.56.228/index.php/CusApi/dayliy
mothed:  POST/GET 
param:     
 用户id ： uid 
Token   ： token
页数  ： page（默认0 从零开始）
每页展示数 ： pagenum（默认5条）
Return：
    {"data":[
      {"id":"13","title":"\u4e1c\u65b9\u8d22\u5bcc\u9884\u8ba1\u524d\u4e09\u5b63\u5ea6\u51c0\u5229\u6da6\u540c\u6bd4\u589e\u957f\u4e03\u81f3\u516b\u6210",
      "content":"
\u4e1c\u65b9\u8d22\u5bcc15\u65e5\u5348\u95f4\u53d1\u5e03\u4e1a\u7ee9\u9884\u544a\uff0c\u516c\u53f8\u9884\u8ba1\u524d\u4e09\u5b63\u5ea6\u51c0\u5229\u6da6\u540c\u6bd4\u589e\u957f\u7ea670.46%\u201481.39%\uff0c\u76c8\u5229\u7ea67.8\u4ebf\u5143\u20148.3\u4ebf\u5143\u3002\u5176\u4e2d\uff0c\u7b2c\u4e09\u5b63\u5ea6\u51c0\u5229\u6da6\u540c\u6bd4\u589e\u957f\u7ea611.40%\u201436.72%\u3002\u516c\u53f8\u79f0\uff0c2018\u5e74\u524d\u4e09\u5b63\u5ea6\u516c\u53f8\u8bc1\u5238\u4e1a\u52a1\u8fdb\u4e00\u6b65\u53d1\u5c55\uff0c\u8bc1\u5238\u4e1a\u52a1\u76f8\u5173\u6536\u5165\u540c\u6bd4\u5b9e\u73b0\u5927\u5e45\u589e\u957f\u30022018\u5e74\u524d\u4e09\u5b63\u5ea6\uff0c\u516c\u53f8\u4e92\u8054\u7f51\u91d1\u878d\u7535\u5b50\u5546\u52a1\u5e73\u53f0<\/span>\u57fa\u91d1\u9500\u552e<\/a><\/span>\u989d\u540c\u6bd4\u5927\u5e45\u589e\u957f\uff0c\u91d1\u878d\u7535\u5b50\u5546\u52a1\u670d\u52a1\u4e1a\u52a1\u6536\u5165\u540c\u6bd4\u5927\u5e45\u589e\u957f\u3002<\/span><\/p>
Oriental Fortune released its performance forecast on the afternoon of the 15th. The company expects net profit for the first three quarters to increase by approximately 70.46%-81.39% and profit of 780 million yuan to 830 million yuan. Among them, the third quarter net profit increased by about 11.40% -36.72%. According to the company, the company's securities business was further developed in the first three quarters of 2018, and the related income from the securities business increased significantly year-on-year. In the first three quarters of 2018, the company's Internet financial e-commerce platform fund sales increased significantly year-on-year, and financial e-commerce service business revenue increased significantly year-on-year.<\/span><\/p>",
"videourl":null,
"createtime":"2018-12-01 09:47:20",
"type":"1"}],
"code":1,"message":"success"
}

5：会员播报

Url： http://148.70.56.228/index.php/CusApi/memberann
mothed:  POST/GET 
param:     

用户id ： uid 
Token   ： token
页数  ： page（默认0 从零开始）
每页展示数 ： pagenum（默认5条）
return:
 {"data":[{"id":"15","title":"Midea Group has a certain number of shareholders, and the average shareholding of households continues to decrease.","content":"
Midea Group has a certain number of shareholders, and the average shareholding of households continues to decrease.<\/p>","videourl":null,"createtime":"2018-12-01 09:50:29","type":"2"}],"code":1,"message":"success"}

6: 音频播报：
Url： http://148.70.56.228/index.php/CusApi/video
mothed:  POST/GET 
param:     

用户id ： uid 
Token   ： token
页数  ： page（默认0 从零开始）
每页展示数 ： pagenum（默认5条）
return:
   {
    "data": [
        {
            "id": "9",
            "title": "test5",
            "content": "123455677888",
            "videourl": "2018/11/25/11/20/02lbiE8.mp4",
            "createtime": "2018-11-25 11:20:24",
            "type": "3"
        }
    ],
    "code": 1,
    "message": "success"
}


7: 分析师：
Url： http://148.70.56.228/index.php/CusApi/fxs
mothed:  POST/GET 
param:     
用户id ： uid 
Token   ： token
num ： 展示数量

return:
   {
    "data": [
        {
            "id": "5",
            "name": "ady",
            "thumb": "http://phsw0u5a6.bkt.clouddn.com/2018/12/01/09/54/56nRZz1.jpg",
            "profile": "4.7%",
            "createtime": "2018-12-01 09:54:57"
        },
        {
            "id": "4",
            "name": "jack",
            "thumb": "http://phsw0u5a6.bkt.clouddn.com/2018/12/01/09/54/11WSAs0.jpg",
            "profile": "5%",
            "createtime": "2018-12-01 09:54:11"
        }
    ],
    "code": 1,
    "message": "success"
}


7: vip 用户申请：
Url： http://148.70.56.228/index.php/CusApi/apply
mothed:  POST/GET 
param:     
  用户id ： uid 
Token   ： token
时长 ： time （直接文字： 三个月 、 半年等）

return:
{
    "data": [],
    "code": 1,
    "message": "success"
}
   