## docker 安装与配置

##### CentOS 安装
- 查看内核版本  需要3.10及以上

```
[root@iz2ze9fjqyxe1jw2y434lmz ~]# uname -a
Linux iz2ze9fjqyxe1jw2y434lmz 3.10.0-514.26.2.el7.x86_64 #1 SMP Tue Jul 4 15:04:05 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

-  CentOS 安装
  - [官方文档地址](https://docs.docker.com/engine/install/centos/)

- 给普通用户赋权 docker 操作
```
sudo gpasswd -a $USER docker     #将登陆用户加入到docker用户组中
newgrp docker     #更新用户组
``` 