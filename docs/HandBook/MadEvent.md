# 事件管理
::: tip
- MadEvent.h
- MadEvent.c
:::
::: tip
“事件”与“信号”、“消息队列”不同，当某个“事件”触发时，将激活等待该事件的所有线程。
:::
| 类型 | 约定描述 |
| :-| :-|
| MadEventCB_t   | 事件控制块 |
| MadEventCB_t*  | 事件 |
| MadEventCB_t** | 事件指针 |

## MadOS 事件触发类型
| 类型 | 说明 |
| :-| :-|
| MEMODE_WAIT_ALL | 全部条件满足才触发事件 |
| MEMODE_WAIT_ONE | 单一条件满足即触发事件 |

## MadOS 事件操作模式
当产生触发条件但没有线程等待事件时: 
| 模式 | 说明 |
| :-| :-|
| MEOPT_DIRECT | 该事件将被抛弃 |
| MEOPT_DELAY  | 该事件将被保持 |

## madEventCreate
```c
MadEventCB_t* madEventCreate (MadUint mask, MadEventMode mode, MadEventOpt opt)
```
新建事件。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| mask | in | 事件触发掩码 |
| mode | in | 事件触发类型 |
| opt  | in | 事件操作模式 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向事件控制块的指针) |

## madEventWait
```c
MadU8 madEventWait (MadEventCB_t **pEvent, MadUint *mask, MadTim_t to)
```
等待事件。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pEvent | in  | 事件指针 |
| mask   | out | 接收事件当前掩码 |
| to     | in  | 等待超时的时间值(0则无时限)|

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误代码 |
| MAD_ERR_OK | 事件触发 |

## madEventDoCheck
```c
MadU8 madEventDoCheck (MadEventCB_t **pEvent, MadUint *mask, MadBool clear)
```
检查事件当前掩码。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pEvent | in  | 事件指针 |
| mask   | out | 接收事件当前掩码 |
| clear  | in  | 是否清除当前掩码 |

| 返回值 | 说明 |
| :-:| :-|
| MAD_ERR_x  | 错误代码 |
| MAD_ERR_OK | 事件触发 |

## madDoEventTrigger
```c
void madDoEventTrigger (MadEventCB_t **pEvent, MadUint mask, MadU8 err)
```
以mask为掩码值激活事件掩码。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pEvent | in | 事件指针 |
| mask   | in | 激活掩码 |
| err    | in | 激活错误代码(通常为MAD_ERR_OK) |

## madDoEventDelete
```c
void madDoEventDelete (MadEventCB_t **pEvent, MadBool opt)
```
删除事件。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| pEvent | in | 事件指针 |
| opt    | in | 是否恢复等待线程 |

::: tip opt
| 值 | 说明 |
| :-| :-|
| MTRUE  | 以 MAD_ERR_EVENT_INVALID 为 err 释放信号量(恢复所有等待线程) |
| MFALSE | 忽略所有等待线程 |
:::

## madEventWaitNR(pEvent, to)
```c
MadU8 madEventWait (MadEventCB_t **pEvent, MadUint *mask, MadTim_t to)
```
| 参数 | 值 |
| :-| :-|
| mask | MNULL |

## madEventCheck(pEvent, mask)
```c
MadU8 madEventDoCheck (MadEventCB_t **pEvent, MadUint *mask, MadBool clear)
```
| 参数 | 值 |
| :-| :-|
| clear | MTRUE |

## madEventCheckNC(pEvent, mask)
```c
MadU8 madEventDoCheck (MadEventCB_t **pEvent, MadUint *mask, MadBool clear)
```
| 参数 | 值 |
| :-| :-|
| clear | MFALSE |

## madEventClear(pEvent)
```c
MadU8 madEventDoCheck (MadEventCB_t **pEvent, MadUint *mask, MadBool clear)
```
| 参数 | 值 |
| :-| :-|
| mask  | MNULL |
| clear | MTRUE |

## madEventTrigger(pEvent, mask)
```c
void madDoEventTrigger (MadEventCB_t **pEvent, MadUint mask, MadU8 err)
```
| 参数 | 值 |
| :-| :-|
| err  | MAD_ERR_OK |

## madEventDelete(pEvent)
```c
void madDoEventDelete (MadEventCB_t **pEvent, MadBool opt)
```
| 参数 | 值 |
| :-| :-|
| opt | MTRUE |
