# gitbook使用说明

> 全局安装gitbook

```bash
npm install -g gitbook-cli
```
> 创建目录

```bash
# Summary

* [项目介绍](README.md)
* [使用文档](doc/use/README.md)
    * [使用1](doc/use/use1.md)
    * [使用2](doc/use/use2.md)
* [二次开发](doc/dev/README.md)
    * [开发1](doc/dev/dev1.md)
    * [开发2](doc/dev/dev2.md)
```

> 创建目录文件

```bash
gitbook init
```

> 生成文档

```bash
gitbook build
```

生成的文档文件默认存放现在_book文件夹中

> 本地查看文档

在本地启动一个本地服务：

```bash
http-server -p 8989
```
