================= Mysql ==============
set @mydate=sysdate();

select @mydate;

select 	from_unixtime(UNIX_TIMESTAMP(@mydate)-UNIX_TIMESTAMP(@mydate)%(60*60),'%Y-%m-%d %H:%i:%s') as monitor_time;


MySQL的@与@@区别

@x 是 用户自定义的变量 (User variables are written as @var_name)

@@x 是 global或session变量 (@@global @@session )

@@查看全局变量:

查询event信息
 SELECT * FROM INFORMATION_SCHEMA.EVENTS
       WHERE EVENT_NAME = 'e_daily'
       AND EVENT_SCHEMA = 'myschema'\G


https://dev.mysql.com/doc/refman/8.0/en/information-schema-routines-table.html

================= PostgreSQL ==============





================= Redis ==============
################################## HEAP ###################################
# 指定生成的文件最大为4G
maxheap 4294967296
# 指定文件生成到D盘的MyRedisSwap目录下
heapdir D:\devlopTool\Redis\MyRedisSwap\


设置密码登录

windows ：
redis-cli.exe 中输入 shutdown则停止service服务


服务启动redis-server.exe redis.windows.conf
zip安装：redis.windows.conf
msi安装： redis.windows-service.conf


（1）redis在单机模式下redis.conf配置文件中默认的数据库数量是16个，
# Set the number of databases. The default database is DB 0, you can select# a different one on a per-connection basis using SELECT <dbid> where# dbid is a number between 0 and 'databases'-1databases 16
（2）在集群模式下这个配置是不起作用的，集群客户端是不支持多数据库db的，只有一个数据库默认是SELECT 0;
127.0.0.1:7005> SELECT 0OK127.0.0.1:7005> SELECT 1(error) ERR SELECT is not allowed in cluster mode
3）集群slave从节点默认是不支持读写操作的，但是在执行过readonly命令后可以执行读操作；

################################## SECURITY ###################################

# Require clients to issue AUTH <PASSWORD> before processing any other
# commands.  This might be useful in environments in which you do not trust
# others with access to the host running redis-server.
#
# This should stay commented out for backward compatibility and because most
# people do not need auth (e.g. they run their own servers).
#
# Warning: since Redis is pretty fast an outside user can try up to
# 150k passwords per second against a good box. This means that you should
# use a very strong password otherwise it will be very easy to break.
#
# requirepass foobared
requirepass 123456


win安装为服务
redis-server --service-install redis.windows.conf --loglevel verboseredis-server --service-install redis.windows.conf --loglevel verbose    // 安装redis服务



================= Elasticsearch ==============

# 在root用户下追加配置
vim /etc/security/limits.conf 
# 配置内容   *表示所有用户生效
* soft nofile 65536
* hard nofile 65536

# 重新登录即可生效
# 可使用命令查看是否生效
ulimit  -H -n
         




============= feign =========
FeignCLientProperties
Logger.Level : NONE BASIC HEADERS FULL


============ List ==========
void add(index E element);

============ ITIL ==========
ITIL(Information Technology Infrastructure Library )  信息技术基础架构库   是一个基于行业最佳实践的框架，将IT服务管理业务过程应用到IT管理中。许多CIO都正在将他们的技术组织转变为内部服务提供商的角色，以保证他们提供给最终用户的应用质量。

============mysql 密码等级问题======
https://dev.mysql.com/doc/refman/5.7/en/set-password.html


https://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html#sysvar_validate_password_policy


===========mysql jdbcurl=======
https://blog.csdn.net/weixin_46644575/article/details/117003617?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-117003617-blog-88536968.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-117003617-blog-88536968.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=1

不建议在没有服务器身份验证的情况下建立SSL连接。根据MySQL 5.5.45+、5.6.26+和5.7.6+的要求，如果不设置显式选项，则必须建立默认的SSL连接。需要通过设置useSSL=false来显式禁用SSL，或者设置useSSL=true并为服务器证书验证提供信任存储。

所以建议设置useSSL为false，有时遇到的问题可以这样来考虑

===========mbatis plus=======

QueryWrapper userWrapper = new QueryWrapper();
userWrapper.lambda.eq(“name”, name);

userWrapper.lambda.and(tmp ->tmp.eq(“pwd”, pwd).or().eq(“phone”, phone));

select * from user where name = ? and ( pwd= ? or phone = ?)
 


== jfrog =====
CREATE DATABASE artdb CHARACTER SET utf8 COLLATE utf8_bin;
CREATE USER 'artifactory'@'%' IDENTIFIED BY 'artifactory@mysql';
GRANT ALL on artdb.* TO 'artifactory'@'%';
FLUSH PRIVILEGES;