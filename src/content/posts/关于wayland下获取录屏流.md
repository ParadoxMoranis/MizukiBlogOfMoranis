---
title: Arch-关于wayland下获取录屏流
published: 2025-09-11
pinned: false
description: 本篇文章主要讲解如何在wayland下获取录屏流以便于使用OBS。
tags: [ArchLinux, Wayland, OBS]
category: Usage Of Arch Linux
author: MoranisZ
draft: false
date: 2025-09-11
image: ''
---
# 关于wayland下获取录屏流

## 1.安装pipewire以及相关包

```bash
sudo pacman -S pipewire pipewire-pulse pipewire-alsa qt6-wayland
```

## 2.确保PipeWire服务正在运行

```bash
systemctl --user enable --now pipewire pipewire-pluse
```

## 3.安装xdg-desktop

```bash
sudo pacman -S xdg-desktop-portal-kde # 如果是hyprland就是xdg-desktop-portal-hyprland，以此类推
```

做完这些，OBS中就可以看到`屏幕捕捉(pipewire)`
