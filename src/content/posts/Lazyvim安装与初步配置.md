---
title: LazyVim安装与初步配置
published: 2025-10-28
pinned: false
description: 本篇文章主要讲解LazyVim的安装与配置，以及一些基本配置和功能。
tags: [ArchLinux, Nvim, Linux，LazyVim]
category: Usage Of Arch Linux
author: MoranisZ
draft: false
date: 2025-10-28
image: ''
---


# Lazyvim安装与初步配置

### 1. 安装 LazyVim

确保已经安装了 Neovim。然后按照以下步骤安装 LazyVim：

```bash
# 备份现有的 Neovim 配置（如果有）
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak

# 克隆 LazyVim 启动模板
git clone https://github.com/LazyVim/starter ~/.config/nvim
```

启动 Neovim，LazyVim 会自动安装插件管理器和默认插件。

---

### 2. 配置 LazyVim

LazyVim 的配置文件位于 `~/.config/nvim/lua/config/` 和 `~/.config/nvim/lua/plugins/`。需要修改以下文件：（没有则创建）

#### 2.1 基本配置 (`lua/config/options.lua`)

确保启用语法高亮和一些基本设置。编辑 `lua/config/options.lua`，添加或确认以下内容：

```lua
vim.opt.syntax = "on" -- 启用语法高亮
vim.opt.number = true -- 显示行号
vim.opt.relativenumber = true -- 相对行号
vim.opt.tabstop = 2 -- Tab 宽度
vim.opt.shiftwidth = 2 -- 缩进宽度
vim.opt.expandtab = true -- Tab 转空格
vim.opt.smartindent = true -- 智能缩进
vim.opt.termguicolors = true -- 启用真彩色（好看主题需要）
```

#### 2.2 代码提示和检查（LSP 配置）

通过 `nvim-lspconfig` 和 `mason.nvim` 提供代码提示和检查功能。需要安装语言服务器并配置插件。

编辑 `lua/plugins/lsp.lua`，添加以下内容（或在默认配置基础上扩展）：

```lua
return {
  {
    "neovim/nvim-lspconfig",
    config = function()
      local lspconfig = require("lspconfig")
      -- 示例：配置 Python 和 JavaScript 的 LSP
      lspconfig.pyright.setup {} -- Python
      lspconfig.tsserver.setup {} -- JavaScript/TypeScript
      lspconfig.lua_ls.setup {} -- Lua
    end,
  },
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "pyright", -- Python LSP
        "tsserver", -- JavaScript/TypeScript LSP
        "lua_ls", -- Lua LSP
        -- 根据需要添加其他语言的 LSP
      },
    },
  },
  {
    "hrsh7th/nvim-cmp",
    dependencies = {
      "hrsh7th/cmp-nvim-lsp",
      "hrsh7th/cmp-buffer",
      "hrsh7th/cmp-path",
      "L3MON4D3/LuaSnip",
    },
    config = function()
      local cmp = require("cmp")
      cmp.setup({
        snippet = {
          expand = function(args)
            require("luasnip").lsp_expand(args.body)
          end,
        },
        mapping = cmp.mapping.preset.insert({
          ["<C-b>"] = cmp.mapping.scroll_docs(-4),
          ["<C-f>"] = cmp.mapping.scroll_docs(4),
          ["<C-Space>"] = cmp.mapping.complete(),
          ["<C-e>"] = cmp.mapping.abort(),
          ["<CR>"] = cmp.mapping.confirm({ select = true }),
        }),
        sources = cmp.config.sources({
          { name = "nvim_lsp" },
          { name = "luasnip" },
          { name = "buffer" },
          { name = "path" },
        }),
      })
    end,
  },
}
```

启动 Neovim，Mason 会自动安装配置的语言服务器。代码提示通过 `nvim-cmp` 实现，支持自动补全、函数签名等。

#### 2.3 语法高亮

编辑 `lua/plugins/treesitter.lua`，确保安装所需的语言解析器：

```lua
return {
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function()
      require("nvim-treesitter.configs").setup({
        ensure_installed = {
          "python",
          "javascript",
          "typescript",
          "lua",
          "html",
          "css",
          "json",
          "markdown",
          -- 根据需要添加其他语言
        },
        highlight = { enable = true }, -- 启用语法高亮
        indent = { enable = true }, -- 启用自动缩进
      })
    end,
  },
}
```

运行 `:TSUpdate` 确保 Treesitter 解析器是最新的。

#### 2.4 好看的主题

LazyVim 默认提供多种主题，可以选择一个好看的主题。

```lua
return {
  {
    "catppuccin/nvim",
    name = "catppuccin",
    priority = 1000,
    config = function()
      vim.cmd([[colorscheme catppuccin]])
    end,
  },
  -- 可选：其他主题
  -- { "folke/tokyonight.nvim", config = function() vim.cmd([[colorscheme to 😂kyonight]]) end },
}
```

推荐主题：

- **Catppuccin**：柔和、现代化，支持多种风格（latte、frappe、macchiato、mocha）。
- **TokyoNight**：深色主题，科技感强。
- **Dracula**：经典暗色主题。

安装后，使用 `:colorscheme catppuccin` 切换主题。

---

### 3. 额外推荐插件

为了增强体验，可以添加以下插件到 `lua/plugins/extra.lua`：

```lua
return {
  -- 文件浏览器
  {
    "nvim-neo-tree/neo-tree.nvim",
    branch = "v3.x",
    dependencies = {
      "nvim-lua/plenary.nvim",
      "nvim-tree/nvim-web-devicons",
      "MunifTanjim/nui.nvim",
    },
    config = function()
      require("neo-tree").setup()
    end,
  },
  -- 状态栏美化
  {
    "nvim-lualine/lualine.nvim",
    config = function()
      require("lualine").setup({
        options = { theme = "catppuccin" }, -- 与主题匹配
      })
    end,
  },
}
```

---

### 4. 同步插件

保存所有配置文件后，启动 Neovim，运行以下命令：

```vim
:Lazy
```

这会打开 Lazy.nvim 插件管理器，自动安装和同步所有插件。

---

### 5. 测试与使用

- **代码提示**：在支持的语言文件中输入代码，按 `<C-Space>` 触发补全。
- **代码检查**：LSP 会自动检测错误并显示诊断信息（悬浮提示用 `K` 键）。
- **语法高亮**：Treesitter 确保代码高亮准确且美观。
- **主题**：通过 `:colorscheme` 命令切换主题，或在配置文件中固定。

---

### 6. 常见问题

- **LSP 不工作？**
  - 确保 Mason 安装了正确的语言服务器（`:Mason` 查看）。
  - 检查网络连接，部分语言服务器需要下载。
- **主题不好看？**
  - 确保终端支持真彩色（`echo $TERM` 应为 `xterm-256color` 或类似）。
  - 尝试其他主题，如 `tokyonight` 或 `dracula`。

---

### 7. 扩展阅读

- LazyVim 官方文档：https://www.lazyvim.org/
- Neovim LSP 配置：https://github.com/neovim/nvim-lspconfig
- Treesitter 插件：https://github.com/nvim-treesitter/nvim-treesitter
- Catppuccin 主题：https://github.com/catppuccin/nvim
