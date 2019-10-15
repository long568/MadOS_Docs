# 延时管理
::: tip
- MadTimeDly.h
- MadTimeDly.c
:::

## madInitSysTick
```c
void  madInitSysTick (MadTim_t freq, MadTim_t ticks)
```
初始化 System Tick。根据硬件实现。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| freq  | in | MCU时钟频率 |
| ticks | in | 每秒跳动次数 |

## madSysTick
```c
MadUint madSysTick (void)
```
每一个 System Tick 被调用一次，扫描所有线程，对延时值不为 0 的线程进行状态处理。 
::: tip  
通常在 System Tick 中断函数中被调用。使用者不可调用该函数。
:::

## madTimeDly
```c
void madTimeDly (MadTim_t timeCnt)
```
使当前线程延时一段时间。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| timeCnt  | in | 欲延迟的时钟值 |

## madTimeNow
```c
MadTim_t madTimeNow(void)
```
返回系统自启动以来经过的Systick数(通常以毫秒为单位)
| 返回值 | 说明 |
| :-:| :-|
| x | Systick数 |
