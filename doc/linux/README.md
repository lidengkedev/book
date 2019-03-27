# Linux

## 命令编辑及光标移动

```
ctrl + u    : 删除从开头到光标处的命令文本
ctrl + k    : 删除从光标到结尾处的命令文本
ctrl + a    : 光标移动到命令开头
ctrl + e    : 光标移动到命令结尾
alt + f     : 光标向前移动一个单词
alt + b     : 光标向前移动一个单词
atrl + w    : 删除一个词（以空格隔开的字符串）
```

## 历史命令快速执行

```
ctrl + r : 搜索执行过得命令
```

## 部分历史命令查看

```bash
# history 会显示大量的历史命令，而fs -l只会显示部分

$ fs -l
```

## 实时查看日志

```bash
# tail -f 加文件名，可以实时显示日志文件内容
# 使用 less 命令查看文件内容，并且使用 shift + f 键，也可以达到类似的效果

$ tail -f filename.log
```

## 磁盘或者内存情况查看

```bash
# 使用 df 命令可以快速查看各挂载路径磁盘占用情况

$ df -h
/dev/sda14   4.6G   10M     4.4G    1%
/dev/sda11   454M  366M      61M   86%
/dev/sda15    55G   18G      35G   35%
```

如果已经知道home目录占用空间较大了，想知道home目录下各个目录占用情况：

```bash
# 这里指定了路径的深度，否则的话，它会递归统计子目录占用空间大小

$ du -h --max-depth=1 /home(或者-d 1)
18G     /home/hyb
16K     /home/lost+fund
18G     /home/
```

```bash
# 当前内存的使用情况
# 通过free的结果，很容易看到当前总共内容多少，剩余可用内存多少

$ free -h
            total     used
Mem:        7.7G      3.5G
Swap:       7.6G        0B
```

使用 -h 参数：

-h 参数的作用是使得结果以人类可读的方式呈现

## 根据名字查找进程

```bash
# hello 是进程名

$ pgrep hello

# 或

$ pidof hello
```

## 根据名称杀死进程

一般我们可以使用 kill -9 pid 方式杀死一个进程，但是这样就需要先找到这个进程的进程id，实际上我们也可以直接根据名称杀死进程

```bash
$ killall hello

# 或

$ pkill hello
```

## 查看进程运行时间

```bash
$ ps -p 24525 -o lstart.etime
                 STARTED    ELAPSED
Sat Mar 23 20:52:08 2019      02:45
```

## 快速目录切换

```bash
# 回到上一个目录

$ cd -

# 回到用户家目录

$ cd 
```

## 多条命令执行

```bash
# 如果当前目录是 / 目录，并且 /temp/log目录不存在，那么就会
# bash: cd: /temp/log: No such file or directory (突然陷入沉默)
# 因为 ; 可以执行多条命令，但是不会因为前一条命令失败而导致后面的不会执行
# 因此，cd 执行失败后，仍然会继续执行 rm -rf *
# 解决方案是：cd /temp/log&&rm -rf *
# 这样就会确保前面一条命令执行成功，才会执行后面一条

$ cd /temp/log/;rm -rf *
```

## 查看压缩日志文件

```bash
$ zcat test.gz

# 或

$ zless test.gz
```

## 删除乱码文件

无论是自已意外创建还是程序异常创建，难免会出现一些命令奇怪或者乱码文件，可以选择删除Linux中特殊名称文件的多种方式

对于特殊字符，如<>!*等组成的文件如何删除呢？如下：
```bash
$ rm <>\!*
rm missing operand
Try 'rm --help' for more infomation.

# 对于这种类型文件，需要用引号将文件名包含起来

$ rm "<>\!*"
```

## 清空文件内容

比如有一个大文件，你想快速删除，或者不想删除，但是想清空内容：

```bash
>filename
```

## 将日志同时记录文件并打印到控制台

在执行shell脚本，常常会将日志重定向，但是这样的话，控制台就没有打印了，如何使用技能记录日志文件，又能将日志输出到控制台呢？

```bash
$ ./test.sh |tee test.log
```

## 终止并回复进程执行

我们使用 ctrl + Z 暂停一个进程的执行，也可以使用fg恢复执行。例如：

```bash
$ cat filename

# 当我们发现文件过多的时候，使用 ctrl + z 暂停程序，
# 而如果又想要从刚才的地方继续执行，则只需要使用fg命令即可恢复执行。
# 或者使用bg使得进程继续在后台执行
```

## 计算程序运行时间

我们可能会用进程写一些小程序，并想知道它的运行时间，实际上我们可以很好的利用 time 命令帮我们计算，例如：

```bash
# 它会显示系统时间，用户时间以及实际使用的总时间

$ time ./fibo 30
the 30 result is 832040

real    0m0.088s
user    0m0.084s
sys     0m0.004s
```

## 查看内存占用前10的进程

```bash
$ ps -aux|sort -k4nr |head -n 10
```

## 快速查找你需要的命令

```bash
$ man -k "copy files"
cp (1)          - copy files and directories
cpio (1)        - copy files to and from archives

# 使用 -k 参数，使得与 copy files 相关的帮助手册都显示出来了
```

## 命令行下复制粘贴

我们知道，在命令行下，复制不能再是 ctrl + c 了，因为它表示终止当前进程，而控制台下的复制粘贴需要使用下面的快捷键：

```
ctrl + insert
shift + insert
```

## 搜索包含某个字符串的文件

```bash
# 在当前目录下查找包含test字符串的文件

$ grep -rn "test"
test2.txt:1:test

# 它可以找到该字符串在哪个文件的第几行
```

## 屏幕冻结

程序运行时，终端可能输出大量日志，你想简单查看一下，又不想记录日志文件，此时可以使用 ctrl + s 键，冻结屏幕，使得日志不再继续输出，如果想要恢复，可以使用 ctrl + q 退出冻结。

## 无编辑器情况下编辑文本文件

```bash
$ cat >file.txt
some words
(ctrl + d)

# 编辑完成后， ctrl + d 即可保存
```

## 查看 elf 文件

```bash
# 查看elf文件头信息

$ readelf -n filename

# 查看库中是否包含某个接口
# 这里是从文件 filename 中查看是否包含interface接口，前提是该文件包含符号表

$ nm filename |grep interface
```