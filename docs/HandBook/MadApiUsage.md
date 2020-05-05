# API 使用限制

## 只能调用一次的函数
```c
madOSInit
madOSRun
madInitSysTick // 必须在用户线程建立前调用。
madInitStatist // 必须在 madInitSysTick 之后，用户线程建立前调用。
```
::: tip
初始化后，内部参数由 MadOS 自行维护，用户不可更改，否则将导致不可预期的错误。
:::

## 不能手动调用的函数
```c
madMemInit       // madOSInit 内部自动调用。
madTimeInit      // madInitSysTick 内部自动调用。
madThreadStkInit // madThreadCreateCarefully 内部自动调用。
madSysTick       // System Tick 中断中自动调用。
madMemClearRes   // madThreadDeleteAndClear 中自动调用。
```
::: tip
以上函数由MadOS内部自动调用。
:::

## 不能在中断或临界区内调用的函数
```c
MadMemory 模块中的所有函数
madFBufferCreate
madFBufferDelete

madThreadCreateCarefully
madThreadCreate
madThreadDelete

madTimeDly

madSemCreateCarefully
madSemCreate
madSemCreateN
madSemWait
madSemWaitInCritical /* 可在临界区内调用 / 谨慎使用!!! */
madDoSemDelete
madSemDelete

madDoMutexCreate
madMutexCreate
madMutexCreateN
madMutexCreateRecursive
madMutexCreateRecursiveN
madMutexWait
madMutexWaitInCritical /* 可在临界区内调用 / 谨慎使用!!! */
madDoMutexDelete
madMutexDelete

madMsgQCreateCarefully
madMsgQCreate
madMsgWait
madDoMsgSend
madMsgSendBlock /* 如有内建投递锁定信号量则不能调用 */
madDoMsgQDelete
madMsgQDelete

madEventCreate
madEventWait
madDoEventDelete
madEventDelete

madWaitQCreate
madWaitQDelete
```
::: tip
以上函数可能导致线程阻塞。
:::
