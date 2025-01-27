# AI Wallpaper WeChat Cloud Server

这是 AI Wallpaper 项目的微信云托管后端服务，负责处理微信相关的功能（登录、支付等）。

## 功能特性

- 微信登录
- 微信支付
- 云调用集成

## 技术栈

- Node.js
- Express
- TypeScript
- 微信云托管

## 开发环境设置

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 部署

项目使用 Dockerfile 进行容器化部署，可直接部署到微信云托管：

1. 构建镜像：
```bash
docker build -t aiwallpaper-cloud .
```

2. 运行容器：
```bash
docker run -p 3000:3000 aiwallpaper-cloud
```

## API 文档

### 登录接口
- 路径：`/api/wechat/login`
- 方法：POST
- 参数：
  ```json
  {
    "code": "微信登录code"
  }
  ```

### 支付接口
- 路径：`/api/wechat/pay`
- 方法：POST
- 参数：
  ```json
  {
    "orderId": "订单ID",
    "amount": 支付金额
  }
  ```

## 注意事项

1. 确保已在微信云托管控制台开启了云调用功能
2. 部署时需要配置相应的环境变量
3. 本地开发时需要配置 `.env` 文件
