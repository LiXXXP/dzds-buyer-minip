<template>
  <view class="detail">
    <gwin-swiper></gwin-swiper>
    <view class="card">
      <view class="title flex row-between">
        <view class="flex col-center">
          <image src="@/static/supplier/supplier01.png"></image>
          <view class="dec">
            <text class="name">{{ detail.name }}</text>
            <view class="flex col-center">
              <image src="@/static/home/supply.png"></image>
              <text>材料供应</text>
            </view>
            <view class="flex col-center">
              <image src="@/static/home/addr.png"></image>
              <text>{{ detail.address }}</text>
            </view>
          </view>
        </view>
        <view @click="isCollect = !isCollect" class="collect">
          <image v-if="!isCollect" src="@/static/home/collect.png"></image>
          <image v-else src="@/static/home/collect-select.png"></image>
        </view>
      </view>
      <view class="info">
        <view class="flex row-between">
          <text>主营材料</text>
          <text>{{ detail.materials }}</text>
        </view>
        <view class="flex row-between">
          <text>优势石材</text>
          <text>{{ detail.kind }}</text>
        </view>
      </view>
      <view class="explain">
        <view>企业介绍</view>
        <view>
          主营意大利木纹，威尼斯棕石材，公司位于 河南省郑州市二七区，土地面积15万平方，15台BM
          大砂柜，8台全自动磨机，优美的选购环境，精选优 质石材，开发商一站式全方位的石材配套服务及解决 方案。
        </view>
      </view>
    </view>
    <view class="card">
      <view class="header flex row-between col-center">
        <text class="head">商品列表</text>
        <view class="flex col-center" @click="toList">
          <text>更多</text>
          <image src="@/static/apply/right.png"></image>
        </view>
      </view>
      <view class="goods" @click="toDetail">
        <image src="https://cdgwin-dev.cn-bj.ufileos.com/gwin-dzsc/detail02.png"></image>
        <view @click.stop="isGoodsCollect = !isGoodsCollect" class="collect">
          <image v-if="!isGoodsCollect" src="@/static/home/collect.png"></image>
          <image v-else src="@/static/home/collect-select.png"></image>
        </view>
      </view>
      <view class="footer flex row-between col-center">
        <text class="head">机制砂</text>
        <view class="flex col-center">
          <image src="@/static/home/money.png"></image>
          <text>83.00 元/吨</text>
        </view>
      </view>
    </view>
    <view class="button">
      <view class="dial-btn" @click="showPhone = true">隐私拨打</view>
    </view>
    <!-- 拨打 -->
    <u-overlay :show="showPhone" :z-index="999">
      <view class="overlay-warp" @tap.stop>
        <view class="phone">
          <text>17947274524</text>
        </view>
        <view class="cancel" @click="showPhone = false">取消</view>
      </view>
    </u-overlay>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isCollect: false,
      isGoodsCollect: false,
      showPhone: false,
      detail: {}
    }
  },
  onLoad(option) {
    const item = JSON.parse(decodeURIComponent(option.item))
    this.detail = item
  },
  methods: {
    // 商品列表
    toList() {
      uni.navigateTo({
        url: '/pages/goods/index'
      })
    },
    // 商品详情
    toDetail() {
      const detail = {
        id: 6,
        isCollect: false, // 收藏
        cover: require('../../static/supplier/supplier07.png'),
        goodsCategory: '机制砂', // 品名
        price: 83.0,
        unit: '吨',
        quantity: 14000,
        departureAddress: '河北省保定市',
        createAt: '2022-03-25',
        transportType: '汽运',
        sellerName: '王小姐',
        sellerMobile: '保密',
        memo: '支持前四后八轻皮  重皮  半挂24小时装车'
      }
      uni.navigateTo({
        url: '/pages/detail/index?item=' + encodeURIComponent(JSON.stringify(detail))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  padding: 32rpx;
  box-sizing: border-box;
  background-color: #f7faff;
  .card {
    width: 100%;
    padding: 32rpx;
    margin-top: 32rpx;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: inset 0px -2px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    .title {
      padding-bottom: 32rpx;
      border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
      image {
        width: 124rpx;
        height: 124rpx;
      }
      .dec {
        margin-left: 32rpx;
        .name {
          color: #2b2a35;
          font-size: 32rpx;
          font-weight: 600;
        }
        view {
          margin-top: 8rpx;
          image {
            width: 24rpx;
            height: 24rpx;
            margin-right: 8rpx;
          }
          text {
            color: #606a78;
            font-size: 24rpx;
          }
        }
      }
      .collect {
        width: 40rpx;
        height: 40rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .info {
      padding: 32rpx 0;
      border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
      text {
        color: #2b2a35;
        font-size: 28rpx;
        line-height: 64rpx;
        &:first-child {
          color: #b1b6bb;
        }
      }
    }
    .explain {
      padding: 32rpx 0;
      view {
        color: #2b2a35;
        font-size: 28rpx;
        line-height: 64rpx;
        &:first-child {
          color: #b1b6bb;
        }
      }
    }
    .header {
      .head {
        color: #2b2a35;
        font-size: 32rpx;
        font-weight: 600;
      }
      image {
        width: 44rpx;
        height: 44rpx;
      }
    }
    .goods {
      margin: 32rpx 0;
      position: relative;
      image {
        width: 100%;
        height: 300rpx;
      }
      .collect {
        width: 40rpx;
        height: 40rpx;
        position: absolute;
        top: 16rpx;
        right: 16rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
    }
    .footer {
      text {
        color: #3c7dff;
        font-size: 32rpx;
        font-weight: 600;
      }
      .head {
        color: #2b2a35;
        font-size: 32rpx;
        font-weight: 600;
      }
      image {
        width: 24rpx;
        height: 24rpx;
        margin-right: 8rpx;
      }
    }
  }
  .button {
    margin: 64rpx 0;
    .dial-btn {
      color: #fff;
      width: 100%;
      height: 100rpx;
      font-size: 32rpx;
      font-weight: 500;
      line-height: 100rpx;
      text-align: center;
      border-radius: 50rpx;
      background-color: #41c870;
    }
  }
  .overlay-warp {
    width: 100%;
    padding: 32rpx;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    .phone {
      text-align: center;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 24rpx;
      text {
        color: #3c7dff;
        display: block;
        padding: 32rpx 0;
        font-size: 36rpx;
        &:first-child {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
      }
    }
    .cancel {
      color: #3c7dff;
      padding: 30rpx;
      font-size: 36rpx;
      margin-top: 20rpx;
      text-align: center;
      border-radius: 24rpx;
      background-color: #fff;
    }
  }
}
</style>
