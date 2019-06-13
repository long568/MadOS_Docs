# 环境准备
## 获取工具链
我们已为开发者准备好工具链，百度云分享：
| 平台 | 提取码 |
| :----: | :----: |
| [MacOSX](https://pan.baidu.com/s/1hGaZh5eAdy5QHW8a_7C22A)  | 9h4n |
| [Ubuntu](https://pan.baidu.com/s/1MGqJNbNDAVxgjgO2pY5R7A)  | patn |
| [Windows](https://pan.baidu.com/s/1-y_fJevZPNkNwogGl3vtWQ) | 2hyp |
::: tip
推荐使用 MacOSX 或 Ubuntu 平台，因为 Windows 平台的工具链运行有些慢。
:::

## 配置工具链
首先，我们将工具链解压到磁盘上，然后，设置几个环境变量： 

### MacOSX / Ubuntu  
假设解压路径为：/home/creator/mados-tools
```sh
export MADOS_TOOLS_VER=7.4.0  
export MADOS_TOOLS_HOME=/home/creator/mados-tools/tools/arm-none-eabi-$MADOS_TOOLS_VER  
export MADOS_TOOLS_BIN=$MADOS_TOOLS_HOME/bin  
export PATH=$MADOS_TOOLS_BIN:$PATH
```
将以上内容加入到用户配置文件末尾
| 平台 | 用户配置文件 |
| :----: | :---- |
| MacOSX | ~/.bash_profile |
| Ubuntu | ~/.bashrc |
执行以下命令：
```sh
source ~/.bash_profile # MacOSX
```
```sh
source ~/.bashrc       # Ubuntu
```

### Windows  
假设解压路径为：D:\DreamOn\MSYS2，设置用户环境变量：
::: tip
- MADOS_TOOLS_VER   
7.4.0
- MADOS_TOOLS_HOME  
D:\DreamOn\MSYS2\home\zandz\mados-tools\tools\arm-none-eabi-7.4.0
- MADOS_TOOLS_BIN  
D:\DreamOn\MSYS2\usr\bin;  
D:\DreamOn\MSYS2\mingw64\bin;  
D:\DreamOn\MSYS2\home\zandz\mados-tools\tools\openocd-0.10.0\bin-x64;  
%MADOS_TOOLS_HOME%\bin;  
- 最后将 %MADOS_TOOLS_BIN% 加入 PATH 中
:::

## 安装调试工具(OpenOCD)
::: tip
MacOSX / Ubuntu 可直接通过包管理工具安装OpenOCD。   
Windows 所需的OpenOCD已经包含进工具链，无需另行安装。
:::
### MacOSX
```sh
brew install openocd
```
### Ubuntu
```sh
sudo apt-get install openocd
```
