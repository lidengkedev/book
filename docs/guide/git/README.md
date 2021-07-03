# Git

```bash
git add . 添加暂存文件
git reset xx.js 回退添加的暂存文件
git reset HEAD 回退到上个版本之前所有添加的暂存文件
```

> git 常用命令

<table>
    <thead>
        <tr>
            <td colspan="2" style="width: 300px; text-align: center;">git命令</td>
            <td>描述</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">add</td>
            <td>git add xxx.html</td>
            <td>添加xxx文件到暂存区</td>
        </tr>
        <tr>
            <td>git add .</td>
            <td>添加全部文件到暂存区</td>
        </tr>
        <tr>
            <td>commit</td>
            <td>git commit -m "xxx"</td>
            <td>提交到本地仓库</td>
        </tr>
        <tr>
            <td rowspan="2">push</td>
            <td>git push origin master</td>
            <td>推送xxx到远程主仓库</td>
        </tr>
        <tr>
            <td>git push origin --delete xxx</td>
            <td>删除远程仓库xxx分支</td>
        </tr>
        <tr>
            <td>pull</td>
            <td>git pull origin master</td>
            <td>拉取远程主仓库代码</td>
        </tr>
        <tr>
            <td>clone</td>
            <td>git clone http://xxx.git</td>
            <td>克隆xxx远程仓库到本地</td>
        </tr>
        <tr>
            <td>log</td>
            <td>git log</td>
            <td>查看提交记录</td>
        </tr>
        <tr>
            <td rowspan="7">stash</td>
            <td>git stash</td>
            <td>保存所有修改到缓存区</td>
        </tr>
        <tr>
            <td>git stash save "xxx"</td>
            <td>保存所有修改到缓存区并添加保存信息</td>
        </tr>
        <tr>
            <td>git stash list</td>
            <td>查看缓存区缓存的列表</td>
        </tr>
        <tr>
            <td>git stash pop</td>
            <td>从缓存区中提取缓存内容到当前工作区</td>
        </tr>
        <tr>
            <td>git stash pop stash@{x}</td>
            <td>从缓存区中提取第x项缓存内容到当前工作区</td>
        </tr>
        <tr>
            <td>git stash clear</td>
            <td>清除缓存区所有内容</td>
        </tr>
        <tr>
            <td>git stash drop stash@{x}</td>
            <td>删除缓存区中第x项缓存内容</td>
        </tr>
        <tr>
            <td rowspan="3">reset</td>
            <td>git reset --hard xxx</td>
            <td>回退提交到本地仓库的xxx版本</td>
        </tr>
        <tr>
            <td>git reset xx.html</td>
            <td>回退添加到暂存区的xx.html文件</td>
        </tr>
        <tr>
            <td>git reset HEAD</td>
            <td>回退到上个版本之前所有添加的暂存文件</td>
        </tr>
        <tr>
            <td rowspan="2">checkout</td>
            <td>git checkout xxx</td>
            <td>切换到xxx分支</td>
        </tr>
        <tr>
            <td>git checkout -b xxx</td>
            <td>新建xxx分支</td>
        </tr>
        <tr>
            <td rowspan="4">branch</td>
            <td>git branch</td>
            <td>查看本地分支</td>
        </tr>
        <tr>
            <td>git branch -a</td>
            <td>查看所有分支</td>
        </tr>
        <tr>
            <td>git branch -d xxx</td>
            <td>删除xxx分支</td>
        </tr>
        <tr>
            <td>git branch -D xxx</td>
            <td>强删除xxx分支</td>
        </tr>
        <tr>
            <td>merge</td>
            <td>git merge xxx</td>
            <td>xxx分支内容合并到当前分支</td>
        </tr>
        <tr>
            <td rowspan="5">diff</td>
            <td>git diff</td>
            <td>查看所有本地改动与仓库的差异</td>
        </tr>
        <tr>
            <td>git diff xxx.html</td>
            <td>查看本地指定文件与本地仓库的差异</td>
        </tr>
        <tr>
            <td>git diff master dev</td>
            <td>查看master分支与dev分支的所有差异</td>
        </tr>
        <tr>
            <td>git diff master dev --stat</td>
            <td>查看master分支与dev分支所有差异的文件列表</td>
        </tr>
        <tr>
            <td>git diff master dev xxx.html</td>
            <td>查看指定文件xxx.html在master分支与dev分支上的差异</td>
        </tr>
    </tbody>
</table>