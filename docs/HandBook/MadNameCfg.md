# 命名与配置

## 命名规范
| 类型 | 首字母 | 其余字母 | 开头 | 间隔 | 结尾 | 参考规范 |
| :-:| :-:| :-:| :-:| :-:| :-:| :-:|
| API / API 宏 | 小写 |     | mad |    |    | 驼峰 |
| 常规数据类型   | 大写 |     | Mad |    |    | 驼峰 |
| 自定数据类型   | 大写 |     | Mad |    | _t | 驼峰 |
| 结构体        | 大写 |     | Mad |    | _t | 驼峰 |
| 全局变量      | 大写 |      | Mad |   |    | 驼峰 |
| 静态全局变量   | 小写 |     | mad_ | _ |    | 局部变量 |
| 常量宏        | 大写 | 大写 | Mad_ | _ |    | 驼峰 |

## 配置说明
MadOS 的配置分为两个部分，线程优先级分配与平台相关性配置。线程优先级分配需要使用者根据自建的功能线程之间的关联确立。平台相关性配置位于 MadArch.h 与 MacConfig.h 中:

### MadArch.h    
| 名称 | 必须 | 说明 |
| :-| :-:| :-|
| typedef ... ... ;      | y | 依据软件平台定义数据类型 |
| DEF_SYS_TICK_FREQ      | n | 硬件 System Tick 时钟 |
| DEF_TICKS_PER_SEC      | n | 内核 System Tick 频率(建议设置 1000) |
| madSched()             | y | 切换线程(触发软件中断) |
| madEnterCritical(cpsr) | y | 进入临界区 |
| madExitCritical(cpsr)  | y | 离开临界区 |
| madUnRdyMap(res, src)  | y | 解析优先级 |

### MacConfig.h
| 名称 | 必须 | 说明 |
| :-| :-:| :-|
| MAD_MEM_ALIGN_MASK   | y | 内存地址对其掩码(根据硬件平台确定) |
| MAD_THREAD_NUM_MAX   | y | 最大线程数(使用者根据需要确定) |
| MAD_IDLE_STK_SIZE    | y | 空闲线程堆栈尺寸 |
| MAD_STATIST_STK_SIZE | n | 统计线程堆栈尺寸 |
| MAD_AUTO_RECYCLE_RES | n | madThreadDeleteAndClear自动回收动态内存[^1] |
| MAD_CPY_MEM_BY_DMA   | n | 利用硬件 DMA 实现内存的复制与设置[^2] |
| MAD_LOG_INIT()       | n | 初始化 MAD_LOG 所需的环境 |
| MAD_LOG(...)         | n | 打印信息 |
| MAD_USE_IDLE_HOOK    | n | 使用空闲线程的钩子接口 |
[^1]: 线程运行过程中调用 madMemMalloc 分配的动态内存。
[^2]: DMA需要依赖硬件中断，相关函数不可在临界区中调用。
