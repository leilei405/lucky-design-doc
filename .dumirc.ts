/*
 * @Author: leilei405 1601178425@qq.com
 * @Date: 2024-09-27 23:28:00
 * @LastEditors: leilei405 1601178425@qq.com
 * @LastEditTime: 2024-09-28 01:10:50
 * @FilePath: \lucky-design-doc\.dumirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lucky-design',
  },
  // 打开多语言入口
  locales: [
    { id: 'zh-CN', name: '中文简体' },
    { id: 'en-US', name: 'English' },
  ],
});
