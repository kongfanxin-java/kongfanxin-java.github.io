[root@cqakserver local]# yum install -y gcc pcre pcre-devel openssl openssl-devel gd gd-devel

```shell
 yum install -y gcc pcre pcre-devel openssl openssl-devel gd gd-devel
 
 ./configure \
--prefix=/**/nginx  \
--user=dev \
--group=dev \
--with-http_ssl_module


make && make install 

chown -R devlop:devlop ./nginx


 ../sbin/nginx
```



--prefix=PATH：指定 nginx 的安装目录
--conf-path=PATH：指定 nginx.conf 配置文件路径
--user=NAME：nginx 工作进程的用户
--with-pcre：开启 PCRE 正则表达式的支持
--with-http_ssl_module：启动 SSL 的支持
--with-http_stub_status_module：用于监控 Nginx 的状态
--with-http-realip_module：允许改变客户端请求头中客户端 IP 地址
--with-file-aio：启用 File AIO
--add-module=PATH：添加第三方外部模块