# 搭建环境

## 获取工具链
我们已为开发者准备好工具链:  
| 平台 | 提取码 |
| :----: | :----: |
| [MacOSX](https://pan.baidu.com/s/12RdYZJD5p37PpwuKFaGSgA) | dijo |
| [Ubuntu](敬请期待) | - |

## 配置工具链
首先，将工具链解压到磁盘上，然后，设置几个环境变量:

### MacOSX / Ubuntu  
假设解压路径为: /home/creator
``` bash
export MADOS_TOOLS_VER=12.1.0
export MADOS_TOOLS_HOME=/home/creator/mados-tools/tools
export MADOS_TOOLS_GCC=$MADOS_TOOLS_HOME/arm-none-eabi-$MADOS_TOOLS_VER
export MADOS_TOOLS_OPENOCD=$MADOS_TOOLS_HOME/openocd
export MADOS_TOOLS_BIN=$MADOS_TOOLS_GCC/bin:$MADOS_TOOLS_OPENOCD/bin
export PATH=$MADOS_TOOLS_BIN:$PATH
```
将以上内容加入到用户配置文件末尾
| 平台 | 用户配置文件 |
| :----: | :---- |
| MacOSX | ~/.zprofile |
| Ubuntu | ~/.bashrc   |
执行以下命令：
``` bash
source ~/.zprofile # MacOSX
```
``` bash
source ~/.bashrc   # Ubuntu
```

## 安装代码编辑器
推荐使用[Visual Studio Code](https://code.visualstudio.com/)作代码编辑工具。
::: tip
- [下载缓慢看这里](https://zhuanlan.zhihu.com/p/112215618)
- 设置环境变量后，需重启VSCode，以使其加载新环境变量。
:::

### 安装 VSCode 扩展
| 扩展名 | 发布者名称 |
| :----: | :----: |
| AutoLaunch   | philfontaine    |
| C/C++        | Microsoft       |
| Lua          | sumneko         |
| Arm Assembly | dan-c-underwood |
| Cortex-Debug | marus25         |
::: tip
- MadOS支持Lua，详见后续章节。
:::

## 验证

### GCC
执行
``` bash
arm-none-eabi-gcc -v
```
输出版本信息
``` bash
gcc version 12.1.0 (GNU Tools for MadOS [ARM][20220526][gcc-12.1.0][Newlib])
```

### GDB
执行
``` bash
arm-none-eabi-gdb -v
```
输出版本信息
``` bash
GNU gdb (GNU Tools for MadOS [ARM][20220526][gdb-12.1]) 12.1
```

### OpenOCD
执行
``` bash
openocd -v
```
输出版本信息
``` bash
xPack OpenOCD arm64 Open On-Chip Debugger 0.11.0+dev (2022-03-25-19:31)
```
