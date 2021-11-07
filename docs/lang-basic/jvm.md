内存模型



垃圾回收器



垃圾回收算法



FullGC



jvm参数



## JVM性能监控与故障处理工具

### 常用工具

1. jps 显示指定系统内所有的HopSpot虚拟机进程
2. jstat 用于收集HopSpot虚拟机各方面的运行参数
3. jinfo 显示虚拟机配置信息
4. jmap 生成虚拟机的内存转储快照（heapdump文件）
5. jhat 用于分析heapdump文件，会建立一个HTTP/HTML服务器，可以再浏览器上查看分析结果
6. jstack 显示虚拟机的线程快照

#### jsp 虚拟机进程状态工具

 jps [options] [hostid]

- -q 只输出LVMID,省略朱磊的名称

- -m 输出虚拟机进程启动是传递给朱磊main()函数的参数

- -l 输出主类的全名，如果进程执行的jar包，输出jar的路径

- -v 输出虚拟机进程启动时JVM参数











