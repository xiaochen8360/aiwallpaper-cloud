import axios from 'axios';

export class WechatService {
  // 微信登录
  async login(code: string) {
    try {
      // 使用云调用方式获取用户信息
      const result = await axios({
        method: 'POST',
        url: 'http://api.weixin.qq.com/sns/jscode2session',
        data: {
          js_code: code,
          grant_type: 'authorization_code'
        },
        headers: {
          'content-type': 'application/json',
          // 云托管环境会自动注入 X-WX-SERVICE 等头部
          'X-WX-SERVICE': 'true'
        }
      });
      
      return result.data;
    } catch (error) {
      console.error('登录失败:', error.response?.data || error.message);
      throw new Error('登录失败：' + (error.response?.data?.errmsg || error.message));
    }
  }

  // 创建支付订单
  async createPayment({ orderId, amount }: { orderId: string; amount: number }) {
    try {
      // 使用云调用方式创建支付订单
      const result = await axios({
        method: 'POST',
        url: 'http://api.weixin.qq.com/pay/unifiedorder',
        data: {
          out_trade_no: orderId,
          total_fee: amount,
          body: 'AI壁纸生成服务',
          trade_type: 'JSAPI'
        },
        headers: {
          'content-type': 'application/json',
          'X-WX-SERVICE': 'true'
        }
      });

      return result.data;
    } catch (error) {
      console.error('创建支付订单失败:', error.response?.data || error.message);
      throw new Error('创建支付订单失败：' + (error.response?.data?.errmsg || error.message));
    }
  }
}
