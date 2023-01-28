<template>
  <view class="pay">
    <view class="address-bar flex row-between col-center" @click="toAddress">
      <image src="@/static/apply/addr.png" class="addr"></image>
      <view class="address">
        <text>河南省郑州市金水区</text>
        <view class="flex col-center">
          <view class="info flex col-center">
            <image src="@/static/apply/user.png" class="user"></image>
            <text>王先生</text>
          </view>
          <view class="info flex col-center">
            <image src="@/static/apply/phone.png" class="phone"></image>
            <text>17802281345</text>
          </view>
        </view>
      </view>
      <image src="@/static/apply/right.png" class="right"></image>
    </view>
    <view class="card">
      <view class="title">{{ detail.goodsCategory }}</view>
      <view class="goods flex col-center">
        <image :src="detail.url || detail.cover"></image>
        <view class="info">
          <view class="name">{{ detail.product || detail.goodsCategory }}</view>
          <view class="flex col-center" style="margin: 10rpx 0">
            <text>购买数量：</text>
            <u--input
              v-model="detail.num"
              placeholder="请输入购买数量"
              type="number"
              border="bottom"
              fontSize="28rpx"
              color="#606A78"
            ></u--input>
          </view>
          <view class="flex">
            <text>运输方式：</text>
            <text style="color: #606a78">{{ detail.transportType }}</text>
          </view>
        </view>
      </view>
      <view class="price flex col-center row-right">
        <image src="@/static/home/money.png"></image>
        <text>{{ detail.price }} 元/{{ detail.unit }}</text>
      </view>
      <view class="remark">
        <view class="title flex col-center">
          <image src="@/static/apply/edit.png"></image>
          <text>订单备注</text>
        </view>
        <u--textarea v-model="remark" placeholder="请输入备注信息"></u--textarea>
      </view>
    </view>
    <view class="payment">
      <view class="flex col-center row-between">
        <view class="flex col-center">
          <image src="@/static/apply/ali.png"></image>
          <text>支付宝支付</text>
        </view>
        <view>
          <u-radio-group v-model="pay"><u-radio name="1" activeColor="#3C7DFF"></u-radio></u-radio-group>
        </view>
      </view>
      <view class="flex col-center row-between" style="margin-top: 32rpx">
        <view class="flex col-center">
          <image src="@/static/apply/wechat.png"></image>
          <text>微信支付</text>
        </view>
        <view>
          <u-radio-group v-model="pay"><u-radio name="2" activeColor="#3C7DFF"></u-radio></u-radio-group>
        </view>
      </view>
    </view>
    <view class="agree flex row-between col-center">
      <view class="flex col-center">
        <u-radio-group v-model="agree"> <u-radio name="1" activeColor="#3C7DFF"></u-radio></u-radio-group>
        <text>同意</text>
        <text style="color: #3c7dff">签订电子合同</text>
      </view>
      <view class="flex col-center">
        <text>合计：</text>
        <image src="@/static/apply/money.png"></image>
        <text style="color: #3c7dff; font-weight: 600; font-size: 44rpx">{{ detail.price }}</text>
      </view>
    </view>
    <view class="button">提交订单</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      remark: '',
      pay: '1',
      agree: '1',
      detail: {}
    }
  },
  onLoad(option) {
    const detail = JSON.parse(decodeURIComponent(option.detail))
    this.detail = detail
  },
  methods: {
    toAddress() {
      uni.navigateTo({
        url: '/pages/account/address'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pay {
  width: 100vw;
  height: 100vh;
  padding: 32rpx;
  box-sizing: border-box;
  background-color: #f7faff;
  .address-bar {
    padding: 32rpx;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: inset 0px -2px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    .addr,
    .right {
      width: 44rpx;
      height: 44rpx;
    }
    .address {
      margin-left: -64rpx;
      text {
        color: #2b2a35;
        font-size: 32rpx;
        font-weight: 500;
      }
      .info {
        margin-top: 16rpx;
        margin-right: 32rpx;
        image {
          width: 24rpx;
          height: 24rpx;
          margin-right: 8rpx;
        }
        text {
          color: #606a78;
          font-size: 24rpx;
          font-weight: 400;
        }
      }
    }
  }
  .card {
    padding: 32rpx;
    margin-top: 32rpx;
    background: #ffffff;
    border-radius: 16px;
    box-sizing: border-box;
    box-shadow: inset 0px -2px 0px 0px rgba(0, 0, 0, 0.1);
    .title {
      color: #2b2a35;
      font-size: 32rpx;
      font-weight: 500;
      margin-bottom: 32rpx;
    }
    .goods {
      image {
        width: 156rpx;
        height: 156rpx;
        margin-right: 24rpx;
      }
      .info {
        .name {
          color: #2b2a35;
          font-size: 32rpx;
          font-weight: 500;
        }
        text {
          color: #b1b6bb;
          font-size: 28rpx;
        }
      }
    }
    .price {
      margin-top: 20rpx;
      padding-bottom: 32rpx;
      border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
      image {
        width: 24rpx;
        height: 24rpx;
        margin-right: 8rpx;
      }
      text {
        color: #3c7dff;
        font-size: 36rpx;
        font-weight: 600;
      }
    }
    .remark {
      padding: 32rpx 0;
      .title {
        margin-bottom: 16rpx;
        image {
          width: 40rpx;
          height: 40rpx;
          margin-right: 8rpx;
        }
        text {
          font-size: 28rpx;
        }
      }
    }
  }
  .payment {
    width: 100%;
    padding: 32rpx;
    margin-top: 32rpx;
    margin-bottom: 98rpx;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: inset 0px -2px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    image {
      width: 44rpx;
      height: 44rpx;
      margin-right: 16rpx;
    }
    text {
      color: #606a78;
      font-size: 28rpx;
    }
  }
  .agree {
    image {
      width: 24rpx;
      height: 24rpx;
    }
    text {
      color: #333333;
      font-size: 28rpx;
    }
  }
  .button {
    width: 100%;
    color: #fff;
    height: 100rpx;
    margin-top: 32rpx;
    text-align: center;
    line-height: 100rpx;
    border-radius: 50rpx;
    background-color: #3c7dff;
  }
}
</style>
