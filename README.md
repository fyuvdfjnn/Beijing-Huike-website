# 北京首旅慧联科技 - 招聘网站

这是一个展示公司信息和招聘信息的静态网站。

## 部署到 Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. **访问 Vercel**
   - 打开 [https://vercel.com](https://vercel.com)
   - 使用 GitHub、GitLab 或 Bitbucket 账号登录

2. **导入项目**
   - 点击 "Add New Project" 或 "Import Project"
   - 如果项目已经在 Git 仓库中，选择对应的仓库
   - 如果项目还没有推送到 Git，需要先推送到 GitHub/GitLab/Bitbucket

3. **配置项目**
   - Framework Preset: 选择 "Other" 或 "Static Site"
   - Root Directory: 保持默认（通常是 `.`）
   - Build Command: 留空（静态网站不需要构建）
   - Output Directory: 留空或填写 `.`

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待部署完成（通常需要 1-2 分钟）

5. **访问网站**
   - 部署完成后，Vercel 会提供一个免费的域名（格式：`your-project-name.vercel.app`）
   - 你也可以在项目设置中配置自定义域名

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```
   首次部署会询问一些问题：
   - Set up and deploy? (Y/n) - 输入 `Y`
   - Which scope? - 选择你的账号
   - Link to existing project? (y/N) - 输入 `N`（首次部署）
   - What's your project's name? - 输入项目名称
   - In which directory is your code located? - 输入 `.`（当前目录）

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

### 方法三：通过 Git 推送自动部署

1. **将项目推送到 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **在 Vercel 中连接仓库**
   - 登录 Vercel
   - 点击 "Add New Project"
   - 选择你的 Git 仓库
   - 配置项目设置（参考方法一）
   - 点击 "Deploy"

3. **自动部署**
   - 之后每次推送到主分支，Vercel 会自动重新部署

## 项目结构

```
BTG-claude/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 逻辑
├── translations.js     # 多语言翻译
├── logo.png           # Logo 图片
├── douyin.mp4         # 视频文件
├── vercel.json        # Vercel 配置文件
└── README.md          # 本文件
```

## 注意事项

1. **视频文件大小**
   - `douyin.mp4` 文件如果很大（> 100MB），可能需要优化
   - Vercel 对单个文件大小有限制，建议压缩视频或使用外部 CDN

2. **自定义域名**
   - 在 Vercel 项目设置中可以添加自定义域名
   - 需要配置 DNS 记录指向 Vercel

3. **环境变量**
   - 如果有需要配置的环境变量，在 Vercel 项目设置中添加

4. **性能优化**
   - 已配置缓存策略（HTML/JS/CSS 不缓存，静态资源长期缓存）
   - 建议对图片和视频进行压缩优化

## 技术支持

如有问题，请参考 [Vercel 文档](https://vercel.com/docs)

