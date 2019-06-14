# 搭建环境
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
首先，将工具链解压到磁盘上，然后，设置几个环境变量： 
### MacOSX / Ubuntu  
假设解压路径为：/home/creator/mados-tools
``` sh
export MADOS_TOOLS_VER=7.4.0  
export MADOS_TOOLS_HOME=/home/creator/mados-tools/tools/arm-none-eabi-$MADOS_TOOLS_VER  
export MADOS_TOOLS_BIN=$MADOS_TOOLS_HOME/bin  
export PATH=$MADOS_TOOLS_BIN:$PATH
```
将以上内容加入到用户配置文件末尾
| 平台 | 用户配置文件 |
| :----: | :---- |
| MacOSX | ~/.bash_profile |
| Ubuntu | ~/.bashrc       |
执行以下命令：
``` sh
source ~/.bash_profile # MacOSX
```
``` sh
source ~/.bashrc       # Ubuntu
```
### Windows  
假设解压路径为：D:\DreamOn\MSYS2，设置用户环境变量：
``` sh
# MADOS_TOOLS_VER   
  7.4.0
# MADOS_TOOLS_HOME  
  D:\DreamOn\MSYS2\home\zandz\mados-tools\tools\arm-none-eabi-7.4.0
# MADOS_TOOLS_BIN  
  D:\DreamOn\MSYS2\usr\bin;  
  D:\DreamOn\MSYS2\mingw64\bin;  
  D:\DreamOn\MSYS2\home\zandz\mados-tools\tools\openocd-0.10.0\bin-x64;  
  %MADOS_TOOLS_HOME%\bin;  
```
再将 **%MADOS_TOOLS_BIN%** 加入 **PATH** 中即可。

## 安装调试工具
推荐使用 **OpenOCD** 作为在线调试工具
### MacOSX
``` sh
brew install openocd
```
### Ubuntu
``` sh
sudo apt-get install openocd
```
### Windows
``` sh
# Windows 版工具链已包含 OpenOCD ，无需另行安装。
```

## 安装代码编辑器
推荐使用[Visual Studio Code](https://code.visualstudio.com/)作为代码编辑工具，根据平台安装相应版本。
### 安装 VSCode 扩展
| 扩展名 | 扩展标识符 | 发布者名称 |
| :----: | :----: | :----: |
| AutoLaunch   | philfontaine.autolaunch | philfontaine    |
| C/C++        | ms-vscode.cpptools      | Microsoft       |
| Lua          | sumneko.lua             | sumneko         |
| ARM          | dan-c-underwood.arm     | dan-c-underwood |
| Cortex-Debug | marus25.cortex-debug    | marus25         |
::: tip
MadOS支持Lua脚本语言，详见后续章节。
:::

## 验证
### GCC
执行
``` sh
arm-none-eabi-gcc -v
```
输出版本信息
``` sh
gcc version 7.4.0 (GNU Tools for MadOS [ARM][20190331][gcc-7.4.0][Newlib])
```
### GDB
执行
``` sh
arm-none-eabi-gdb -v
```
输出版本信息
``` sh
GNU gdb (GDB) 8.2.1
```
### OpenOCD
执行
``` sh
openocd -v
```
输出版本信息
``` sh
Open On-Chip Debugger 0.10.0
```
