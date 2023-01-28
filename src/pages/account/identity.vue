<template>
  <view class="identity">
    <view class="title">请选择您的身份</view>
    <view class="block flex row-between col-center" @click="toPersonPage">
      <view class="flex col-center">
        <image src="@/static/account/personage.png" class="icon"></image>
        <view>
          <text class="select">个人</text>
          <text>实名认证，一键签约，轻松购买</text>
        </view>
      </view>
      <image src="@/static/account/right.png" class="right"></image>
    </view>
    <view class="block flex row-between col-center" @click="toBuyerPage">
      <view class="flex col-center">
        <image src="@/static/account/buyer.png" class="icon"></image>
        <view>
          <text class="select">采购商</text>
          <text>一键签约，电子合同合法合规</text>
        </view>
      </view>
      <image src="@/static/account/right.png" class="right"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad() {},
  methods: {
    toPersonPage() {
      uni.navigateTo({
        url: '/pages/account/personage'
      })
    },
    toBuyerPage() {
      uni.navigateTo({
        url: '/pages/account/buyer'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.identity {
  width: 100vw;
  height: 100vh;
  padding: 32rpx;
  box-sizing: border-box;
  background-color: #f7faff;
  .title {
    color: #1d2129;
    font-size: 40rpx;
    font-weight: 600;
    margin-bottom: 32rpx;
  }
  .block {
    padding: 32rpx;
    border-radius: 20px;
    margin-bottom: 24rpx;
    background-color: #fff;
    border: 2rpx solid #ededed;
    text {
      color: #606a78;
      display: block;
      font-size: 24rpx;
      &.select {
        color: #1a2234;
        font-size: 28rpx;
        font-weight: 500;
        margin-bottom: 12rpx;
      }
    }
    .icon {
      width: 88rpx;
      height: 88rpx;
      margin-right: 20rpx;
    }
    .right {
      width: 40rpx;
      height: 40rpx;
    }
  }
}
</style>
