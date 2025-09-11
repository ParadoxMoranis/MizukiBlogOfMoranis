---
title: Arch-paru和pacman用法详解
published: 2025-09-11
pinned: false
description: 本篇文章主要讲解如何在wayland下获取录屏流以便于使用OBS。
tags: [ArchLinux, Wayland, Aur ,pacman, paru]
category: Usage Of Arch Linux
author: MoranisZ
draft: false
date: 2025-09-11
image: ''
---

# pacman和paru用法详解

## 一、pacman 用法

`pacman`（Package Manager）是 Arch Linux 的核心包管理工具，用于安装、更新、删除和管理官方仓库中的软件包。它的命令通常需要以 `sudo` 运行，因为包管理涉及系统级操作。

### 1. 基本命令格式

```
sudo pacman [选项] [操作] [包名]
```

### 2. 常用操作

#### (1) 同步和更新系统

- **更新软件包数据库和所有已安装的包**：
  
  ```
  sudo pacman -Syu
  ```
  
  - `-S`：同步软件包。
  - `-y`：刷新软件包数据库。
  - `-u`：升级所有已安装的包。

- **仅更新软件包数据库**：
  
  ```
  sudo pacman -Sy
  ```

- **强制刷新数据库**（当数据库损坏或需要强制更新时）：
  
  ```
  sudo pacman -Syy
  ```

#### (2) 安装软件包

- **安装指定的软件包**：
  
  ```
  sudo pacman -S 包名
  ```
  
  示例：安装 `vim`：
  
  ```
  sudo pacman -S vim
  ```

- **安装多个软件包**：
  
  ```
  sudo pacman -S 包名1 包名2
  ```

- **安装本地包文件**：
  
  ```
  sudo pacman -U /路径/到/包文件.tar.zst
  ```

#### (3) 删除软件包

- **删除软件包但保留其配置文件**：
  
  ```
  sudo pacman -R 包名
  ```

- **删除软件包及其配置文件**：
  
  ```
  sudo pacman -Rns 包名
  ```
  
  - `-n`：删除配置文件。
  - `-s`：递归删除不再需要的依赖。

- **清理无用的依赖**（孤儿包）：
  
  ```
  sudo pacman -Rns $(pacman -Qtdq)
  ```
  
  - `-Qtdq`：列出无依赖的孤儿包。

#### (4) 查询软件包

- **搜索官方仓库中的软件包**：
  
  ```
  pacman -Ss 关键字
  ```
  
  示例：搜索包含 “firefox” 的包：
  
  ```
  pacman -Ss firefox
  ```

- **查询已安装的软件包**：
  
  ```
  pacman -Qs 关键字
  ```

- **列出所有已安装的包**：
  
  ```
  pacman -Q
  ```

- **查看某个包的详细信息**：
  
  ```
  pacman -Si 包名
  ```
  
  （本地已安装的包用 `-Qi`）

#### (5) 清理缓存

- **清理未使用的包缓存**：
  
  ```
  sudo pacman -Sc
  ```

- **清理所有缓存**（谨慎使用）：
  
  ```
  sudo pacman -Scc
  ```

#### (6) 其他实用操作

- **列出显式安装的包**（非依赖安装的包）：
  
  ```
  pacman -Qe
  ```

- **检查依赖问题**：
  
  ```
  sudo pacman -Dk
  ```

- **解决文件冲突**（强制覆盖）：
  
  ```
  sudo pacman -S --overwrite '*' 包名
  ```

### 3. 配置文件

`pacman` 的配置文件位于 `/etc/pacman.conf`，可以在这里调整仓库、镜像、并行下载等设置。例如：

- **启用并行下载**：
  编辑 `/etc/pacman.conf`，设置：
  
  ```
  ParallelDownloads = 5
  ```

- **添加第三方仓库**：
  在 `[core]`、 `[extra]` 等后添加自定义仓库。

### 4. 注意事项

- **避免部分升级**：不要只运行 `pacman -Sy` 而不升级系统（`-u`），否则可能导致依赖不一致。
- **检查镜像**：使用 `reflector` 或手动编辑 `/etc/pacman.d/mirrorlist` 选择快速的镜像。
- **错误处理**：遇到数据库锁定时，删除 `/var/lib/pacman/db.lck`（确保没有其他 pacman 进程运行）。

---

## 二、paru 用法

`paru` 是一个 AUR 助手，扩展了 `pacman` 的功能，允许用户方便地从 AUR 安装和管理社区维护的软件包。`paru` 完全兼容 `pacman` 的命令，同时增加了对 AUR 的支持。

### 1. 安装 paru

`paru` 本身需要从 AUR 安装，步骤如下：

```bash
sudo pacman -S base-devel git
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

### 2. 基本命令格式

`paru` 的命令与 `pacman` 高度一致，基本可以直接替换：

```
paru [选项] [操作] [包名]
```

### 3. 常用操作

#### (1) 更新系统和 AUR 包

- **更新官方仓库和 AUR 包**：
  
  ```
  paru -Syu
  ```
  
  这会同时检查官方仓库和 AUR 的更新。

- **仅更新 AUR 包**：
  
  ```
  paru -Sua
  ```

#### (2) 安装软件包

- **从官方仓库或 AUR 安装包**：
  
  ```
  paru -S 包名
  ```
  
  示例：安装 AUR 中的 `visual-studio-code-bin`：
  
  ```
  paru -S visual-studio-code-bin
  ```

- **安装时查看 PKGBUILD 文件**：
  
  ```
  paru -S 包名 --editmenu
  ```
  
  这允许在安装前检查或编辑 AUR 包的构建脚本。

#### (3) 删除软件包

与 `pacman` 一致：

```
paru -Rns 包名
```

#### (4) 查询软件包

- **搜索官方仓库和 AUR**：
  
  ```
  paru -Ss 关键字
  ```

- **查看 AUR 包信息**：
  
  ```
  paru -Si 包名
  ```

#### (5) 清理缓存

- **清理缓存**：
  
  ```
  paru -Sc
  ```

- **清理 AUR 构建目录**：
  
  ```
  paru -Rns $(paru -Qdtq)
  ```

#### (6) 特殊功能

- **查看 PKGBUILD 文件**：
  
  ```
  paru -Gp 包名
  ```
  
  输出指定 AUR 包的 PKGBUILD 文件。

- **跳过某些包的更新**：
  编辑 `/etc/paru.conf`，添加：
  
  ```
  Skip = 包名
  ```

- **批量操作**：
  `paru` 支持交互式界面。例如，安装多个包时会显示详细信息并允许选择。

### 4. 配置文件

`paru` 的配置文件位于 `~/.config/paru/paru.conf`，可以自定义行为，例如：

- **启用颜色输出**：
  
  ```
  Color
  ```

- **自动清理构建依赖**：
  
  ```
  RemoveMake
  ```

### 5. 注意事项

- **安全性**：AUR 包由社区维护，安装前应检查 PKGBUILD 文件，避免潜在的安全风险。
- **依赖管理**：`paru` 自动处理 AUR 包的依赖，但复杂依赖可能需要手动干预。
- **性能**：`paru` 比 `yay`（另一个 AUR 助手）更轻量，适合资源有限的系统。

---

## 三、pacman 和 paru 的对比

| 特性         | pacman                     | paru                       |
| ---------- | -------------------------- | -------------------------- |
| **支持的仓库**  | 官方仓库（core/extra/community） | 官方仓库 + AUR                 |
| **命令兼容性**  | 标准命令                       | 兼容 pacman 命令，扩展 AUR 功能     |
| **AUR 支持** | 无                          | 有，自动下载、构建、安装 AUR 包         |
| **性能**     | 快速，官方工具                    | 稍慢（因 AUR 构建），但优化良好         |
| **配置文件**   | `/etc/pacman.conf`         | `~/.config/paru/paru.conf` |
| **使用场景**   | 系统更新、官方包管理                 | AUR 包安装、混合仓库管理             |

---

## 四、实用技巧

1. **快速更新系统**：
   
   ```bash
   paru -Syu --noconfirm
   ```
   
   自动确认所有提示（谨慎使用）。

2. **查找包的所属软件**：
   
   ```bash
   pacman -Qo /路径/到/文件
   ```
   
   查看某个文件属于哪个包。

3. **优化镜像**：
   使用 `reflector` 自动选择最快的镜像：
   
   ```bash
   sudo reflector --country China --latest 10 --sort rate --save /etc/pacman.d/mirrorlist
   ```

4. **备份已安装的包列表**：
   
   ```bash
   pacman -Qe > pkglist.txt
   ```
   
   恢复时：
   
   ```bash
   sudo pacman -S - < pkglist.txt
   ```

5. **处理 AUR 构建失败**：
   
   - 检查 `PKGBUILD` 是否需要特定依赖。
   - 确保 `base-devel` Ascertain是否启用 `sudo`（需要 `sudo` 权限）。
   - 更新系统并重新尝试。

---

## 五、常见问题解决

1. **“数据库锁”错误**：
   删除锁文件：
   
   ```bash
   sudo rm /var/lib/pacman/db.lck
   ```

2. **签名验证失败**：
   初始化或更新 GPG 密钥：
   
   ```bash
   sudo pacman-key --init
   sudo pacman-key --populate archlinux
   ```

3. **AUR 包构建失败**：
   
   - 确保安装了 `base-devel`。
   - 检查网络连接（AUR 需要下载源码）。
   - 查看错误日志，安装缺失的依赖。
