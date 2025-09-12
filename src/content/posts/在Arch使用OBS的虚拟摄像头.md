---
title: Arch-使用OBS的虚拟摄像头
published: 2025-09-11
pinned: false
description: 本篇文章主要讲解如何使用OBS的虚拟摄像头。
tags: [ArchLinux, Wayland, OBS]
category: Usage Of Arch Linux
author: MoranisZ
draft: false
date: 2025-09-11
image: ''
---

# 在Arch使用OBS的虚拟摄像头

1. **检查 OBS Studio 版本**  
   确保你的 OBS Studio 版本支持虚拟摄像头功能。虚拟摄像头支持从 OBS Studio 26.1 开始引入。运行以下命令检查版本：
   
   ```bash
   pacman -Q obs-studio
   ```
   
   如果版本低于 26.1，建议更新到最新版本：
   
   ```bash
   sudo pacman -S obs-studio
   ```

2. **安装 v4l2loopback 模块**  
   虚拟摄像头需要 `v4l2loopback` 内核模块支持。安装 `v4l2loopback-dkms` 和相关工具：
   
   ```bash
   sudo pacman -S v4l2loopback-dkms v4l2loopback-utils
   ```
   
   确保你的系统已安装内核头文件（`linux-headers` 或对应内核的头文件，例如 `linux-lts-headers`）：
   
   ```bash
   sudo pacman -S linux-headers
   ```

3. **加载 v4l2loopback 模块**  
   安装完成后，手动加载 `v4l2loopback` 模块：
   
   ```bash
   sudo modprobe v4l2loopback
   ```
   
   你可以检查模块是否加载成功：
   
   ```bash
   lsmod | grep v4l2loopback
   ```
   
   如果需要自定义虚拟摄像头设备，可以指定参数，例如：
   
   ```bash
   sudo modprobe v4l2loopback devices=1 video_nr=2 card_label="OBS Virtual Camera" exclusive_caps=1
   ```
   
   这会创建一个名为 "OBS Virtual Camera" 的设备，位于 `/dev/video2`。

4. **检查 OBS 设置**  
   启动 OBS Studio，检查“控制”面板中是否出现“启动虚拟摄像头”按钮。如果没有，可能是以下原因：
   
   - **模块未加载**：确保 `v4l2loopback` 模块已正确加载。
   - **Flatpak 安装问题**：如果你通过 Flatpak 安装了 OBS Studio，虚拟摄像头可能不可用。建议使用 Arch 官方仓库的版本：
     
     ```bash
     sudo pacman -S obs-studio
     ```
   - **Wayland 支持**：如果使用 Wayland 桌面环境，确保安装了 `qt6-wayland`（OBS 28 及以上版本需要）：
     
     ```bash
     sudo pacman -S qt6-wayland
     ```

5. **验证虚拟摄像头**  
   启动虚拟摄像头后，检查是否出现在设备列表中：
   
   ```bash
   v4l2-ctl --list-devices
   ```
   
   你应该能看到类似 "OBS Virtual Camera" 的设备。如果设备存在但无法在其他应用（如 Zoom、Skype）中使用，可能是权限问题。确保你的用户在 `video` 组中：
   
   ```bash
   sudo usermod -aG video $USER
   ```
   
   然后重新登录或重启系统。

6. **解决常见问题**  
   
   - **“启动虚拟摄像头失败”错误**：检查日志文件（在 OBS 的“帮助”菜单中选择“日志文件”）。常见问题可能是 `v4l2loopback` 版本与内核不兼容。尝试降级到较旧的版本（例如 0.13.2）：
     
     ```bash
     sudo pacman -R v4l2loopback-dkms v4l2loopback-utils
     yay -S v4l2loopback-dkms=0.13.2-1 v4l2loopback-utils=0.13.2-1
     ```
   - **与其他设备冲突**：如果有其他设备（如 DroidCam）占用 `/dev/video0`，可以卸载冲突模块：
     
     ```bash
     sudo modprobe -r v4l2loopback
     sudo modprobe v4l2loopback
     ```

7. **重启 OBS 和系统**  
   在安装模块或更改配置后，重启 OBS Studio 或整个系统以确保所有更改生效。

参考来源：[ArchWiki](https://wiki.archlinux.org/title/Open_Broadcaster_Software)[](https://bbs.archlinux.org/viewtopic.php?id=304978)[](https://bbs.archlinux.org/viewtopic.php?id=305169)
