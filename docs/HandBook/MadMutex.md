# 互斥信号
::: tip
- MadMutex.h
- MadMutex.c
:::
| 类型 | 约定描述 |
| :-| :-|
| MadMutexCB_t   | 互斥信号控制块 |
| MadMutexCB_t*  | 互斥信号 |
| MadMutexCB_t** | 互斥信号指针 |

## MadOS 互斥信号类型
| 类型 | 描述 |
| :-| :-|
| MAD_MUTEX_NORMAL    | 普通互斥信号 |
| MAD_MUTEX_RECURSIVE | 递归互斥信号 |
::: tip
当线程获得某个递归互斥信号后，释放该互斥信号之前的所有等待操作将被忽略。
```c
MadMutexCB_t *mutex = madMutexCreateRecursive();
madMutexWait(&mutex, 0);  // 首次获得互斥信号
madMutexWait(&mutex, 0);  // 不会造成线程阻塞
madMutexRelease(&mutex,); // 释放互斥信号
// { 假设: 互斥信号释放后立即被其他线程占用 }
madMutexWait(&mutex, 0);  // 线程阻塞
```
:::

## madDoMutexCreate
```c
MadMutexCB_t* madDoMutexCreate(MadU8 type, MadU8 flag)
```
新建互斥信号。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| type | in | 互斥信号类型 |
| flag | in | 互斥信号初始状态 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向互斥信号控制块的指针) |

:::tip flag
| 值 | 说明 |
| :-| :-|
| 0 | 初始处于锁定状态 |
| x | 初始处于解锁状态 |
:::

## madDoMutexInit
```c
MadBool madDoMutexInit(MadMutexCB_t *mutex, MadU8 type, MadU8 flag)
```
初始化互斥信号。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| mutex | in | 互斥信号 |
| type  | in | 互斥信号类型 |
| flag  | in | 互斥信号初始状态 |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 失败 |
| MTRUE  | 成功 |

:::tip flag
| 值 | 说明 |
| :-| :-|
| 0 | 初始处于锁定状态 |
| x | 初始处于解锁状态 |
:::

## madMutexSetType
```c
void madMutexSetType(MadMutexCB_t *mutex, MadU8 type)
```
设置互斥信号类型。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| mutex | in | 互斥信号 |
| type  | in | 互斥信号类型 |

## madDoMutexRelease
```c
void madDoMutexRelease(MadMutexCB_t **pMutex, MadU8 err)
```
释放互斥信号。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMutex | in | 互斥信号指针 |
| err    | in | 释放互斥信号时的错误号(通常为MAD_ERR_OK) |

## madMutexWait
```c
MadU8 madMutexWait(MadMutexCB_t **pMutex, MadTim_t timOut)
```
等待互斥信号。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMutex | in | 互斥信号指针 |
| timOut | in | 等待超时的时间值(0则无时限) |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误代码 |
| MAD_ERR_OK | 获得资源 |

## madMutexWaitInCritical
```c
MadU8 madMutexWaitInCritical(MadMutexCB_t **pMutex, MadTim_t timOut)
```
等待互斥信号(谨慎使用)。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMutex | in | 互斥信号指针 |
| timOut | in | 等待超时的时间值(0则无时限) |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误代码 |
| MAD_ERR_OK | 获得资源 |

::: tip
- 在临界区内被调用
- 可能离开临界区使当前线程进入等待状态
- 执行结束后回到临界区
:::

## madMutexCheck
```c
MadBool madMutexCheck(MadMutexCB_t **pMutex)
```
检查互斥信号是否可用。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMutex | in | 互斥信号指针 |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误代码 |
| MAD_ERR_OK | 获得资源 |

## madDoMutexDelete
```c
void madDoMutexDelete(MadMutexCB_t **pMutex, MadBool opt)
```
删除互斥信号。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMutex | in | 互斥信号指针 |
| opt    | in | 是否恢复等待线程 |

::: tip opt
| 值 | 说明 |
| :-| :-|
| MTRUE  | 以 MAD_ERR_MUTEX_INVALID 为 err 释放互斥信号(恢复所有等待线程) |
| MFALSE | 忽略所有等待线程 |
:::

## madMutexCreate()
```c
MadMutexCB_t* madDoMutexCreate(MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_NORMAL |
| flag | 1 |

## madMutexCreateN()
```c
MadMutexCB_t* madDoMutexCreate(MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_NORMAL |
| flag | 0 |

## madMutexCreateRecursive()
```c
MadMutexCB_t* madDoMutexCreate(MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_RECURSIVE |
| flag | 1 |

## madMutexCreateRecursiveN()
```c
MadMutexCB_t* madDoMutexCreate(MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_RECURSIVE |
| flag | 0 |

## madMutexInit(mutex)
```c
MadBool madDoMutexInit(MadMutexCB_t *mutex, MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_NORMAL |
| flag | 1 |

## madMutexInitN(mutex)
```c
MadBool madDoMutexInit(MadMutexCB_t *mutex, MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_NORMAL |
| flag | 0 |

## madMutexInitRecursive(mutex)
```c
MadBool madDoMutexInit(MadMutexCB_t *mutex, MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_RECURSIVE |
| flag | 1 |

## madMutexInitRecursiveN(mutex)
```c
MadBool madDoMutexInit(MadMutexCB_t *mutex, MadU8 type, MadU8 flag)
```
| 参数 | 值 |
| :-| :-|
| type | MAD_MUTEX_RECURSIVE |
| flag | 0 |

## madMutexRelease(pMutex)
```c
void madDoMutexRelease (MadMutexCB_t **pMutex, MadU8 err)
```
| 参数 | 值 |
| :-| :-|
| err | MAD_ERR_OK |

## madMutexDelete(pMutex)
```c
void madDoMutexDelete (MadMutexCB_t **pMutex, MadBool opt)
```
| 参数 | 值 |
| :-| :-|
| opt | MTRUE |
