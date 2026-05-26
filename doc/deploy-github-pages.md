# GitHub Pages 部署指南

## 方案说明

本项目采用 **Vite SSG (Static Site Generation) 预渲染** 方案，使用 `vite-ssg` 插件在构建时为每个路由生成独立的静态 HTML 文件。

### 工作原理

1. **构建阶段**：运行 `npm run build:ssg` 时，`vite-ssg` 会遍历所有配置的路由
2. **预渲染**：为每个路由生成独立的 HTML 文件（如 `/about/index.html`）
3. **部署**：生成的静态文件部署到 GitHub Pages
4. **访问**：用户或爬虫直接访问 HTML 文件，无需 JavaScript 执行即可看到内容

## 构建命令

```bash
# 开发模式
npm run dev

# 普通构建（无预渲染）
npm run build

# SSG 预渲染构建（用于生产环境 SEO 优化）
npm run build:ssg
```

## 预渲染的页面

| 路由 | 页面文件 | 优先级 |
|-----|---------|-------|
| `/` | `dist/index.html` | 1.0 |
| `/about` | `dist/about.html` | 0.8 |
| `/products` | `dist/products.html` | 0.9 |
| `/services` | `dist/services.html` | 0.8 |
| `/contact` | `dist/contact.html` | 0.7 |
| `/jobs` | `dist/jobs.html` | 0.7 |
| `/jobs/employers` | `dist/jobs/employers.html` | 0.6 |
| `/jobs/employees` | `dist/jobs/employees.html` | 0.6 |

### 动态路由 `/jobs/:id`

`/jobs/:id` 是动态路由，需要在 `vite-ssg` 配置中提供具体的 ID 列表才能预渲染。

当前配置中未包含动态路由参数，如有需要，可在 `src/main.js` 中修改 `vite-ssg` 配置：

```javascript
// 在 ViteSSG 配置中添加
// 动态路由参数列表
knownRoutes: ['/jobs/1', '/jobs/2', '/jobs/3']
```

## 技术栈版本

| 包 | 版本 | 说明 |
|----|------|------|
| vue | ^3.5.30 | Vue 3 |
| vue-router | 4.3.0 | Vue Router 4 |
| vite | ^5.4.0 | Vite 5 |
| vite-ssg | ^0.23.0 | SSG 插件 |

## 部署步骤

### 1. 确保 GitHub Pages 设置正确

在 GitHub 仓库设置中：
1. 进入 **Settings → Pages**
2. Source 选择 **GitHub Actions**
3. 确保 Custom domain 设置为 `www.isemes.com`（如有自定义域名）

### 2. 构建项目

```bash
npm run build:ssg
```

### 3. 推送代码

```bash
git add .
git commit -m "feat: 配置 Vite SSG 预渲染"
git push origin main
```

### 4. GitHub Actions 自动部署

确保 `.github/workflows/ci.yml` 配置正确，它会自动构建并部署到 GitHub Pages。

## SEO 优化效果

### SSG 预渲染的优势

```
Googlebot 访问 /about
→ GitHub Pages 直接返回 /about.html（预渲染的静态页面）
→ Googlebot 看到完整的页面内容，包括 title、meta description 等
→ 每个页面都能被正确收录
```

### 构建产物

```
dist/
├── index.html           # 首页（预渲染）
├── about.html           # 关于我们（预渲染）
├── products.html        # 产品中心（预渲染）
├── services.html        # 服务支持（预渲染）
├── contact.html         # 联系我们（预渲染）
├── jobs.html            # 招聘广场（预渲染）
├── jobs/
│   ├── employers.html   # 企业招聘（预渲染）
│   └── employees.html   # 求职中心（预渲染）
├── assets/              # 静态资源
└── 404.html             # 404 页面
```

## 文件说明

| 文件 | 作用 |
|------|------|
| `src/main.js` | ViteSSG 入口，配置路由和预渲染选项 |
| `public/404.html` | 404 页面（SSG 后仍需要） |
| `public/sitemap.xml` | SEO sitemap |
| `public/robots.txt` | 爬虫配置文件 |
| `.github/workflows/ci.yml` | 自动构建和部署 |

## 常见问题

### Q: 构建后访问页面显示空白？

检查浏览器控制台是否有错误，可能是：
1. 资源路径问题（检查 base 配置）
2. JavaScript 错误导致白屏

### Q: 页面已预渲染但 Google 仍然不收录？

1. 确保 sitemap.xml 已提交到 Google Search Console
2. 检查 robots.txt 是否允许爬取
3. 使用 "URL 检测" 工具手动请求爬取

### Q: 如何验证预渲染是否成功？

查看 `dist` 目录，确认每个路由下都有对应的 HTML 文件。

### Q: 动态路由 `/jobs/:id` 如何预渲染？

需要在 `src/main.js` 的 ViteSSG 配置中添加 `knownRoutes` 参数，指定要预渲染的具体 ID 列表。
