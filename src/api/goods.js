import Request from '../networking/request.js'

// 接口列表
export class GoodsApi {
  // 商品信息列表
  goods = async (params) => {
    const request = new Request({
      url: '/dzsc/v1/GoodsListInquiry',
      method: 'post',
      isLoading: true,
      isMessage: true,
      isError: true,
      params: params
    })
    return await request.start()
  }

  // 求购信息新增
  goodsAddition = async (params) => {
    const request = new Request({
      url: '/dzsc/v1/DemandGoodsAddition',
      method: 'post',
      isLoading: true,
      isMessage: true,
      isError: true,
      params: params
    })
    return await request.start()
  }

  // 求购信息列表查询
  demandGoods = async (params) => {
    const request = new Request({
      url: '/dzsc/v1/DemandGoodsListInquiry',
      method: 'post',
      isLoading: true,
      isMessage: true,
      isError: true,
      params: params
    })
    return await request.start()
  }
}
export default new GoodsApi()
