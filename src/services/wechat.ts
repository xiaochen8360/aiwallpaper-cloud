export class WechatService {
  // 微信登录
  async login(code: string) {
    try {
      // 使用云调用方式获取用户信息
      const response = await fetch('http://api.weixin.qq.com/sns/jscode2session', {
        method: 'POST',
        body: JSON.stringify({ code })
      });
      return await response.json();
    } catch (error) {
      throw new Error('登录失败：' + error.message);
    }
  }

  // 创建支付订单
  async createPayment({ orderId, amount }: { orderId: string; amount: number }) {
    try {
      // 使用云调用方式创建支付订单
      const response = await fetch('http://api.weixin.qq.com/pay/unifiedorder', {
        method: 'POST',
        body: JSON.stringify({ 
          out_trade_no: orderId,
          total_fee: amount
        })
      });
      return await response.json();
    } catch (error) {
      throw new Error('创建支付订单失败：' + error.message);
    }
  }
}
