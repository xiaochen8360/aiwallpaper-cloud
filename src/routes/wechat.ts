import { Router } from 'express';
import { WechatService } from '../services/wechat';

const router = Router();
const wechatService = new WechatService();

// 登录接口
router.post('/login', async (req, res) => {
  try {
    const { code } = req.body;
    const result = await wechatService.login(code);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 支付接口
router.post('/pay', async (req, res) => {
  try {
    const { orderId, amount } = req.body;
    const result = await wechatService.createPayment({ orderId, amount });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const wechatRouter = router;
