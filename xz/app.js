//引入express
const express=require('express');
//引入bodyparser中间件
const bodyParser=require('body-parser')
//引入user路由器
const userRouter=requore('./router/user.js')
//创建服务器
var server=express();
//监听端口
server.listen(3000);
//托管静态文件目录
server.use(express.static('public'));
//使用bodyparser中间件将post数据解析为对象
server.use(bodyParser.urlencoded({
	extended:false
}))
//将user路由器挂载到/user下
server.use('/user',userRouter);
//将商品路由挂载到‘/product’下
server.use('/product',productRouter);