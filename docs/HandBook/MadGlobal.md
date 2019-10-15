# 全局功能
::: tip
- MadGlobal.h
- MadGlobal.c
:::

## MadOS 版本号
| 名称 | 说明 |
| :-| :-|
| MAD_VER_MAJOR | MadOS 主版本号 |
| MAD_VER_SUB   | MadOS 子版本号 |

## MadOS 逻辑常量
| 名称 | 说明 |
| :-| :-|
| MTRUE  | 逻辑“真” |
| MFALSE | 逻辑“假” |
| MNULL  | 常量“空” |

## MadOS 错误类型
| 名称 | 说明 |
| :-| :-|
| MAD_ERR_OK            | 无错误 |
| MAD_ERR_TIMEOUT       | 超时 |
| MAD_ERR_EXITED        | 线程退出 |
| MAD_ERR_SEM_INVALID   | 信号量无效 |
| MAD_ERR_MUTEX_INVALID | 互斥信号无效 |
| MAD_ERR_MSGQ_INVALID  | 消息队列无效 |
| MAD_ERR_MSGQ_EMPTY    | 消息队列为空 |
| MAD_ERR_MSGQ_FULL     | 消息队列已满 |
| MAD_ERR_EVENT_INVALID | 事件管理无效 |
| MAD_ERR_UNDEFINE      | 未定义错误 |

## madOSInit
```c
void madOSInit (MadVptr heap_head, MadSize_t heap_size)
```
负责初始化系统内部参数以及创建空闲线程。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| heap_head | in | 指向内存堆头部的指针 |
| heap_size | in | 内存堆尺寸 |

## madOSRun
```c
void madOSRun (void)
```
负责启动系统，部分代码需针对具体硬件实现。

## madInitStatist
```c
void madInitStatist (void)
```
以 1s 作为间隔，统计系统运行时相关信息。

## madIdelRate
```c
MadInt madIdelRate (void)
```
返回系统当前的空闲率
| 返回值 | 说明 |
| :-:| :-|
| x | 系统当前的空闲率(以 100 为分母的整数) |
