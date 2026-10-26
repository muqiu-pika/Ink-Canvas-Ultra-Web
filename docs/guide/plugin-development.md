---
title: 插件开发手册
createTime: 2026/10/26 21:40:00
permalink: /article/plugin-development/
---
# 🧩 插件开发手册

本文是 Ink Canvas Ultra（ICU）插件 API 的接口契约说明。接口本身在 `Ink Canvas/Plugins/` 目录，字段与参数的语义以本文为准。

## 📁 目录结构

主程序从 `<程序目录>\Plugins\` 加载插件，一个插件占一个子目录：

```
Ink Canvas Ultra.exe
└── Plugins/
    └── ink-canvas.frame-toggle/
        ├── plugin.icplugin        # 必需，清单文件
        ├── FrameTogglePlugin.dll  # 可选，入口程序集
        ├── icon.png               # 可选，图标
        └── ...                    # 可选，插件私有资源
```

## 📄 plugin.icplugin 清单

带 BOM 的 UTF-8 JSON，根对象即 `PluginManifest`：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `id` | 是 | 唯一标识，建议反向域名格式。仅小写字母、数字、连字符、点号，长度 2–64 |
| `name` | 是 | 展示名称，建议不超过 32 字符 |
| `version` | 是 | 语义化版本，用于依赖检查与升级判断 |
| `author` | 否 | 作者或组织名 |
| `description` | 否 | 简短描述，建议不超过 128 字符 |
| `entryAssembly` | 否 | 入口程序集文件名（相对插件目录）。留空则只注册声明式入口点，不加载程序集 |
| `entryClass` | 否 | 实现 `IPlugin` 的全限定类名，仅在 `entryAssembly` 非空时有效 |
| `minHostVersion` | 否 | 兼容的最低主程序版本，低于此版本拒绝加载 |
| `homepage` | 否 | 主页地址，工坊中展示「访问主页」 |
| `icon` | 否 | 图标相对路径，建议 64×64 PNG |
| `entryPoints` | 否 | 声明式 UI 入口点数组，见下节 |

## 🚪 声明式入口点

不写代码也能在界面上暴露一个按钮：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `route` | 是 | 触发时调用的路由键。内置可选项：`video-presenter`（激活视频展台侧栏）、`settings:appearance`（跳转外观设置） |
| `placement` | 是 | 放置位置：`board-toolbar`（白板工具栏）、`float-bar`（浮动工具栏）、`sidebar`（侧栏头部） |
| `label` | 是 | 按钮文本 |
| `glyph` | 否 | Segoe Fluent Icons 字符，如 `\ue714` |
| `icon` | 否 | 图标资源路径，与 `glyph` 二选一，`glyph` 优先 |
| `order` | 否 | 排序权重，越小越靠前，默认 100 |
| `tooltip` | 否 | 悬停提示 |

## 🔄 生命周期

```
PluginHost 反射创建实例（必须有无参构造函数）
    └─ Initialize(IPluginHost host)    # 返回前不要做 UI 操作
        └─ Shutdown()                  # 释放资源、注销 UI、关闭线程
```

`Manifest` 属性需与 `plugin.icplugin` 内容一致。插件在 `Shutdown` 里必须撤销自己注册的一切内容（路由、控制条、设置面板、事件订阅），否则宿主会残留指向已卸载程序集的对象。

## 🔌 IPluginHost API

### 路径与日志

| 成员 | 说明 |
| --- | --- |
| `PluginDirectory` | 插件自身目录，以 `\` 结尾 |
| `HostRootPath` | 主程序根目录 |
| `MainWindow` | 主窗口实例 |
| `Log(message, level)` | 写入主程序日志，级别默认 `Info` |
| `ShowNotification(message)` | 轻量通知，自动消失 |

### 路由

| 成员 | 说明 |
| --- | --- |
| `TriggerRoute(route, param)` | 先查插件注册的处理器，再查主程序内建路由；返回是否被处理 |
| `RegisterRouteHandler(route, handler)` | 注册处理器，`handler` 返回 `true` 表示已处理 |
| `UnregisterRouteHandler(route)` | 注销 |

### 画布与元素

| 成员 | 说明 |
| --- | --- |
| `GetInkCanvas()` | 主画布，白板与批注共用 |
| `GetSelectedElements()` | 当前选中元素（含 `Stroke` 与 `UIElement`） |
| `CommitElementInsertHistory(element)` | 提交插入历史，使该元素可被撤销 |
| `AddCapturedPhoto(image, filePath)` | 加入照片列表；`filePath` 非空时复制到依赖目录 |
| `UpdateCapturedPhoto(filePath, image)` | 替换同路径文档照片，保留时间戳等元数据；不存在则新增 |
| `ReplaceDocumentImageOnCanvas(filePath, image)` | 替换画板上的文档图片源，保留位置与尺寸；返回是否命中 |
| `HasCapturedPhotoForFile(filePath)` | 照片列表中是否已有该文档 |
| `RestoreDocumentPageIfSaved(filePath)` | 该文档有保存过的笔迹时恢复到当前页 |
| `GetCurrentPageIndex()` | 当前页码（白板模式为页索引，批注模式为 0） |
| `AutoSavedStrokesLocation` | 媒体依赖文件目录 |
| `PhotoClarityDpi` | 照片清晰度 |

### 选择控制条

`RegisterSelectionControlBar(controlBar)` / `UnregisterSelectionControlBar(controlBar)`

把自定义控制条挂到选中元素浮条中。宿主只负责容器与显隐时机，`Visibility` 由插件自行管理。

### 快捷键

| 成员 | 说明 |
| --- | --- |
| `GetHotkeyActions()` | 全部内置快捷动作 |
| `SetHotkey(actionId, combo)` | 重绑定；`combo` 为空串或 `null` 表示禁用；返回是否成功 |
| `ResetHotkey(actionId)` / `ResetAllHotkeys()` | 恢复默认按键 |
| `GetConflictingHotkeys(actionId, combo)` | 与其它动作冲突的列表，不含自身；无冲突返回空 |
| `SuspendHotkeys()` / `ResumeHotkeys()` | 捕获新按键期间挂起全部快捷键；长时间不恢复会由宿主自动恢复 |

### 工具栏排序

| 成员 | 说明 |
| --- | --- |
| `GetReorderableToolbarGroups()` | 可重排分组（`float-bar` / `board-toolbar`）及其按钮 |
| `ApplyToolbarOrder(placement, orderedItemIds)` | 必须是该分组的完整排列，不增不减不重复，否则返回 `false` 且不产生改动 |
| `SetToolbarHidden(placement, hiddenItemIds)` | 只折叠 Visibility，不移除对象；「工具」按钮受保护 |
| `ResetToolbarPlacement(placement)` | 恢复默认顺序 |

### 画笔调色板

槽位索引沿用主程序约定：`0-8` 为普通色，`101-106` 为荧光笔色。

| 成员 | 说明 |
| --- | --- |
| `GetPenColorSlots()` | 全部槽位，未自定义时返回内置主题色 |
| `SetPenColorSlot(index, color)` | 立即生效于色块、当前笔色与批注按钮；索引非法返回 `false` |
| `ResetPenColorSlot(index)` / `ResetPenColors()` | 恢复内置主题色 |
| `CurrentPenColorIndex` / `SelectPenColor(index)` | 当前选色槽位；等同于点击色块 |
| `DefaultPenColorIndex` | 启动初始色，`-1` 表示沿用内置默认（批注红、白板黑/白随背景） |
| `IsPluginActive(id)` / `IsPluginInstalled(id)` | 用于按依赖关系切换自身功能入口 |

自定义颜色只存在于运行时：插件被禁用或卸载后需自行恢复，或调用 `ResetPenColors()`。

### 设置面板

`RegisterSettingsPanel(panelFactory)` / `UnregisterSettingsPanel()`

注册一个构建 UI 的工厂方法，在插件工坊该条目下展开显示。每次展开都会重新调用工厂以刷新内容。

### 事件

| 事件 | 说明 |
| --- | --- |
| `ApplicationExiting` | 主程序即将退出 |
| `BoardModeChanged` | 模式切换，`NewMode` 为 0（批注）/ 1（白板） |
| `ElementSelectionChanged` | 选中集变化 |
| `ElementRemoved` / `ElementTransformed` | 元素被移除 / 变换（批量操作时给首个元素） |
| `PenColorsChanged` | 调色板变化：自定义、恢复默认、选色或主题切换 |
| `PenSlotEditRequested` | 用户在色块上右键或长按，请求改色。处理后把 `Handled` 置 `true`；无订阅者时静默忽略 |

## 📦 打包与分发

安装包本质是 ZIP，扩展名改为 `.icplugin`，文件名即安装后的目录名：

```
visualpresenter.icplugin（实为 ZIP）
├── plugin.icplugin
├── VisualPresenter.dll
└── icon.png
```

「从本地安装」会解压到 `Plugins\<文件名>\`，并校验根目录存在 `plugin.icplugin`，缺失即回滚。开发期也可直接把目录放进 `Plugins\<id>\`，下次启动自动发现。

打包后需同步市场元数据（`market/v1/market.json` 与根目录 `plugins.json`），因为 ZIP 内的文件时间戳会改变安装包字节数。

## 🔗 参考实现

- 官方插件仓库：[muqiu-pika/Ink-Canvas-Ultra-Plugin](https://github.com/muqiu-pika/Ink-Canvas-Ultra-Plugin)
- 清单文件完整规范：仓库内 `README.md`
- 可按需参考的示例：`frametoggle`（Win32 窗口样式）、`pencolors`（调色板与取色器）、`toolbarreorder`（工具栏排序）、`documenttoimage`（多格式转换与进度 UI）
