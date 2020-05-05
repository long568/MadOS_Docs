# 内存管理
::: tip
- MadMemory.h
- MadMemory.c
:::

## madMemInit
```c
void madMemInit(MadVptr heap_head, MadSize_t heap_size)
```
指定内存堆的可用区域。该函数由内核初始化时自动调用，使用者不可调用。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| heap_head | in | 堆首地址 |
| heap_size | in | 堆大小(以字节为单位) |

## madMemMallocCarefully
```c
MadVptr madMemMallocCarefully(MadSize_t n, MadSize_t *nReal)
```
分配一块动态内存。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| n     | in  | 欲分配内存的大小(以字节为单位) |
| nReal | out | 返回实际分配的内存大小(0则忽略) |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(内存块首地址) |

::: tip
**malloc(0)** 返回0
:::

## madMemCalloc
```c
MadVptr madMemCalloc(MadSize_t n, MadSize_t size)
```
分配一块由 n 个尺寸为 size 的连续内存块组成的动态内存。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| n    | in | 连续内存块的数量 |
| size | in | 连续内存块的尺寸 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(内存块首地址) |

## madMemRealloc
```c
MadVptr madMemRealloc(MadVptr p, MadSize_t size)
```
基于现有内存块 p，重新分配一块尺寸为 size 的新内存块。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| p    | in | 原内存块 |
| size | in | 新内存块尺寸 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(内存块首地址) |

::: tip
**realloc** 调用失败时并不会释放**p**所指向的内存
:::

## madMemFree
```c
void madMemFree(MadVptr p)
```
回收 p 指向的内存块。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| p | in | 欲回收的内存块首地址 |

## madMemUnusedSize
```c
MadSize_t madMemUnusedSize(void)
```
获取可用内存总数。
| 返回值 | 说明 |
| :-:| :-|
| x | 可用内存尺寸 |

## madMemMaxSize
```c
MadSize_t madMemMaxSize(void)
```
获取最大内存堆尺寸。
| 返回值 | 说明 |
| :-:| :-|
| x | 最大内存堆尺寸 |

## madMemCpy
```c
void madMemCpy(MadVptr dst, const MadVptr src, MadSize_t len)
```
数据复制。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| dst | in | 目标数据首地址 |
| src | in | 源数据首地址 |
| len | in | 数据长度(以字节为单位) |

## madMemSet
```c
void madMemSet(MadVptr dst, MadU8 value, MadSize_t len)
```
数据设置。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| dst   | in | 目标数据首地址 |
| value | in | 欲设置的值 |
| len   | in | 数据长度(以字节为单位) |

## madMemCmp
```c
void madMemCmp(MadVptr dst, const MadVptr src, MadSize_t len)
```
数据比较。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| dst | in | 目标数据首地址 |
| src | in | 源数据首地址 |
| len | in | 数据长度(以字节为单位) |

| 返回值 | 说明 |
| :-:| :-|
| 1  | dst 大于 src |
| 0  | dst 等于 src |
| -1 | dst 小于 src |

## madMemMalloc(n)
```c
MadVptr madMemMallocCarefully(MadSize_t n, MadSize_t *nReal)
```
| 参数 | 值 |
| :-| :-|
| nReal | MNULL |

## madMemFreeNull(p)
```c
void madMemFree(MadVptr p);
```
内存释放后将p置0。
