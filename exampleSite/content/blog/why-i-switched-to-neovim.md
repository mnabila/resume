+++
draft = false
date = '2024-07-20'
title = 'Why I Switched to Neovim'
type = 'blog'
description = 'After years of VS Code, I made the switch to Neovim. Here is what convinced me and what I learned along the way.'
tags = ['Tooling', 'Neovim']
+++

I spent three years in VS Code before curiosity pulled me toward Neovim. The learning curve was steep, but the payoff was worth it.

## What convinced me

- **Speed** — Neovim starts in milliseconds, even with 40+ plugins
- **Composability** — Vim motions let you express edits as a language (`ciw`, `da{`, `gqap`)
- **Lua configuration** — First-class Lua support makes configuration feel like real programming

## My setup

I use [lazy.nvim](https://github.com/folke/lazy.nvim) for plugin management and keep my config modular:

```
~/.config/nvim/
├── init.lua
├── lua/
│   ├── config/
│   │   ├── keymaps.lua
│   │   ├── options.lua
│   │   └── autocmds.lua
│   └── plugins/
│       ├── lsp.lua
│       ├── treesitter.lua
│       └── telescope.lua
```

## Key plugins

| Plugin | Purpose |
|--------|---------|
| nvim-lspconfig | Language server integration |
| telescope.nvim | Fuzzy finder for everything |
| nvim-treesitter | Syntax highlighting and text objects |
| oil.nvim | File explorer as a buffer |

The initial investment is significant, but once your muscle memory develops, the editing speed is unmatched.
