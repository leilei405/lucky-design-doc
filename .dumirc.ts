/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-09-27 23:28:00
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-09-28 15:07:38
 * @FilePath: \lucky-design-doc\.dumirc.ts
 */
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lucky-design',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Button' }, // components会默认自动对应到src文件夹
    ],
    sidebar: {},
  },
  styles: [
    `.dumi-default-header-left {
       width: 220px !important;
    }`,
  ],
  resolve: {
    entryFile: './src/index.ts',
  },
  history: {
    type: 'hash',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@docs': path.resolve(__dirname, 'docs'),
  },
});
