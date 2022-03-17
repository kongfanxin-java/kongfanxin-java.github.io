## mysql 问题总结

### 编码问题
- mysql 索引长度有限制，默认767；如果选择
#### MySQL版本升级后navicat登录出错问题
- Client does not support authentication protocol requested by server; consider upgrading MySQL client.
### 启动不初始化表结构问题
- nullCatalogMeansCurrent=true 属性保证自动创建表结构,默认为false
```
url: jdbc:mysql://localhost:3306/flowable?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&nullCatalogMeansCurrent=true
```
#### flowable启动报错
- 降低 mysql-connector-java.jar 版本：8.0.22 具体原因暂不知道
- 需要检查8.0.22与高版本的区别
 ```
Caused by: java.lang.ClassCastException: java.time.LocalDateTime cannot be cast to java.lang.String
Caused by: java.lang.IllegalStateException: Event registry has not been initialized
```
#### MySQL  CURRENT_TIMESTAMP 

- 在MySQL 5.6.5版本之前，DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP只适用于TIMESTAMP，而且一张表中，最多允许一个TIMESTAMP字段采用该特性。 从MySQL 5.6.5开始， DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP同时适用于TIMESTAMP和DATETIME，且不限制数量。
#### mysql 版本问题
- 在使用 MySQL 8.0 时重启应用后提示 com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException: Public Key Retrieval is not allowed
- 最简单的解决方法是在连接后面添加 allowPublicKeyRetrieval=true
- 文档中(https://mysql-net.github.io/MySqlConnector/connection-options/)给出的解释是：
- 如果用户使用了 sha256_password 认证，密码在传输过程中必须使用 TLS 协议保护，但是如果 RSA 公钥不可用，可以使用服务器提供的公钥；可以在连接中通过 ServerRSAPublicKeyFile 指定服务器的 RSA 公钥，或者AllowPublicKeyRetrieval=True参数以允许客户端从服务器获取公钥；但是需要注意的是 AllowPublicKeyRetrieval=True可能会导致恶意的代理通过中间人攻击(MITM)获取到明文密码，所以默认是关闭的，必须显式开启
- DBeaver 连接是需要在驱动属性里 将allowPublicKeyRetrieval 改为true
