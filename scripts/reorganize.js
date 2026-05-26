/**
 * 构建后脚本：将扁平 HTML 文件重组为嵌套目录结构
 * 将 about.html -> about/index.html
 */
import { promises as fs } from 'fs'
import { join, dirname } from 'path'

const distDir = 'dist'

// 需要重组的路由
const routes = [
  'about',
  'products',
  'services',
  'contact',
  'jobs',
  'jobs/employers',
  'jobs/employees',
]

async function reorganizeHtmlFiles() {
  for (const route of routes) {
    const htmlFile = join(distDir, `${route}.html`)
    const indexFile = join(distDir, route, 'index.html')

    try {
      // 检查 HTML 文件是否存在
      await fs.access(htmlFile)

      // 读取 HTML 内容
      const html = await fs.readFile(htmlFile, 'utf-8')

      // 确保目录存在
      await fs.mkdir(dirname(indexFile), { recursive: true })

      // 写入 index.html
      await fs.writeFile(indexFile, html)

      // 删除原始文件
      await fs.unlink(htmlFile)

      console.log(`✓ ${route}.html -> ${route}/index.html`)
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.log(`⚠ ${route}.html not found, skipping`)
      } else {
        console.error(`✗ Error processing ${route}:`, err.message)
      }
    }
  }
  console.log('\n✅ Directory reorganization complete!')
}

reorganizeHtmlFiles()
