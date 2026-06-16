# 某某课题组网站模板

这是一个可直接部署到 GitHub Pages 的纯静态学术团队网站。它参考了 `konglei.net` 的信息组织方式：双语导航、课题组首屏、数据概览、研究方向、代表成果、平台资源和联系方式；但没有复制对方的 CSS、文案、图片、数据或页面源码。

## 需要替换的地方

全局搜索下面这些占位内容并替换：

- `某某课题组`：替换为你们课题组中文名称。
- `Your Lab`：替换为英文名称。
- `某某大学 某某学院`、`School, University`：替换为单位。
- `姓名 教授/研究员`、`Prof. Name`：替换为负责人姓名和职称。
- `lab@example.edu.cn`、`pi@example.edu.cn`：替换为邮箱。
- 首页四个数字 `3 / 12 / 8 / 2`：替换为你们真实的研究方向、成员、论文、平台数量。
- `论文题目或工具名称`、`平台名称`、`成员姓名`：替换为真实成果、平台和成员信息。

## 文件说明

- `index.html`：首页，改课题组介绍、统计数字、研究方向、代表成果、平台资源。
- `research.html`：研究方向详情页。
- `people.html`：团队成员页。
- `publications.html`：论文、软件、数据库、专利等成果页。
- `assets/css/site.css`：视觉样式。颜色在 `:root` 里改。
- `assets/js/site.js`：中英文切换和移动端导航。
- `robots.txt`、`sitemap.xml`：搜索引擎收录相关文件。

## GitHub Pages 地址

```text
https://123yxf.github.io/group-academic-site/
```

## 让别人能搜索到

GitHub Pages 生成的是可访问网址，不保证立刻被搜索引擎收录。建议上线后做这些事：

- 用 Google Search Console 或 Bing Webmaster Tools 提交 `sitemap.xml`。
- 从学院官网、导师主页、GitHub 组织页或论文项目页链接到该网站。
- 页面标题、描述和正文中写清楚课题组中文名、英文名、学校、学院和研究关键词。

## 自定义域名

如果你们有自己的域名，例如 `lab.example.edu.cn`：

1. 在仓库根目录新建 `CNAME` 文件，内容只写域名。
2. 在域名 DNS 服务商处添加 CNAME 记录，指向 `123yxf.github.io`。
3. 回到 GitHub Pages 设置里填写 custom domain，并开启 HTTPS。
