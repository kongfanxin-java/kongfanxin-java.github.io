### Git

### git config

```
$ git config --global user.name "Kong**"
$ git config --global user.email "kong**@**.com"

$ git config -l
http.sslcainfo=**/ca-bundle.crt
http.sslbackend=openssl
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
credential.helper=manager-core
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.name=Kong**
user.email=kong**@**.com
```

### SSH密钥生成

```
$ ssh-keygen -t rsa -C "kong**@**.com"
```

