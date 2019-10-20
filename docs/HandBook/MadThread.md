# 线程管理
::: tip
- MadThread.h
- MadThread.c
:::

## MadOS 线程状态
| 名称 | 说明 |
| :-| :-|
| MAD_THREAD_READY     | 就绪 |
| MAD_THREAD_PEND      | 挂起 |
| MAD_THREAD_TIMEDLY   | 延时 |
| MAD_THREAD_WAITSEM   | 等待信号量 |
| MAD_THREAD_WAITMUTEX | 等待互斥信号 |
| MAD_THREAD_WAITMSG   | 等待消息 |
| MAD_THREAD_WAITEVENT | 等待事件 |
::: tip
- 只有调用 madTimeDly ，才会将线程置为延时状态。
- 延时、等待信号量、等待互斥信号、等待消息、等待事件，彼此互斥。
- 挂起可与延时 / 等待信号量 / 等待互斥信号 / 等待消息 / 等待事件同时存在。
:::

## MadOS 线程常量
| 名称 | 说明 |
| :-| :-|
| MAD_THREAD_SELF     | 本线程(当前线程) |

## MadOS 线程函数类型
```c
typedef void (*MadThread_t)(MadVptr)
```

## madThreadStkInit
```c
MadStk_t* madThreadStkInit (MadVptr pStk, MadThread_t act, MadVptr exData)
```
新建线程时，对线程堆栈进行初始化。该函数需要根据具体的硬件进行实现。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pStk   | in | 分配给该线程的堆栈底地址 |
| act    | in | 线程函数名 |
| exData | in | 线程函数的初始参数(0则忽略) |

| 返回值 | 说明 |
| :-:| :-|
| x | 栈顶地址(供新建的线程使用) |

## madThreadCreateCarefully
```c
MadTCB_t* madThreadCreateCarefully ( 
    MadThread_t act, 
    MadVptr     exData, 
    MadSize_t   size, 
    MadVptr     stk, 
    MadU8       prio,
    MadBool     run
)
```
新建线程。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| act    | in | 线程函数名 |
| exData | in | 线程函数的初始参数(0则忽略) |
| size   | in | 线程所需的堆栈尺寸(以字节为单位) |
| stk    | in | 用户自定义的堆栈首地址(0则自动分配) |
| prio   | in | 线程优先级 |
| run    | in | MTRUE: 线程立即执行 / MFALSE: 线程挂起 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向新建线程控制块的指针) |

## madThreadResume
```c
void madThreadResume (MadU8 threadPrio)
```
恢复线程。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| threadPrio | in | 欲恢复线程的优先级 |

## madThreadPend
```c
void madThreadPend (MadU8 threadPrio)
```
挂起线程。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| threadPrio | in | 欲挂起线程的优先级 |

## madThreadDelete
```c
MadVptr madThreadDelete (MadU8 threadPrio)
```
删除线程。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| threadPrio | in | 欲删除线程的优先级 |

| 返回值 | 说明 |
| :-:| :-|
| msg | 线程msg (用户根据应用中所使用的内存分配机制进行回收) |

## madThreaddDoDelete
```c
MadVptr madThreadDoDelete (MadU8 threadPrio)
```
删除线程。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| threadPrio | in | 欲删除线程的优先级 |

| 返回值 | 说明 |
| :-:| :-|
| msg | 线程msg (用户根据应用中所使用的内存分配机制进行回收) |

## madThreadCreate(act, ed, sz, prio)
```c
MadTCB_t* madThreadCreateCarefully ( 
    MadThread_t act, 
    MadVptr     exData, 
    MadSize_t   size, 
    MadVptr     stk, 
    MadU8       prio,
    MadBool     run
)
```
| 参数 | 值 |
| :-| :-|
| stk | 0 |
| run | MTRUE |

## madThreadCreateN(act, ed, sz, prio)
```c
MadTCB_t* madThreadCreateCarefully ( 
    MadThread_t act, 
    MadVptr     exData, 
    MadSize_t   size, 
    MadVptr     stk, 
    MadU8       prio,
    MadBool     run
)
```
| 参数 | 值 |
| :-| :-|
| stk | 0 |
| run | MFALSE |
