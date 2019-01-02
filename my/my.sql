#设置连接服务器使用的编码是utf8
SET NAMES UTF8;
#丢弃数据库如果存在
DROP DATABASE IF EXISTS my;
#创建新的数据库my
CREATE DATABASE my CHARSET=UTF8;
#使用新建的数据库my
USE my;
#网站的基本信息
#创建基本信息表my_site_info
CREATE TABLE my_site_info(
	site_name VARCHAR(16),
	logo VARCHAR(64),
	copyright VARCHAR(64)
)
#向表my_site_info中添加数据
INSERT INTO my_site_info VALUES("母婴商城","img/logo.jpg","Copyright © 2019-2020版权所有");
#创建导航条目表my_navbar_item
CREATE TABLE my_navbar_item(
	name VARCHAR(16),
	url VARCHAR(64),
	title VARCHAR(32)

);
#向表my_navbar_item中添加数据
INSERT INTO my_navbar_item VALUES("","",""),
("","",""),
("","",""),
("","",""),
("","","");
#创建轮播图的条目表my_carousel_item(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),
	url VARCHAR(128),
	title VARCHAR(32)
);
#插入数据my_carousel_item
INSERT INTO my_carousel_item VALUES(NULL,"img/pic_1.jpg","/m1.html","第一张轮播图"),
(NULL,"img/pic_2.jpg","/m1.html","第2张轮播图"),
(NULL,"img/pic_3.jpg","/m1.html","第3张轮播图"),
(NULL,"img/pic_4.jpg","/m1.html","第4张轮播图");
