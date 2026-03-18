---
title: WSL的基本安装与配置
published: 2026-03-18
pinned: false
description: 本篇文章主要讲解WSL的基本安装与配置方法。
tags: [Windows, WSL, Linux]
category: Usage Of WSL
author: MoranisZ
draft: false
date: 2026-03-18
image: ''
---

## WSL2 简介

WSL（Windows Subsystem for Linux）是微软开发的一个兼容层，允许在 Windows 系统上原生运行 Linux 二进制可执行文件。WSL2 是 WSL 的第二代版本，使用真实的 Linux 内核，提供了更好的性能和完整的系统调用兼容性。

## 系统要求

- Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11
- 64 位处理器
- 至少 4GB 内存（推荐 8GB 或更多）
- 启用 BIOS 中的虚拟化功能

## 检查系统版本

按 `Win + R`，输入 `winver`，查看 Windows 版本号。确保满足上述要求。

## 启用 WSL 功能

### 方法一：使用 PowerShell（推荐）

以管理员身份打开 PowerShell，执行以下命令：

```powershell
# 启用 WSL 功能
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

# 启用虚拟机平台
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

执行完成后，重启计算机。

### 方法二：使用 Windows 功能

1. 打开"控制面板" → "程序" → "启用或关闭 Windows 功能"
2. 勾选"适用于 Linux 的 Windows 子系统"
3. 勾选"虚拟机平台"
4. 点击"确定"，重启计算机

## 设置 WSL2 为默认版本

重启后，以管理员身份打开 PowerShell，执行：

```powershell
wsl --set-default-version 2
```

如果提示需要更新 WSL2 Linux 内核，请访问 [微软官方链接](https://aka.ms/wsl2kernel) 下载并安装。

## 安装 Ubuntu

### 方法一：使用命令行（推荐）

在 PowerShell 中执行：

```powershell
# 查看可用的 Linux 发行版
wsl --list --online

# 安装 Ubuntu（默认最新 LTS 版本）
wsl --install -d Ubuntu

# 或安装指定版本
wsl --install -d Ubuntu-22.04
```

### 方法二：使用 Microsoft Store

1. 打开 Microsoft Store
2. 搜索"Ubuntu"
3. 选择需要的版本（如 Ubuntu 22.04 LTS）
4. 点击"获取"或"安装"

## 首次启动配置

安装完成后，启动 Ubuntu：

1. 在开始菜单中找到并点击"Ubuntu"
2. 首次启动会进行初始化，需要等待几分钟
3. 系统会提示创建用户名和密码：
   ```
   Enter new UNIX username: your_username
   New password:
   Retype new password:
   ```

**注意**：输入密码时不会显示任何字符，这是正常的安全机制。

## 基本配置

### 更新系统

首次进入 Ubuntu 后，建议先更新系统：

```bash
sudo apt update && sudo apt upgrade -y
```

### 配置国内镜像源（可选）

为了提高下载速度，可以更换为国内镜像源（以阿里云为例）：

```bash
# 备份原有源
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup

# 编辑源文件
sudo nano /etc/apt/sources.list
```

将内容替换为：

```
deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
```

保存后执行：

```bash
sudo apt update
```

### 安装常用工具

```bash
# 安装基础开发工具
sudo apt install -y build-essential git curl wget vim

# 安装 zsh（可选）
sudo apt install -y zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## WSL 常用命令

### Windows 端命令（PowerShell）

```powershell
# 查看已安装的发行版
wsl --list --verbose
wsl -l -v

# 启动默认发行版
wsl

# 启动指定发行版
wsl -d Ubuntu

# 关闭所有 WSL 实例
wsl --shutdown

# 关闭指定发行版
wsl --terminate Ubuntu

# 设置默认发行版
wsl --set-default Ubuntu

# 将发行版转换为 WSL2
wsl --set-version Ubuntu 2

# 卸载发行版
wsl --unregister Ubuntu

# 导出发行版
wsl --export Ubuntu D:\backup\ubuntu.tar

# 导入发行版
wsl --import Ubuntu D:\WSL\Ubuntu D:\backup\ubuntu.tar
```

### Linux 端操作

```bash
# 访问 Windows 文件系统
cd /mnt/c/Users/YourUsername

# 在 Windows 资源管理器中打开当前目录
explorer.exe .

# 在 WSL 中运行 Windows 程序
notepad.exe test.txt
code .
```

## 文件系统互访

### WSL 访问 Windows 文件

Windows 的各个盘符挂载在 `/mnt/` 目录下：

```bash
# C 盘
cd /mnt/c/

# D 盘
cd /mnt/d/
```

### Windows 访问 WSL 文件

在 Windows 资源管理器地址栏输入：

```
\\wsl$\Ubuntu\home\your_username
```

或者直接在 WSL 中执行 `explorer.exe .` 打开当前目录。

## 高级配置

### 配置 .wslconfig（全局配置）

在 Windows 用户目录下创建 `.wslconfig` 文件（`C:\Users\YourUsername\.wslconfig`）：

```ini
[wsl2]
# 限制内存使用
memory=4GB

# 限制处理器核心数
processors=2

# 交换空间大小
swap=2GB

# 关闭页面文件
pageReporting=false

# 设置虚拟硬盘大小限制
localhostForwarding=true
```

### 配置 wsl.conf（单个发行版配置）

在 WSL 中编辑 `/etc/wsl.conf`：

```bash
sudo nano /etc/wsl.conf
```

添加以下内容：

```ini
[automount]
# 自动挂载 Windows 驱动器
enabled = true
root = /mnt/
options = "metadata,umask=22,fmask=11"

[network]
# 生成 /etc/resolv.conf
generateResolvConf = true
generateHosts = true

[interop]
# 启用 Windows 互操作
enabled = true
appendWindowsPath = true

[boot]
# 启动时执行的命令
command = service docker start
```

修改后需要重启 WSL：

```powershell
wsl --shutdown
```

## 集成开发环境

### VS Code 集成

1. 在 Windows 中安装 VS Code
2. 安装"Remote - WSL"扩展
3. 在 WSL 中打开项目：

```bash
cd /path/to/your/project
code .
```

### 配置 Git

```bash
# 配置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 配置凭据存储（与 Windows 共享）
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```

## 常见问题与解决方案

### 1. WSL2 占用内存过高

编辑 `.wslconfig` 文件限制内存使用（见上文高级配置）。

### 2. 网络连接问题

如果无法访问网络，尝试：

```bash
# 重新生成 resolv.conf
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "nameserver 8.8.4.4" >> /etc/resolv.conf'
```

### 3. 磁盘空间清理

```bash
# 清理 apt 缓存
sudo apt clean
sudo apt autoclean
sudo apt autoremove

# 在 Windows PowerShell 中压缩虚拟磁盘
wsl --shutdown
diskpart
# 在 diskpart 中执行：
select vdisk file="C:\Users\YourUsername\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_xxx\LocalState\ext4.vhdx"
compact vdisk
exit
```

### 4. 权限问题

如果遇到文件权限问题，在 `/etc/wsl.conf` 中添加：

```ini
[automount]
options = "metadata,umask=22,fmask=11"
```

### 5. 无法启动 WSL

```powershell
# 重置网络
netsh winsock reset
netsh int ip reset all

# 重启 WSL 服务
wsl --shutdown
```

## 性能优化建议

### 1. 项目文件存放位置

- **推荐**：将项目文件存放在 WSL 文件系统中（`/home/username/`），性能最佳
- **不推荐**：通过 `/mnt/c/` 访问 Windows 文件系统，性能较差

### 2. 使用 WSL2 而非 WSL1

WSL2 提供更好的性能和兼容性：

```powershell
wsl --set-version Ubuntu 2
```

### 3. 关闭不必要的服务

```bash
# 查看运行的服务
service --status-all

# 停止不需要的服务
sudo service service_name stop
```

## 实用技巧

### 1. 设置 Windows Terminal

安装 Windows Terminal 以获得更好的终端体验：

- 从 Microsoft Store 安装"Windows Terminal"
- 自动识别 WSL 发行版
- 支持多标签、分屏等功能

### 2. 快速启动 WSL

创建桌面快捷方式：

```
wsl.exe -d Ubuntu
```

### 3. 备份与迁移

```powershell
# 导出当前配置
wsl --export Ubuntu D:\backup\ubuntu-backup.tar

# 在新机器上导入
wsl --import Ubuntu D:\WSL\Ubuntu D:\backup\ubuntu-backup.tar --version 2
```

## 总结

WSL2 为 Windows 用户提供了一个完整的 Linux 开发环境，无需双系统或虚拟机。通过合理配置，可以获得接近原生 Linux 的开发体验。建议将项目文件存放在 WSL 文件系统中以获得最佳性能，并根据实际需求调整内存和处理器限制。

## 参考资源

- [微软官方 WSL 文档](https://docs.microsoft.com/zh-cn/windows/wsl/)
- [Ubuntu WSL 文档](https://ubuntu.com/wsl)
- [WSL GitHub 仓库](https://github.com/microsoft/WSL)

