# 快速缓存
::: tip
- MadFastBuffer.h
- MadFastBuffer.c
:::

## madFBufferCreate
```c
MadFBuffer_t* madFBufferCreate (MadSize_t n, MadSize_t size)
```
新建快速缓存。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| n    | in | 指定快速缓存的分块数 |
| size | in | 指定快速缓存的分块尺寸 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向快速缓存的指针) |

## madFBufferGet
```c
MadVptr madFBufferGet (MadFBuffer_t *fb)
```
从快速缓存中取得一个分块。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| fb | in | 快速缓存 |

| 返回值 | 说明 |
| :-:| :-|
| 0  | 失败 |
| NZ | 成功(指向可用数据块的指针) |

## madFBufferPut
```c
MadVptr madFBufferPut (MadFBuffer_t *fb, MadVptr buf)
```
将一个分块放回快速缓存中。
| 参数名 | 方向 | 说明 |
| :-| :-:| :-|
| fb  | in | 快速缓存 |
| buf | in | 数据块 |

## madFBufferUnusedCount(fb)
返回快速缓存中可用分块的数量。

## madFBufferMaxCount(fb)
返回快速缓存中分块的最大数量。

## madFBufferDelete(fb)
删除一个快速缓存，并将 fb 置 0。
