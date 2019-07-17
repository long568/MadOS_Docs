# 启动范例

由于笔者已经完成针对 ARM Cortex M0/3/4 系列单品机的底层汇编代码，使用该系列单片机的用户无需关心这些代码的实现，如果使用 M7 或其他系列的单片机，只需要根据 ARM 的官方文档对个别汇编指令做简单的修改即可。若用户使用的是非 ARM Cortex Mx 系列的单片机，则需要参考笔者的代码实现底层汇编代码，这些代码包含在 MadArchC.c、MadArchS.s 中。

## 代码示例
```c
#include "MadOS.h"      // 此头文件中即包含所有 MadOS 提供的功能。
#include "UserConfig.h" // 于此头文件中定义线程优先级、中断优先级等各种参数。

MadAligned_t MadStack[ MAD_OS_STACK_SIZE / MAD_MEM_ALIGN ] = { 0 };
// MAD_OS_STACK_SIZE 为堆栈尺寸(以字节为单位)；
// 用 MadAligned_t 定义堆栈可使其 n 字节对齐；
// ARM CM 平台，为输出浮点数(printf)，需使地址 8 字节对齐，MadAligned_t 即 MadU64。

static void madStartup(MadVptr exData);
static void madSysRunning(MadVptr exData);

int main()
{
    // { 必要的硬件初始化 }
    madCopyVectorTab();  // 将中断向量从 Flash 复制到 RAM 中
    madOSInit(MadStack, MAD_OS_STACK_SIZE);
    madThreadCreate(madStartup, 0, MAD_OS_STACK_SIZE / 2, 0);
    madOSRun();
    while(1);
}

static void madStartup(MadVptr exData)
{
    (void)exData;
    madInitSysTick(DEF_SYS_TICK_FREQ, DEF_TICKS_PER_SEC);
#if MAD_STATIST_STK_SIZE
    madInitStatist();
#endif
    // { 建立用户线程 }
    madThreadCreate(madSysRunning, 0, 96, THREAD_PRIO_SYS_RUNNING);
    madMemChangeOwner(MAD_THREAD_SELF, MAD_THREAD_RESERVED);
    madThreadDelete(MAD_THREAD_SELF);
}

static void madSysRunning(MadVptr exData)
{
    // { ... }
}
```

## 启动思路
- [必须] 必要的硬件初始化；
- [必须] MadOS 初始化；
- [必须] 建立启动线程，使其堆栈空间占用整个内存堆空间的前半部分。
- [必须] 在启动线程中：
    - [必须] System Tick 的初始化；
    - [可选] 统计线程的初始化；
    - [必须] 建立用户线程；
    - [可选] 建立系统运行标识线程。一般，该线程仅周期性的驱动一个 LED 闪烁；
    - [必须] 将启动线程的全局资源设置为<保留>；
    - [必须] 将启动线程本身删除。

::: tip
启动线程删除后内存堆的前半部分被回收，再次需要动态内存即可紧贴内存堆头分配。
:::