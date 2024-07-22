import { Typography } from '@/components/Typography'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="container z-10 flex flex-col items-center justify-center"
        style={{ display: 'flex' }}
      >
        <Typography as="h1">
          <Typography as="span" className="text-accent-yellow">
            christian
          </Typography>
          <Typography as="span" className="text-accent-blue">
            soler
          </Typography>
        </Typography>
      </div>
      <Link
        className="z-10 text-accent-pink"
        href="https://github.com/chrsolr/"
      >
        <Typography as="h3">github</Typography>
      </Link>

      <div
        className="z-0 select-none border-r-white text-accent-purple opacity-5"
        style={{
          display: 'flex',
          position: 'absolute',
          overflow: 'hidden',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <pre>
          <code>
            {`
-- Nvim Tree
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

-- Set leader to <space>
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

-- Install Package Manager
-- ':help lazy.nvim.text' for more information
--
local lazypath = vim.fn.stdpath 'data' .. '/lazy/lazy.nvim'
if not vim.loop.fs_stat(lazypath) then
  local lazyrepo = 'https://github.com/folke/lazy.nvim.git'
  vim.fn.system { 'git', 'clone', '--filter=blob:none', '--branch=stable', lazyrepo, lazypath }
end ---@diagnostic disable-next-line: undefined-field
vim.opt.rtp:prepend(lazypath)

-- [[ Highlight on yank ]]
-- See ':help vim.highlight.on_yank()'
--
vim.api.nvim_create_autocmd('TextYankPost', {
  desc = 'Highlight on yank',
  group = vim.api.nvim_create_augroup('TextkHighlight', { clear = true }),
  callback = function()
    vim.highlight.on_yank()
  end,
  pattern = '*',
})

vim.api.nvim_create_autocmd({ 'BufWinLeave' }, {
  pattern = { '*.*' },
  desc = 'save view (folds), when closing file',
  command = 'mkview',
})
vim.api.nvim_create_autocmd({ 'BufWinEnter' }, {
  pattern = { '*.*' },
  desc = 'load view (folds), when opening file',
  command = 'silent! loadview',
})

-- Map the command to a key combination
vim.api.nvim_set_keymap('n', '<Leader>bc', ':BufCurOnly<CR>', { noremap = true, silent = true })

-- Install and config plugins
--
require('lazy').setup {
  { import = 'custom.plugins' },
}

-- Custom options
--
require 'custom.options'

-- Custom keymaps
--
require 'custom.keymaps'

-- Custom Snippets
--
require 'custom.snippets'

-- Setup neovim lua configuration
--
require('neodev').setup()

-- The line beneath this is called modeline. See :help modeline
-- vim: ts=2 sts=2 sw=2 et`}
          </code>
        </pre>
        <pre>
          <code>
            {`
-- Nvim Tree
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

-- Set leader to <space>
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

-- Install Package Manager
-- ':help lazy.nvim.text' for more information
--
local lazypath = vim.fn.stdpath 'data' .. '/lazy/lazy.nvim'
if not vim.loop.fs_stat(lazypath) then
  local lazyrepo = 'https://github.com/folke/lazy.nvim.git'
  vim.fn.system { 'git', 'clone', '--filter=blob:none', '--branch=stable', lazyrepo, lazypath }
end ---@diagnostic disable-next-line: undefined-field
vim.opt.rtp:prepend(lazypath)

-- [[ Highlight on yank ]]
-- See ':help vim.highlight.on_yank()'
--
vim.api.nvim_create_autocmd('TextYankPost', {
  desc = 'Highlight on yank',
  group = vim.api.nvim_create_augroup('TextkHighlight', { clear = true }),
  callback = function()
    vim.highlight.on_yank()
  end,
  pattern = '*',
})

vim.api.nvim_create_autocmd({ 'BufWinLeave' }, {
  pattern = { '*.*' },
  desc = 'save view (folds), when closing file',
  command = 'mkview',
})
vim.api.nvim_create_autocmd({ 'BufWinEnter' }, {
  pattern = { '*.*' },
  desc = 'load view (folds), when opening file',
  command = 'silent! loadview',
})

-- Map the command to a key combination
vim.api.nvim_set_keymap('n', '<Leader>bc', ':BufCurOnly<CR>', { noremap = true, silent = true })

-- Install and config plugins
--
require('lazy').setup {
  { import = 'custom.plugins' },
}

-- Custom options
--
require 'custom.options'

-- Custom keymaps
--
require 'custom.keymaps'

-- Custom Snippets
--
require 'custom.snippets'

-- Setup neovim lua configuration
--
require('neodev').setup()

-- The line beneath this is called modeline. See :help modeline
-- vim: ts=2 sts=2 sw=2 et`}
          </code>
        </pre>
      </div>
    </main>
  )
}
