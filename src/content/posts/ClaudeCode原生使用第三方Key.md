---
title: ClaudeCode使用西风API
published: 2025-12-05
pinned: false
description: 本篇文章主要讲解如何使用原生ClaudeCode配合第三方API。
tags: [NodeJS, CLI, Linux，Claude]
category: Usage Of AI
author: MoranisZ
draft: false
date: 2025-12-05
image: ''
---

# 摘要 
ClaudeCode作为CLI的工具，不仅可以写代码，还能执行命令做很多其他的事情。但是官方API不仅贵还锁国区。所以优质的第三方API是很多人的选择。本文介绍如何使用原生ClaudeCode+CCSwitch跳过A社登陆使用第三方API。
> 我的实验环境是ArchLinux,其他操作系统暂未尝试，如有错误请指正。
## 环境准备
Nodejs
代理：
-  1. 设置 HTTP/HTTPS 流量走代理
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890

- 2. 【关键】防止代理拦截本地回环
export no_proxy="localhost,127.0.0.1,::1"

Key：[OpenClaudeCode](www.openclaudecode.cn)

## 安装ClaudeCode
安装命令行工具 (可能需要 sudo，取决于你的 npm 配置)
```bash
npm install -g @anthropic-ai/claude-code
```
## 安装CCSwitch
安装命令行工具 (可能需要 sudo，取决于你的 npm 配置)
```bash
npm install -g @songhe/cc-switch
```

## 配置CCSwitch
它的核心作用是：**“欺骗”官方的 Claude CLI，让它接受你的第三方 Key 和中转地址。**

它通过修改 Claude Code 的隐藏配置文件 (`~/.claude/settings.json`)，强行把官方 API 地址替换成你的中转商地址。

以下是安装和使用步骤（经过实验Arch Linux 可直接运行）：

### 2。 添加你的第三方 Key 配置

安装完成后，使用 `ccs` 命令来添加你的中转商信息。

语法格式：
`ccs add <自定义名字> <中转API地址> <你的Key>`

**示例**（假设你的中转商地址是 `https://api.oneapi.com`）：

```bash
ccs add my-proxy https://api.oneapi.com sk-verify-xxxxxxxxx
```

> **注意**：
>
> 1.  API 地址通常不需要带 `/v1` 后缀（具体看你中转商说明，Claude Code 官方通常拼接路径的方式不同，如果跑不通可以尝试去掉或加上 `/v1`）。
> 2.  名字 `my-proxy` 可以随便取。

### 3 切换到该配置

添加后，你需要“激活”它，这样 `claude` 命令才会使用这个配置。

```bash
ccs switch my-proxy
```

### 4. 验证是否生效

现在，你可以再次尝试运行官方的 `claude` 命令了：

```bash
claude
```

**此时发生的魔法是**：

  * `ccswitch` 已经修改了 `~/.claude/settings.json` 文件。
  * 它写入了 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_API_KEY` 字段。
  * 官方 `claude` 工具启动时，读取到了这些配置，于是**不再连接官方服务器，而是连接你的中转商**。

### 常用命令速查表

| 命令 | 作用 |
| :--- | :--- |
| `ccs list` | 列出你保存的所有 Key/配置 |
| `ccs add [name] [url] [key]` | 添加一个新的中转商配置 |
| `ccs switch [name]` | 切换到指定配置 (让 claude 立即生效) |
| `ccs current` | 查看当前正在用哪个配置 |
| `ccs remove [name]` | 删除某个配置 |

### 关键提示

如果运行后 `claude` 依然报错（比如 404 或连接错误），通常是 **API 地址格式** 不对。

  * 有些中转商需要地址结尾加 `/v1`。
  * 有些需要加 `/api/anthropic`。
  * 你可以用 `ccs edit my-proxy` 来修改地址重新尝试。