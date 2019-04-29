#! /bin/bash

echo "===========================开始构建程序========================"

gitbook build

echo "========================构建完成开始删除文件===================="

echo "===========================删除doc文件夹======================="

rm -rf ./doc

echo "=======================开始删除gitbook文件夹==================="

rm -rf ./gitbook

echo "=====================文件删除完毕开始转移构建文件==============="

mv ./_book/* ./

echo "===========================删除废弃文件夹======================"

rm -rf ./_book

echo "=====================文件转移完毕开始上传远程仓库==============="

echo "git add"

git add .

echo "git commit"

git commit -m "更新文档"

echo "git push origin master"

git push origin master

echo "=======================文件上传完毕退出执行程序=================="

exit