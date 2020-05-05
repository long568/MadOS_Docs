# 等待队列
::: tip
- MadWaitQueue.h
- MadWaitQueue.c
:::

## MadOS 等待队列事件
| 名称 | 说明 |
| :-| :-|
| MAD_WAIT_EVENT_NONE  | “空”事件 |
| MAD_WAIT_EVENT_READ  | 等待读 |
| MAD_WAIT_EVENT_WRITE | 等待写 |
| MAD_WAIT_EVENT_ERR   | 等待错误 |

:::tip
用户可自定义更多事件
:::

## MadOS 等待队列结构体
| 名称 | 说明 |
| :-| :-|
| MadWait_t  | 等待对象 |
| MadWaitQ_t | 等待队列 |

:::tip
一个等待队列中包含多个等待对象
:::

## madWaitQCreate
```c
MadWaitQ_t* madWaitQCreate(MadU8 n)
```
新建等待队列
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| n  | in | 等待队列深度 |

| 返回值 | 说明 |
| :-:| :-|
| MNULL | 失败 |
| x     | 成功 |

## madWaitQDelete
```c
void madWaitQDelete(MadWaitQ_t *wq)
```
删除等待队列
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| wq | in | 等待队列指针 |

## madWaitQAdd
```c
MadBool madWaitQAdd(MadWaitQ_t *wq, MadSemCB_t **locker, MadU8 event)
```
加入等待队列
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| wq     | in | 等待队列指针 |
| locker | in | 信号量指针 |
| event  | in | 等待队列事件 |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 失败 |
| MTRUE  | 成功 |

:::tip
- 将**event**与**locker**组成等待对象，加入等待队列。
- **event**触发时，释放等待队列中第一个匹配该事件的等待对象的**locker**。
:::

## madWaitQScan
```c
MadBool madWaitQScan(MadWaitQ_t *wq, MadSemCB_t **locker, MadU8 event, MadWait_t *rw)
```
查找等待对象(匹配的等待对象会从等待队列中删除)
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| wq     | in  | 等待队列指针 |
| locker | in  | 信号量指针(NULL则忽略) |
| event  | in  | 等待队列事件(NULL则忽略) |
| rw     | out | 等待对象指针 |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 失败(rw无意义) |
| MTRUE  | 成功(rw返回匹配的等待对象) |

:::tip
- **locker**与**event**不可同时为**NULL**，否则无意义。
- 等待队列不会回收**locker**最终指向的内存空间。
:::

## madWaitQSignal()
```c
MadBool madWaitQSignal(MadWaitQ_t *wq, MadU8 event)
```
触发等待事件(匹配的等待对象会从等待队列中删除)
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| wq    | in  | 等待队列指针 |
| event | in  | 等待队列事件 |

| 返回值 | 说明 |
| :-:| :-|
| MFALSE | 失败 |
| MTRUE  | 成功 |

:::tip
- 等待队列不会回收**locker**最终指向的内存空间。
:::

## madWaitQScanEvent(wq, event, rw)
```c
MadBool madWaitQScan(MadWaitQ_t *wq, MadSemCB_t **locker, MadU8 event, MadWait_t *rw)
```
| 参数 | 值 |
| :-| :-|
| locker | NULL |

## madWaitQScanLocker(wq, locker, rw)
```c
MadBool madWaitQScan(MadWaitQ_t *wq, MadSemCB_t **locker, MadU8 event, MadWait_t *rw)
```
| 参数 | 值 |
| :-| :-|
| event | MAD_WAIT_EVENT_NONE |

## madWaitQRemove(wq, locker, event)
```c
MadBool madWaitQScan(MadWaitQ_t *wq, MadSemCB_t **locker, MadU8 event, MadWait_t *rw)
```
| 参数 | 值 |
| :-| :-|
| rw | NULL |
