---
title: WSL的特性以及一些使用技巧
published: 2025-10-13
pinned: false
description: 本篇文章主要讲解WSL的特性以及一些使用技巧。
tags: [Windows, WSL, Linux]
category: Usage Of WSL
author: MoranisZ
draft: false
date: 2025-10-13
image: ''
---

# 前情提要
最近在使用MinerU，发现MinerU使用的vLLM加速不支持Windows，而且我的ArchLinux的机器没有显卡，所以想到了WSL。用了一下感觉还不错，写一篇文章记录一下。
## 1.WSL的特性（仅在我使用中的感受）
###  1. 跨系统文件操作
在 WSL 中，如果你修改了通过挂载的 Windows 文件系统（如 `/mnt/c/Users/Moranis/Desktop/`），这些修改也会反映到 Windows 系统中。原因如下：

#### 工作原理
- WSL 通过挂载机制将 Windows 文件系统（通常位于 `/mnt/c`）映射到 Linux 子系统中。`/mnt/c/Users/Moranis/Desktop/` 实际上是 Windows 桌面目录的 Linux 表示。
- WSL 使用的是同一份底层文件系统，因此对挂载目录的任何修改（创建、编辑、删除文件等）都会直接同步到 Windows 的对应位置。

#### 验证与注意事项

1. **建议的最佳实践**：
   - **使用 WSL 原生目录**：为避免性能问题或兼容性问题，建议将挂载项目复制或移动到 WSL 的 Linux 文件系统（如 `~/projects/MinerU`），而不是挂载的 Windows 目录。
   - **检查文件所有权**：在 WSL 中，挂载的 Windows 文件默认由 root 拥有，可能需要调整权限：
     ```
     sudo chown -R $USER:$USER ~/projects/MinerU
     ```

2. **例外情况**：
   - 如果你使用了 WSL 2（默认从 Windows 10 2004 开始），文件系统是基于虚拟磁盘（ext4），挂载的 Windows 文件系统仍是 NTFS，修改仍会同步。
   - 如果项目包含符号链接或特殊文件，跨系统操作可能导致问题，建议保持在单一文件系统内。

### 2. 启动默认挂载
在Windows某目录启动wsl，如果不指定启动目录的话，可能会将当前的运行目录作为启动目录，还需要额外的跳转。  
所以在启动时推荐使用指定启动目录的启动方式。

```cmd
wsl ~ -d <发行版> -u <user> 
```

### GPU支持

WSL 2 支持使用 Windows 主机的显卡，主要适用于 AI 和图形处理。支持情况如下：

NVIDIA GPU：通过安装 NVIDIA WSL 专用驱动（版本 >= 535.98 或 535.104，Windows 10 21H2+ 或 Windows 11），可在 WSL 中运行 CUDA 应用，如 PyTorch。无需在 WSL 内安装驱动。  
AMD GPU：部分支持，通过 ROCm 平台（需 WDDM 2.9+ 驱动），适合 Llama 和 Stable Diffusion，但不如 NVIDIA 成熟。  
Intel GPU：支持 oneAPI 和 DirectML，安装 Intel 驱动后可通过 intel-opencl-icd 配置。  
  
配置步骤：  
  
确保 WSL 2 启用（wsl --set-default-version 2）。  
安装厂商驱动并验证（例如 nvidia-smi）。  
安装支持库，如 pip install torch --index-url https://download.pytorch.org/whl/cu121。  
  
注意：WSL 使用 GPU-PV 技术，性能接近原生但有轻微开销。  

## 2.一些使用技巧

### WSL 如何同步主机的网络代理？
WSL 2 默认使用 NAT 网络，不自动同步 Windows 代理。同步方法：

#### 自动同步（Windows 11 22H2+）：

编辑 C:\Users\你的用户名\.wslconfig，添加：
```text
[wsl2]
networkingMode=mirrored
```
  
重启 WSL（wsl --shutdown）。  
  
#### 手动配置：  

获取主机 IP：
```bash
cat /etc/resolv.conf | grep nameserver | awk '{print $2}'
```
设置环境变量（临时）：  

```bash
textexport http_proxy=http://<主机IP>:<端口>
export https_proxy=http://<主机IP>:<端口>
```

#### 永久设置：
编辑 ~/.bashrc 添加上述命令，
```bash
source ~/.bashrc
```
#### 针对工具配置：

apt：创建 /etc/apt/apt.conf.d/proxy.conf：
```bash
textAcquire::http::Proxy "http://<主机IP>:<端口>";
```

git：
```bash
git config --global http.proxy http://<主机IP>:<端口>。
```

> 注意：确保代理允许 LAN 连接，测试用 curl google.com。

### %USERPROFILE%.wslconfig 在哪？

位置：C:\Users\你的用户名\.wslconfig（例如 C:\Users\Moranis\.wslconfig）。
操作：

在文件资源管理器输入 %USERPROFILE% 进入用户目录。
创建 .wslconfig 文件，添加配置（如内存限制）。
保存后 wsl --shutdown 应用。

### WSL 默认有内存、线程等限制吗？
WSL 2 默认动态分配资源，但有隐性限制：

内存：占用主机 50%-80% 可用内存，无硬性上限，但可能受竞争影响。
CPU 核心：默认使用所有核心，但分配受主机负载限制。
磁盘：虚拟硬盘初始 1GB，最大 256GB 或主机 80% 空间。

#### 自定义：

编辑 .wslconfig：
```text
[wsl2]
memory=8GB
processors=4
swap=2GB
```
重启 WSL 应用。

验证：free -h（内存）、nproc（核心）。
### WSL 在某个端口启动服务，主机可以访问吗？
可以，通过端口转发实现：

启用 localhostForwarding：

在 .wslconfig 添加：
```text
[wsl2]
localhostForwarding=true
```

启动服务：uv run mineru-gradio --server-name 0.0.0.0 --server-port 7860。
主机访问：http://localhost:7860。


手动转发：

查找 WSL IP：ip addr show eth0 | grep inet。
转发端口：netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=8000 connectaddress=172.XX.XX.XX connectport=8000。
访问：http://localhost:8000。


注意：确保防火墙允许端口，测试用 curl http://localhost:7860。