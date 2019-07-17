# 信号管理
::: tip
- MadSemaphore.h
- MadSemaphore.c
:::
| 类型 | 约定描述 |
| :-| :-|
| MadSemCB_t   | 信号量控制块 |
| MadSemCB_t*  | 信号量 |
| MadSemCB_t** | 信号量指针 |

## madSemCreate
```c
MadSemCB_t* madSemCreate (MadU16 cnt)
```
新建信号量。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| cnt | in | 信号量的初始值(也是最大值) |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向信号量控制块的指针) |

## madSemCreateCarefully
```c
MadSemCB_t* madSemCreateCarefully (MadU16 cnt, MadU16 max)
```
新建信号量。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| cnt | in | 信号量的初始值 |
| max | in | 信号量的最大值 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向信号量控制块的指针) |

::: tip
| 调用 | 说明 |
| :-| :-|
| madSemCreate(cnt)           | 等价于 madSemCreateCarefully(cnt, cnt) |
| madSemCreate(MAD_U16_MAX)   | 生成资源数“无限”的信号量 |
| madSemCreate(1)             | 生成互斥信号量 |
| madSemCreate(0)             | 生成特殊信号量(详见 [2.7](/HandBook/BriefDesign.md)) |
| madSemCreateCarefully(0, 1) | 生成初始资源数为 0 的互斥信号量 |
:::

## madSemInit
```c
MadBool madSemInit (MadSemCB_t *sem, MadU16 cnt)
```
初始化信号量。
::: tip
```c
// sem_cb作局部变量(节省动态分配内存的时间)
// 不推荐将sem_cb定义为全局变量
// 不可对sem调用信号量删除功能
MadSemCB_t sem_cb, *sem;
sem = &sem_cb;
madSemInit(sem, cnt);
```
:::
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| cnt | in | 信号量的初始值(也是最大值) |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 失败 |
| MTRUE  | 成功 |

## madSemInitCarefully
```c
MadBool madSemInitCarefully (MadSemCB_t *sem, MadU16 cnt, MadU16 max)
```
初始化信号量。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| cnt | in | 信号量的初始值 |
| max | in | 信号量的最大值 |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 失败 |
| MTRUE  | 成功 |

## madDoSemRelease
```c
void madDoSemRelease (MadSemCB_t **pSem, MadU8 err)
```
释放一次信号量。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pSem | in | 信号量指针 |
| err  | in | 释放信号量时的错误号(通常为MAD_ERR_OK) |

## madSemWait
```c
MadU8 madSemWait (MadSemCB_t **pSem, MadTim_t timOut)
```
等待信号量。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pSem   | in | 信号量指针 |
| timOut | in | 信号量的最大值 |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误(代码) |
| MAD_ERR_OK | 正常 |

## madSemWaitInCritical
```c
MadU8 madSemWaitInCritical (MadSemCB_t **pSem, MadTim_t timOut, MadCpsr_t *pCpsr)
```
等待信号量(谨慎使用)。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pSem   | in | 信号量指针 |
| timOut | in | 信号量的最大值 |
| pCpsr  | io | 父级cpsr指针 |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误(代码) |
| MAD_ERR_OK | 正常 |

::: tip
- 在临界区内被调用
- 可能离开临界区使当前线程进入等待状态
- 执行结束后回到临界区
:::

## madSemCheck
```c
MadBool madSemCheck (MadSemCB_t **pSem)
```
检查信号量是否可用。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pSem   | in | 信号量指针 |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 无空闲资源 |
| MTRUE  | 有空闲资源 |

## madDoSemDelete
```c
void madDoSemDelete (MadSemCB_t **pSem, MadBool opt)
```
删除信号量。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pSem | in | 信号量指针 |
| opt  | in | 是否恢复等待线程 |

::: tip opt
| 值 | 说明 |
| :-| :-|
| MTRUE  | 以 MAD_ERR_SEM_INVALID 为 err 释放信号量(恢复所有等待线程) |
| MFALSE | 忽略所有等待线程 |
:::

## madSemRelease(pSem)
```c
void madDoSemRelease (MadSemCB_t **pSem, MadU8 err)
```
| 参数 | 值 |
| :-| :-|
| err | MAD_ERR_OK |

## madSemDelete(pSem)
```c
void madDoSemDelete (MadSemCB_t **pSem, MadBool opt)
```
| 参数 | 值 |
| :-| :-|
| opt | MTRUE |
