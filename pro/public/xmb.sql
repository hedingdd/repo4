SET NAMES UTF8;
DROP DATABASE IF EXISTS xmb;
CREATE DATABASE xmb CHARSET=UTF8;
USE xmb;

CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(16),
  phone CHAR(11),
  email VARCHAR(16)
);
INSERT INTO user VALUES(null,"tom","12345",12312345678,"12345@qq.com");
INSERT INTO user VALUES(null,"tony","12344",12312345677,"12344@qq.com");
INSERT INTO user VALUES(null,"jerry","12343",12312345676,"12343@qq.com");
INSERT INTO user VALUES(null,"lili","12342",12312345675,"12342@qq.com");
INSERT INTO user VALUES(null,"dangdang","12341",12312345674,"12341@qq.com");

CREATE TABLE product_family(
  fid INT PRIMARY KEY,
  fname VARCHAR(16),
);
INSERT INTO product_family VALUES(1,"辣条");
INSERT INTO product_family VALUES(2,"零食");
INSERT INTO product_family VALUES(3,"饮料");
CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  fid INT,
  pname VARCHAR(16),
  price decimal(10,2),
  title VARCHAR(64),
  pic VARCHAR(128),
  href VARCHAR(128)
);
INSERT INTO product VALUES(null,1,"火爆鸡筋","0.50","本村爆款辣条，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/latiao01.jpg","detail.html?lid=1");
INSERT INTO product VALUES(null,1,"小滑头","0.50","本村爆款辣条，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/latiao02.jpg","detail.html?lid=2");
INSERT INTO product VALUES(null,1,"北京烤鸭","0.50","本村爆款辣条，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/latiao03.jpg","detail.html?lid=3");
INSERT INTO product VALUES(null,2,"大大泡泡糖","0.50","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin01.jpg","detail.html?lid=4");
INSERT INTO product VALUES(null,2,"大白兔奶糖","7.50","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin02.jpg","detail.html?lid=5");
INSERT INTO product VALUES(null,2,"旺仔小馒头","3.00","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin03.jpg","detail.html?lid=6");
INSERT INTO product VALUES(null,2,"咪咪","0.50","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin04.jpg","detail.html?lid=7");
INSERT INTO product VALUES(null,2,"南京板鸭","0.50","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin05.jpg","detail.html?lid=8");
INSERT INTO product VALUES(null,2,"盼盼牛排","3.00","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin06.jpg","detail.html?lid=9");
INSERT INTO product VALUES(null,2,"熊字饼","2.50","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin08.png","detail.html?lid=10");
INSERT INTO product VALUES(null,2,"喜之郎果冻","1.00","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin09.png","detail.html?lid=11");
INSERT INTO product VALUES(null,2,"乐事","4.00","本村爆款零食，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/shipin10.png","detail.html?lid=12");
INSERT INTO product VALUES(null,3,"康师傅冰红茶","2.50","本村爆款饮料，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/yinliao07","detail.html?lid=13");
INSERT INTO product VALUES(null,3,"康师傅冰糖雪梨","2.50","本村爆款饮料，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/yinliao02.jpg","detail.html?lid=14");
INSERT INTO product VALUES(null,3,"+C","4.00","本村爆款饮料，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/yinliao03.jpg","detail.html?lid=15");
INSERT INTO product VALUES(null,3,"雪碧","3.00","本村爆款饮料，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/yinlia004.jpg","detail.html?lid=16");
INSERT INTO product VALUES(null,3,"可口可乐","3.00","本村爆款饮料，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/yinliao05.jpg","detail.html?lid=17");
INSERT INTO product VALUES(null,3,"红牛","6.00","本村爆款饮料，味道倍棒，令人垂涎不止、欲罢不能,快来品尝吧！","img/yinliao06.jpg","detail.html?lid=18");

CREATE TABLE detail_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  fid INT,
  pname VARCHAR(16),
  pic1 VARCHAR(128),
  pic2 VARCHAR(128),
  pic3 VARCHAR(128),
  pic4 VARCHAR(128),
  title VARCHAR(64),
  price decimal(10,2),
  active VARCHAR(64)
);
INSERT INTO detail_product VALUES(null,1,"火爆鸡筋","img/detail02.jpg","img/detail03.jpg","img/detail04.jpg","img/detail02.jpg","素火爆鸡筋麻辣条零食 24g/包 8090后怀旧食品 小辣条 1包火爆鸡筋(童年喜爱)",0.50,"*1块钱2包 *2块钱3包 *3块钱4包 *4块钱5包");
INSERT INTO detail_product VALUES(null,1,"小滑头","img/latiao02.jpg","img/latiao02.jpg","img/latiao02.jpg","img/latiao02.jpg","小滑头麻辣条零食 24g/包 8090后怀旧食品 小辣条 1包小滑头(童年喜爱)",0.50,"*1块钱2包 *2块钱3包 *3块钱4包 *4块钱5包");
INSERT INTO detail_product VALUES(null,1,"北京烤鸭","img/latiao03.jpg","img/latiao03.jpg","img/latiao03.jpg","img/latiao03.jpg","北京烤鸭麻辣条零食 24g/包 8090后怀旧食品 小辣条 1包北京烤鸭(童年喜爱)",0.50,"*1块钱2包 *2块钱3包 *3块钱4包 *4块钱5包");
INSERT INTO detail_product VALUES(null,2,"大大泡泡糖","img/shipin01.jpg","img/shipin01.jpg","img/shipin01.jpg","img/shipin01.jpg","大大泡泡糖 4g/个 8090后怀旧食品 一个泡泡糖可以吹一天(童年喜爱)",0.50,"*1块钱2个 *2块钱3个 *3块钱4个 *4块钱5个");
INSERT INTO detail_product VALUES(null,2,"大白兔奶糖","img/shipin02.jpg","img/shipin02.jpg","img/shipin02.jpg","img/shipin02.jpg","大白兔奶糖 300g/包 8090后怀旧食品 这个糖最好吃了(童年喜爱)",7.50,"*10块钱2个 *20块钱3个 *30块钱4个 *40块钱5个");
INSERT INTO detail_product VALUES(null,2,"旺仔小馒头","img/shipin03.jpg","img/shipin03.jpg","img/shipin03.jpg","img/shipin03.jpg","旺仔小馒头 100g/包 8090后怀旧食品 妈妈的味道我知道(童年喜爱)",3.00,"*5块钱2个 *10块钱3个 *20块钱4个 *30块钱5个");
INSERT INTO detail_product VALUES(null,2,"咪咪","img/shipin04.jpg","img/shipin04.jpg","img/shipin04.jpg","img/shipin04.jpg","咪咪小零食 50g/包 8090后怀旧食品 猫粮比狗粮好吃多了(童年喜爱)",0.50,"*1块钱2个 *2块钱3个 *3块钱4个 *4块钱5个");
INSERT INTO detail_product VALUES(null,2,"南京板鸭","img/shipin05.jpg","img/shipin05.jpg","img/shipin05.jpg","img/shipin05.jpg","南京板鸭 50g/包 8090后怀旧食品 熟悉的味道嘎嘣脆(童年喜爱)",1.00,"*1块钱1个 *2块钱2个 *3块钱3个 *4块钱4个");
INSERT INTO detail_product VALUES(null,2,"盼盼牛排","img/shipin06.jpg","img/shipin06.jpg","img/shipin06.jpg","img/shipin06.jpg","盼盼牛排 100g/包 8090后怀旧食品 这个牛排不一般(童年喜爱)",3.00,"*5块钱2个 *10块钱3个 *20块钱4个 *30块钱5个");
INSERT INTO detail_product VALUES(null,2,"熊字饼","img/shipin08.jpg","img/shipin08.jpg","img/shipin08.jpg","img/shipin08.jpg","熊字饼 200g/包 8090后怀旧食品 这么可爱的饼干一定要一口吃掉(童年喜爱)",3.00,"*5块钱2个 *10块钱3个 *20块钱4个 *30块钱5个");






