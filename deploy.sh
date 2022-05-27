# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 发布到 mados.net
# scp -r * root@mados.net:/root/mados/doc/

# 发布到 本地服务器
scp -P 56803 -r * lo@61.147.166.91:/home/lo/wwwroot/mados-doc/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# https://long568.github.io/MadOS_Docs/
# git push -f git@github.com:long568/MadOS_Docs.git master:gh-pages

cd -
