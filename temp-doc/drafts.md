=========== 小工具 =============
(1)比较两个对象是否相同：返回差异字段集合
(2)事件处理工具类
“Google 的基础设施有三驾马车,分别是《Google File System》、《Google MapReduce》以及《Google BigTable》。”



Springfox 与 swagger 的关系

https://www.openapis.org/



深克隆
我们知道实现Cloneable接口后克隆的对象是浅克隆，要想实现深克隆，请使用：

ObjectUtil.cloneByStream(obj)
前提是对象必须实现Serializable接口。



netstat -tunlp |grep 5256



@FeignClient 配置

================= rocketmq ==============



================= IDEA ==============
package-info.java 的使用？


在IDEA编译器里，spring项目中使用@Autowired注解，出现private field 'xxx' is never assigned警告

Alt+Enter快捷键,显示


第一种是使用的是 spring-boot 官方 parent，这样 parent 里已经设置好了资源目录，如：

<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.4.RELEASE</version>
        <relativePath /> <!-- lookup parent from repository -->
</parent>
第二种就是未使用官方 parent，需要手动设置一下资源目录，filtering=true 是让资源文件解析变量

<resources>
<resource>
   <directory>src/main/resources</directory>
   <filtering>true</filtering>
</resource>
</resources>

=========== nacos =============                                        
Caused by: com.alibaba.nacos.api.exception.NacosException: endpoint is blank

出现原因: 启动nacos消费者时报错, 网上找了一下

原因：因为pom里加入了spring-cloud-starter-alibaba-nacos-config的依赖，但又没有用到动态配置，所以会报空指针的错，如果只需要用到naocs的服务注册与发现功能，只需要加上spring-cloud-starter-alibaba-nacos-discovery 这个依赖即可

 
=========== npm =============
npm config set registry http://xxxx

npm config list

=========== 服务器 =============

只输出错误信息到日志文件

nohup java -jar yourProject.jar >/dev/null 2>log &

什么信息也不要

nohup java -jar yourProject.jar >/dev/null 2>&1 &

​ netstat -nlp |grep z y x
================= tomcat ==============
win start.bat 脚本启动，控制台乱码
1.打开tomcat下的 conf 文件夹
2.找到 logging.properties 文件，记事本打开
3.搜索 java.util.logging.ConsoleHandler.encoding
4.将等号后面的 UTF-8 修改成gbk就好了

server.xml 中URIEncoding="UTF-8"
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" URIEncoding="UTF-8"/>
               
IDEA 远程debug 
在tomcat中 
bin/catalina.sh
export JAVA_OPTS='-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8001'
   
Linux导入语句为：
export JAVA_OPTS='-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8001'

Windows导入语句为：
set JAVA_OPTS=-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8001

两者的区别在于导入语句的关键字不同以及有无引号，Linux 系统的导入关键字为export，Windows 为set；Linux 的导入值需要用单引号''括起来，而 Windows 则不用。

=========== maven =============
您可能需要将包版本信息包含在 JAR 文件的清单中。您在清单中使用以下头提供此信息：

IDEA 优先加载本地
-DarchetypeCatalog=internal


-- pom 标签
 <scm>
https://www.bigtspace.com/archives/10130.html



-- 
Header	Definition
Name	规范名称
Specification-Title	规范标题
Specification-Version	规范版本wen号
Specification-Vendor	规范供应商
Implementation-Title	实现标题
Implementation-Version	实现的内部版本号
Implementation-Vendor	实现的供应商
一套这样的头可以分配给每个包。版本控制标题应该直接出现在包的名称标题下。此示例显示了所有版本化标头：

Name: java/util/
Specification-Title: Java Utility Classes
Specification-Version: 1.2
Specification-Vendor: Example Tech, Inc.
Implementation-Title: java.util
Implementation-Version: build57
Implementation-Vendor: Example Tech, Inc.


<scope>
<optional>
-DarchetypeCatalog=internal

nexus私服 hosted、proxy、group

hosted	本地存储。像官方仓库一样提供本地私库功能
proxy	提供代理其它仓库的类型
group	组类型，能够组合多个仓库为一个地址提供服务


clean package -DMaven.test.skip=true -Dmaven.compile.fork=true -U -pl 目录1 -am          带-am 编译相关依赖


=========== javkson 序列化 =============
JsonInclude.Include.ALWAYS 这个是默认策略，任何情况下都序列化该字段，和不写这个注解是一样的效果。
JsonInclude.Include.NON_NULL 这个最常用，即如果加该注解的字段为null，那么就不序列化这个字段了。
JsonInclude.Include.NON_ABSENT 这个包含NON_NULL，即为null的时候不序列化，详情看源码。
JsonInclude.Include.NON_EMPTY 这个属性包含NON_NULL，NON_ABSENT之后还包含如果字段为空也不序列化。
JsonInclude.Include.NON_DEFAULT 这个属性是如果该字段为默认值的话就不序列化。
JsonInclude.Include.USE_DEFAULTS 使用默认值的情况下就不序列化。
JsonInclude.Include.CUSTOM 这个是自定义包含规则，官方的解释如下：

=========== 算法 =============
数学： 包括二进制

=========== 中间件 =============
消息中间件 rabbitMQ  kafka
工作流中间件 flowable


JFrog捷蛙devops-端到端一站式DevOps解决方案

=========== 微服务 =============
网关  consul
PS D:\devlopTool> ./consul agent -dev
==> Starting Consul agent...
           Version: '1.13.1'
        Build Date: '2022-08-11 19:07:00 +0000 UTC'
           Node ID: '853da1d7-7f7b-2d5a-d320-886f9a258f96'
         Node name: 'DESKTOP-D90Q713'
        Datacenter: 'dc1' (Segment: '<all>')
            Server: true (Bootstrap: false)
       Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)
      Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)
           Encrypt: Gossip: false, TLS-Outgoing: false, TLS-Incoming: false, Auto-Encrypt-TLS: false

==> Log data will now stream in as it occurs:
=========== 大数据 =============
数据分层
离线数据处理
实时数据处理

=========== 字典库 =============
GMV 商品交易总额
DDS(Data Distribution Service)是数据分发服务

虚拟私有云（Virtual Private Cloud，以下简称VPC），为弹性云服务器构建隔离的、用户自主配置和管理的虚拟网络环境，提升用户云中资源的安全性，简化用户的网络部署。

JAR、WAR、DLL   JNI

是   REST，即“”的 ）

WSDL、UDDI 协议

之上，有的能直接运行于传输层 TCP/UDP 协议之
JSON 的
Hessian
URI

的坑。
《RESTful Web APIs 》和《RESTful Web Services 》的作者 Leonard Richardson 曾提
出过一个衡量“服务有多么 REST”的 Richardson 成熟度模型（Richardson Maturity Model
GET /users/icyfenix/cart/2
https://icyfenix.cn REST 设计风格
），便于那些原本不使用 REST 的系统，能够逐步地导入 REST。Richardson 将服务接
口“REST 的程度”从低到高，分为 0 至 3 级

被称为“两段式提交 ”（2 Phase Commit，2PC）协议，而
出了“三段式提交 ”（3 Phase Commit，3PC）协议


凭据管理系统（Secrets Manager，SSM）基于密钥管理系统 KMS为用户提供凭据的创建、检索、更新、删除等全生命周期的管理服务，结合资源级角色授权轻松实现对敏感凭据的统一管理

ACK
TCC 事务Try-Confirm-Cancel

并成为万维网联盟 （World Wide Web Consortium，W3C）


JNDI
JNDI(Java Name Directory Interface，Java命名和目录接口)，它不仅仅是进行数据库定位的，它是给当前应用服务器所管理的所有资源一个唯一的标识，包括数据库，网页，文件，连接池等等。

JNDI提供了一种统一的方式，可以用在网络上查找和访问服务。通过指定一个资源名称，该名称对应于数据库或命名服务中的一个记录，同时返回数据库连接建立所必须的信息。

JNDI主要有两部分组成：应用程序编程接口和服务供应商接口。应用程序编程接口提供了Java应用程序访问各种命名和目录服务的功能，服务供应商接口提供了任意一种服务的供应商使用的功能。

DMZ，是英文“demilitarized zone”的缩写，中文名称为“隔离区”，也称“非军事化区”。它是为了解决安装防火墙后外部网络的访问用户不能访问内部网络服务器的问题，而设立的一个非安全系统与安全系统之间的缓冲区


=========== @Transactional =============

@Transactional只能回滚RuntimeException和RuntimeException下面的子类抛出的异常 不能回滚Exception异常

如果需要支持回滚Exception异常请用@Transactional(rollbackFor = Exception.class)

这里如果是增删改的时候我建议大家都使用@Transactional(rollbackFor = Exception.class)

补充一下@Transactional(rollbackFor = Exception.class)一些失效的场景：

1、不是用public修饰

2、try catch捕获了异常(没有在catch里面手动抛出异常)

3、没有加@Service(也就是没有被 Spring 管理)


## 构造注入
构造注入是Spring官方推荐使用的注入方式，但平时开发中很少使用这种方式。一般在有静态方法需要使用注入的对象时使用构造器注入的方式, 构造注入可以解决字段注入对外部不可见、无法注入不可变对象的问题，但是构造注入也有缺点。如果注入的对象较多，那么构造函数就会变得臃肿，可读性较差。构造注入无法解决循环依赖的问题，因为解决循环依赖需要用到三级缓存，对象放入三级缓存是在创建对象之后进行的，所以构造注入无法利用三级缓存解决循环依赖的问题。

@Common
public class TestUtil{
 
    private static Config config;
 
    public PdfUtil(Config config) {
        TestUtil.config = config;
    }
