#! /bin/bash

echo "=======================初始化文档结构======================"

pwd=`pwd`

echo "当前目录地址： $pwd"

echo "=======================拉取远程仓库的最新代码========================"
git pull origin master

read -p "是否确定删除当前目录下的gitbook文件夹？yes/no " is_delete_gitbook

if [ -z $is_delete_gitbook ];then
    echo "========================您没有输入==============================="
else
    if [ $is_delete_gitbook = "yes" ];then
        echo "=====================删除gitbook============================="
        rm -rf ./gitbook
    else
        exit
    fi
fi

read -p "是否确定删除当前目录下的所有.html文件？yes/no " is_delete_html

if [ -z $is_delete_html ];then
    echo "===================您没有输入==========================="
else
    if [ $is_delete_html = "yes" ];then
        echo "===============删除html============================"
        find ./ -name *.html -type f -print -exec rm -rf {} \;
    else
        exit
    fi
fi

# 判断上一条语句是否执行成功
if [ $? -eq 0 ];then
    if [ "$is_delete_gitbook" = "yes" -a "$is_delete_html" = "yes" ];then
        echo "=======================文件删除成功======================"
    else
        echo "=======================文件删除失败======================"
        exit
    fi
else
    echo "==================执行程序代码错误===================="
    exit
fi

echo "=========================初始化文档======================="

gitbook init

echo "======================执行完毕退出程序====================="

exit
