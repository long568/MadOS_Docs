(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{219:function(t,a,e){"use strict";e.r(a);var s=e(0),i=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"延时管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#延时管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 延时管理")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("ul",[e("li",[t._v("MadTimeDly.h")]),t._v(" "),e("li",[t._v("MadTimeDly.c")])])]),t._v(" "),e("h2",{attrs:{id:"madinitsystick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#madinitsystick","aria-hidden":"true"}},[t._v("#")]),t._v(" madInitSysTick")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" madInitSysTick "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MadTim_t freq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MadTim_t ticks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("初始化 System Tick。根据硬件实现。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("方向")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("freq")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MCU时钟频率")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ticks")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("每秒跳动次数")])])])]),t._v(" "),e("h2",{attrs:{id:"madsystick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#madsystick","aria-hidden":"true"}},[t._v("#")]),t._v(" madSysTick")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("MadUint madSysTick "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("每一个 System Tick 被调用一次，扫描所有线程，对延时值不为 0 的线程进行状态处理。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("通常在 System Tick 中断函数中被调用。使用者不可调用该函数。")])]),t._v(" "),e("h2",{attrs:{id:"madtimeinit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#madtimeinit","aria-hidden":"true"}},[t._v("#")]),t._v(" madTimeInit")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" madTimeInit "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MadTim_t freq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MadTim_t ticks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("初始化时间管理模块。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("方向")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("freq")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MCU时钟频率")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ticks")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("每秒跳动次数")])])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("通常在 madInitSysTick 中被调用。使用者不可调用该函数。")])]),t._v(" "),e("h2",{attrs:{id:"madtimedly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#madtimedly","aria-hidden":"true"}},[t._v("#")]),t._v(" madTimeDly")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" madTimeDly "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MadTim_t timeCnt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("使当前线程延时一段时间。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("方向")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("timeCnt")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("欲延迟的时钟值")])])])]),t._v(" "),e("h2",{attrs:{id:"madtimenow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#madtimenow","aria-hidden":"true"}},[t._v("#")]),t._v(" madTimeNow")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("MadTim_t "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("madTimeNow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("返回系统自启动以来经过的Systick数(毫秒为单位)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Systick数")])])])]),t._v(" "),e("h2",{attrs:{id:"madtimeofday"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#madtimeofday","aria-hidden":"true"}},[t._v("#")]),t._v(" madTimeOfDay")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("MadU64 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("madTimeOfDay")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("返回系统时间(毫秒为单位)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Systick数")])])])])])},[],!1,null,null,null);a.default=i.exports}}]);