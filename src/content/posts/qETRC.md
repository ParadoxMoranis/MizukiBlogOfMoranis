---
title: qETRC在ArchLinxu的构建
published: 2025-09-13
pinned: false
description: 本篇文章主要讲解如何在ArchLinux上构建qETRC。其他操作系统请自行搜索。
tags: [ArchLinux, Railway, qETRC]
category: Qt Application Build
author: MoranisZ
draft: false
date: 2025-09-13
image: ''
---

# qETRC在ArchLinxu的构建方法

## 安装第三方库
```bash
sudo pacman -S base-devel cmake qt6-base qt6-tools qt6-declarative qt6-quickcontrols2 qt6-svg qt6-webengine qt6-webchannel qt6-webview qt6-websockets qt6-x11extras SARibbon
```

## 子模块初始化

在项目根目录下：

```bash
git submodule init
git submodule update
```

然后正常进行CMake构建即可：

```bash
mkdir build
cd build
cmake ..
make
```

## 问题

在使用git子模块初始化SARibbon后，构建过程中出现了以下错误：

```
CMake Error at CMakeLists.txt:121 (get_target_property):
  The LOCATION property may not be read from target "SARibbonBar". Use the
  target name directly with add_custom_command, or use the generator
  expression $<TARGET_FILE>, as appropriate.
```

```
-- SARibbon lib SARibbonBar_LIB_FILE-NOTFOUND
-- Could NOT find QWindowKit (missing: QWindowKit_DIR)
-- QWK not found, install not performed
-- Flags:   -- -- -g -- -O3 -DNDEBUG
-- Configuring incomplete, errors occurred!
```

## 修改内容

### 1. 修改SARibbon安装部分

将原来使用已弃用的LOCATION属性的代码：

```cmake
if (AUTO_INSTALL_SARibbon AND SARIBBON_FOUND)
    get_target_property(SARibbonBar_LIB_FILE SARibbonBar LOCATION_${CMAKE_BUILD_TYPE})
    message(STATUS "SARibbon lib ${SARibbonBar_LIB_FILE}")
    install(FILES ${SARibbonBar_LIB_FILE} DESTINATION ${CMAKE_INSTALL_BINDIR})
endif()
```

修改为使用CMake生成器表达式：

```cmake
if (AUTO_INSTALL_SARibbon AND SARIBBON_FOUND)
    # 使用generator表达式代替get_target_property，避免LOCATION属性错误
    set(SARibbonBar_LIB_FILE "$<TARGET_FILE:SARibbonBar>")
    message(STATUS "SARibbon lib ${SARibbonBar_LIB_FILE}")
    install(TARGETS SARibbonBar DESTINATION ${CMAKE_INSTALL_BINDIR})
endif()
```

### 2. 修改QWindowKit安装部分

同样，将QWindowKit相关的代码：

```cmake
find_package(QWindowKit CONFIG)
if (QWindowKit_FOUND)
    get_target_property(QWK_CORE_FILE QWindowKit::Core LOCATION_${CMAKE_BUILD_TYPE})
    get_target_property(QWK_WIDGETS_FILE QWindowKit::Widgets LOCATION_${CMAKE_BUILD_TYPE})
    message(STATUS "QWK lib ${QWK_CORE_FILE}")
    install(FILES ${QWK_CORE_FILE} ${QWK_WIDGETS_FILE} DESTINATION ${CMAKE_INSTALL_BINDIR})
else()
```

修改为：

```cmake
find_package(QWindowKit CONFIG)
if (QWindowKit_FOUND)
    # 使用generator表达式代替get_target_property，避免LOCATION属性错误
    set(QWK_CORE_FILE "$<TARGET_FILE:QWindowKit::Core>")
    set(QWK_WIDGETS_FILE "$<TARGET_FILE:QWindowKit::Widgets>")
    message(STATUS "QWK lib ${QWK_CORE_FILE}")
    install(TARGETS QWindowKit::Core QWindowKit::Widgets DESTINATION ${CMAKE_INSTALL_BINDIR})
else()
```

## 修改原因

1. **LOCATION属性已弃用**：CMake官方已经弃用了LOCATION属性，因为它在生成器表达式和多配置生成器中存在问题。错误信息明确建议使用生成器表达式`$<TARGET_FILE>`代替。
  
2. **安装方式更新**：将`install(FILES ...)`改为`install(TARGETS ...)`是更现代的CMake做法，它能够正确处理所有依赖关系和平台特定的安装规则。
  
3. **生成器表达式的优势**：
  
  - 生成器表达式在构建时而非配置时求值，更适合多配置生成器（如Visual Studio）
  - 能够正确处理不同构建类型（Debug/Release）的目标文件路径
  - 自动处理平台特定的文件扩展名和前缀（如Windows的.dll，Linux的.so）