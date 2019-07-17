# 信号管理
::: tip
- MadMessage.h
- MadMessage.c
:::
| 类型 | 约定描述 |
| :-| :-|
| MadMsgQCB_t   | 消息队列控制块 |
| MadMsgQCB_t*  | 消息队列 |
| MadMsgQCB_t** | 消息队列指针 |

## madMsgQCreateCarefully
```c
MadMsgQCB_t* madMsgQCreateCarefully (MadU16 size, MadBool sendBlock)
```
新建消息队列。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| size      | in | 消息队列的容量 |
| sendBlock | in | 是否内建投递锁定信号量 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向消息队列控制块的指针) |

::: tip sendBlock
如果内建了投递锁定信号量，消息队列已满时，madDoMsgSend 会根据参数阻塞线程。
:::

## madMsgCheck
```c
MadU8 madMsgCheck (MadMsgQCB_t **pMsgQ, MadVptr *msg)
```
检查消息队列中是否有未读消息。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMsgQ | in | 消息队列指针 |
| msg   | in | 返回给应用的消息 |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_MSGQ_EMPTY | 消息队列为空 |
| MAD_ERR_OK         | 获取消息成功 |

## madMsgWait
```c
MadU8 madMsgWait (MadMsgQCB_t **pMsgQ, MadVptr *msg, MadTim_t to)
```
等待消息。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMsgQ | in | 消息队列指针 |
| msg   | in | 返回给应用的消息 |
| to    | in | 等待超时的时间值 |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 获取消息失败(错误代码) |
| MAD_ERR_OK | 获取消息成功 |

## madDoMsgSend
```c
MadU8 madDoMsgSend ( 
    MadMsgQCB_t **pMsgQ, 
    MadVptr     msg, 
    MadBool     block, 
    MadTim_t    to, 
    MadU8       err
)
```
向消息队列中投递消息。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMsgQ | in | 消息队列指针 |
| msg   | in | 欲投递的消息 |
| block | in | 消息队列已满时是否阻塞线程 |
| to    | in | 等待超时的时间值 |
| err   | in | 投递操作的错误代码(通常为MAD_ERR_OK) |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 投递消息失败(错误代码) |
| MAD_ERR_OK | 投递消息成功 |

::: tip
- 内建了投递锁定信号量才可能阻塞；
- 不要在中断函数中尝试阻塞线程。
:::

## madDoMsgQDelete
```c
void madDoMsgQDelete (MadMsgQCB_t **pMsgQ, MadBool opt)
```
删除消息队列。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pMsgQ | in | 信号量指针 |
| opt   | in | 是否恢复等待线程 |

::: tip opt
| 值 | 说明 |
| :-| :-|
| MTRUE  | 以 MAD_ERR_MSGQ_INVALID 为 err 投递空消息(恢复所有等待线程) |
| MFALSE | 忽略所有等待线程 |
:::

::: tip
如果内建了投递锁定信号量，则以 opt 为参数删除内建投递锁定信号量。
:::

## madMsgQCreate(size)
```c
MadMsgQCB_t* madMsgQCreateCarefully (MadU16 size, MadBool sendBlock)
```
| 参数 | 值 |
| :-| :-|
| sendBlock | MFALSE |

## madMsgSend(pMsgQ, msg)
```c
MadU8 madDoMsgSend ( 
    MadMsgQCB_t **pMsgQ, 
    MadVptr     msg, 
    MadBool     block, 
    MadTim_t    to, 
    MadU8       err
)
```
| 参数 | 值 |
| :-| :-|
| block | MFALSE |
| to    | 0 |
| err   | MAD_ERR_OK |

## madMsgSendBlock(pMsgQ, msg, to)
```c
MadU8 madDoMsgSend ( 
    MadMsgQCB_t **pMsgQ, 
    MadVptr     msg, 
    MadBool     block, 
    MadTim_t    to, 
    MadU8       err
)
```
| 参数 | 值 |
| :-| :-|
| block | MTRUE |
| err   | MAD_ERR_OK |

## madMsgQDelete(pMsgQ)
```c
void madDoMsgQDelete (MadMsgQCB_t **pMsgQ, MadBool opt)
```
| 参数 | 值 |
| :-| :-|
| opt | MTRUE |
