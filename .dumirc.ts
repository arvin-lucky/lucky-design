import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/lucky-design', // 设置站点部署路径
  publicPath: '/lucky-design/docs-dist/', // 设置资源部署路径
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'lucky-design',
  },
});
