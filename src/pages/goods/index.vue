<template>
  <view class="supply-list">
    <view class="search">
      <u-search
        placeholder="请输入搜索内容"
        :show-action="false"
        v-model="keyword"
        bgColor="#F7F8FA"
        borderColor="#DDDFE5"
        shape="square"
      ></u-search>
    </view>
    <view class="item flex row-between" v-for="item in goodList" :key="item.id" @click="toDetail(item)">
      <view class="goods flex">
        <image :src="item.cover"></image>
        <view class="info flex flex-column row-between">
          <text class="title">{{ item.goodsCategory }}</text>
          <view class="flex col-center">
            <view class="flex col-center">
              <image src="@/static/home/money.png"></image>
              <text class="blue breadth">{{ item.price }} 元/ {{ item.unit }}</text>
            </view>
            <view class="flex col-center">
              <image src="@/static/home/bag.png"></image>
              <text class="blue">{{ item.quantity }} {{ item.unit }}</text>
            </view>
          </view>
          <view class="flex col-center">
            <view class="flex col-center">
              <image src="@/static/home/addr.png"></image>
              <text class="breadth">{{ item.departureAddress }}</text>
            </view>
            <view class="flex col-center">
              <image src="@/static/home/time.png"></image>
              <text>{{ item.createAt }}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="icon-heart" @click.stop="onCollect(item)">
        <image v-if="!item.isCollect" src="@/static/home/collect.png"></image>
        <image v-else src="@/static/home/collect-select.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      goodList: [
        {
          id: 0,
          isCollect: false, // 收藏
          cover: require('../../static/pebble/pebble01.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 83.0,
          unit: '吨',
          quantity: 10000,
          departureAddress: '广西壮族自治区大新县',
          createAt: '2022-03-21',
          transportType: '汽运',
          sellerName: '王小姐',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        },
        {
          id: 1,
          isCollect: false, // 收藏
          cover: require('../../static/supplier/pebble02.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 85.0,
          unit: '吨',
          quantity: 12000,
          departureAddress: '河北省保定市义安镇',
          createAt: '2022-03-22',
          transportType: '汽运',
          sellerName: '王先生',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        },
        {
          id: 2,
          isCollect: false, // 收藏
          cover: require('../../static/supplier/pebble03.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 84.0,
          unit: '吨',
          quantity: 5000,
          departureAddress: '河南省郑州市金水区',
          createAt: '2022-03-22',
          transportType: '汽运',
          sellerName: '李小姐',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        },
        {
          id: 3,
          isCollect: false, // 收藏
          cover: require('../../static/supplier/pebble04.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 80.0,
          unit: '吨',
          quantity: 40000,
          departureAddress: '河南省郑州市二七区',
          createAt: '2022-03-24',
          transportType: '汽运',
          sellerName: '王小姐',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        },
        {
          id: 4,
          isCollect: false, // 收藏
          cover: require('../../static/supplier/pebble05.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 82.0,
          unit: '吨',
          quantity: 70000,
          departureAddress: '河北省唐山市迁西县',
          createAt: '2022-03-24',
          transportType: '汽运',
          sellerName: '王小姐',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        },
        {
          id: 5,
          isCollect: false, // 收藏
          cover: require('../../static/supplier/pebble06.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 89.0,
          unit: '吨',
          quantity: 100,
          departureAddress: '辽宁省葫芦岛连山区',
          createAt: '2022-03-25',
          transportType: '汽运',
          sellerName: '刘小姐',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        },
        {
          id: 6,
          isCollect: false, // 收藏
          cover: require('../../static/supplier/pebble07.png'),
          goodsCategory: '供应  1-2石子', // 品名
          price: 81.0,
          unit: '吨',
          quantity: 14000,
          departureAddress: '河北省保定市',
          createAt: '2022-03-25',
          transportType: '汽运',
          sellerName: '王小姐',
          sellerMobile: '保密',
          memo: '支持前四后八轻皮  重皮  半挂24小时装车'
        }
      ]
    }
  },
  methods: {
    // 商品详情
    toDetail(item) {
      uni.navigateTo({
        url: '/pages/detail/index?item=' + encodeURIComponent(JSON.stringify(item))
      })
    },
    // 收藏
    onCollect(item) {
      item.isCollect = !item.isCollect
    }
  }
}
</script>

<style lang="scss" scoped>
.supply-list {
  width: 100%;
  padding-bottom: 64rpx;
  background-color: #fdfefe;
  .search {
    padding: 32rpx;
    box-sizing: border-box;
    background-color: #f7faff;
  }
  .item {
    padding: 32rpx 40rpx;
    box-sizing: border-box;
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
    position: relative;
    .icon-heart {
      width: 40rpx;
      height: 40rpx;
      position: absolute;
      top: 32rpx;
      right: 40rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .goods {
      image {
        width: 124rpx;
        height: 124rpx;
        border-radius: 16rpx;
      }
      .info {
        margin-left: 24rpx;
        image {
          width: 24rpx;
          height: 24rpx;
          margin-right: 8rpx;
        }
        text {
          color: #606a78;
          font-size: 24rpx;
        }
        .title {
          color: #2b2a35;
          font-weight: 600;
          font-size: 32rpx;
        }
        .blue {
          color: #3c7dff;
          font-weight: 600;
        }
        .breadth {
          width: 260rpx;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
