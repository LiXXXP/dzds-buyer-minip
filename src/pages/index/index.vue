<template>
  <view>
    <view class="header">
      <u-navbar title="鲸材荟" :safeAreaInsetTop="true" :bgColor="'#f7faff'" :placeholder="true">
        <view class="location flex" slot="left">
          <image src="@/static/home/location-blue.png"></image>
          <text>北京市</text>
        </view>
      </u-navbar>
    </view>
    <view class="home">
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
      <view class="banner" @click="showPhone = true">
        <image src="@/static/banner/banner.png"></image>
      </view>
      <view class="stone-list flex flex-wrap row-left">
        <view class="item" v-for="item in stoneList" :key="item.name" @click="toCategory">
          <image :src="item.url"></image>
          <text>{{ item.name }}</text>
        </view>
      </view>
      <view class="supply-tab">
        <text :class="['goods', { active: isActive === 1 }]" @click="isActive = 1">供应大厅</text>
        <text :class="['supplier', { active: isActive === 2 }]" @click="isActive = 2">推荐供应商</text>
      </view>
      <!-- 供应大厅 -->
      <view class="supply-list" v-if="isActive === 1">
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
      <view v-if="isActive === 1 && goodList.length < 1" class="none">
        <text>暂无数据</text>
      </view>
      <!-- 推荐供应商 -->
      <view class="supply-list" v-if="isActive === 2">
        <view class="item flex row-between" v-for="item in supplierList" :key="item.id" @click="toSupplierDetail(item)">
          <view class="goods flex">
            <image :src="item.url"></image>
            <view class="info flex flex-column row-between">
              <text class="title">{{ item.name }}</text>
              <view class="flex col-center">
                <text>优势石种：</text>
                <text class="breadth">{{ item.kind }}</text>
              </view>
              <view class="flex col-center">
                <text>主营材料：</text>
                <text class="">{{ item.materials }}</text>
              </view>
              <view class="flex col-center">
                <text>地址：</text>
                <text>{{ item.address }}</text>
              </view>
            </view>
          </view>
          <view class="icon-heart" @click.stop="onCollect(item)">
            <image v-if="!item.isCollect" src="../../static/home/collect.png"></image>
            <image v-else src="../../static/home/collect-select.png"></image>
          </view>
        </view>
      </view>
      <!-- 客服 -->
      <view class="service" @click="showPhone = true">
        <image src="@/static/home/service.png"></image>
      </view>
      <!-- 客服电话 -->
      <u-overlay :show="showPhone" :z-index="999">
        <view class="overlay-warp" @tap.stop>
          <view class="phone">
            <text>工作时间：9:00-17:30</text>
            <text>400-880-9527</text>
          </view>
          <view class="cancel" @click="showPhone = false">取消</view>
        </view>
      </u-overlay>
    </view>
  </view>
</template>

<script>
import GoodsApi from '@/api/goods.js'
import { date } from '@/common/util/util.js'
export default {
  data() {
    return {
      keyword: '',
      isActive: 1,
      showPhone: false, // 显示客服电话
      goodList: [],
      stoneList: [
        {
          url: require('@/static/category/stone01.png'),
          name: '石子'
        },
        {
          url: require('@/static/category/stone02.png'),
          name: '天然石'
        },
        {
          url: require('@/static/category/stone03.png'),
          name: '块石'
        },
        {
          url: require('@/static/category/stone04.png'),
          name: '料石'
        },
        {
          url: require('@/static/category/stone05.png'),
          name: '天然砂'
        },
        {
          url: require('@/static/category/stone06.png'),
          name: '机制砂'
        },
        {
          url: require('@/static/category/stone07.png'),
          name: '规格砂'
        },
        {
          url: require('@/static/category/stone08.png'),
          name: '更多'
        }
      ],
      supplierList: [
        {
          id: 0,
          isCollect: false, // 收藏
          url: require('../../static/supplier/supplier01.png'),
          name: '富美石材', // 品名
          kind: '意大利木纹｜威尼斯棕', // 石种
          materials: '大理石', // 彩礼
          address: '河南省郑州市二七区' // 地址
        },
        {
          id: 1,
          isCollect: false, // 收藏
          url: require('../../static/supplier/supplier02.png'),
          name: '胜辉砂石', // 品名
          kind: '级配碎石', // 石种
          materials: '级配碎石、1-2石子', // 彩礼
          address: '山东省菏泽市河东区' // 地址
        },
        {
          id: 2,
          isCollect: false, // 收藏
          url: require('../../static/supplier/supplier03.png'),
          name: '锦翔石业有限公司', // 品名
          kind: '云朵拉灰｜金叶米黄', // 石种
          materials: '大理石', // 彩礼
          address: '北京市怀柔区' // 地址
        },
        {
          id: 3,
          isCollect: false, // 收藏
          url: require('../../static/supplier/supplier04.png'),
          name: '顺昌石业', // 品名
          kind: '金钻玛', // 石种
          materials: '大理石', // 彩礼
          address: '河南省郑州市金水区' // 地址
        }
      ]
    }
  },
  onShow() {
    this.getGoods()
  },
  methods: {
    // 供应大厅求购信息列表
    async getGoods() {
      const _this = this
      GoodsApi.goods({
        page: {
          returnCount: true
        }
      })
        .then((res) => {
          if (res.status.success) {
            _this.goodList = res.body.goodsList
            for (const item of _this.goodList) {
              this.$set(item, 'isCollect', false)
              item.createAt = date('Y-m-d', item.createAt)
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 商品详情
    toDetail(item) {
      uni.navigateTo({
        url: '/pages/detail/index?item=' + encodeURIComponent(JSON.stringify(item))
      })
    },
    // 跳转供应商详情页
    toSupplierDetail(item) {
      if (item.name === '富美石材') {
        uni.navigateTo({
          url: '/pages/supplier/index?item=' + encodeURIComponent(JSON.stringify(item))
        })
      }
    },
    // 收藏
    onCollect(item) {
      item.isCollect = !item.isCollect
    },
    // 跳转分类
    toCategory() {
      uni.switchTab({
        url: '/pages/category/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .location {
    image {
      width: 40rpx;
      height: 40rpx;
    }
  }
}
.home {
  width: 100vw;
  height: 100vh;
  background-color: #f7faff;
  .search {
    padding: 40rpx;
    padding-bottom: 0;
  }
  .banner {
    height: 240rpx;
    padding: 0 40rpx;
    margin: 36rpx auto;
    image {
      width: 100%;
      height: 100%;
      box-shadow: 0px 8px 20px 0px rgba(60, 125, 255, 0.3);
    }
  }
  .stone-list {
    padding: 0 40rpx;
    .item {
      text-align: center;
      margin-right: 62rpx;
      margin-bottom: 32rpx;
      image {
        width: 120rpx;
        height: 120rpx;
        border-radius: 16rpx;
        margin-bottom: 16rpx;
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  .supply-tab {
    color: #666;
    padding: 32rpx;
    margin-bottom: 32rpx;
    box-sizing: border-box;
    text {
      position: relative;
      &.goods {
        &.active {
          color: #131313;
          font-size: 36rpx;
          font-weight: 600;
          &::after {
            content: '';
            width: 150rpx;
            height: 12rpx;
            display: block;
            background: linear-gradient(135deg, #6fb4ff 0%, #3c7dff 100%);
            border-radius: 10px;
            position: absolute;
            left: -4rpx;
            top: 40rpx;
          }
        }
      }
      &.supplier {
        margin-left: 40rpx;
        &.active {
          color: #131313;
          font-size: 36rpx;
          font-weight: 600;
          &::after {
            content: '';
            width: 200rpx;
            height: 12rpx;
            display: block;
            background: linear-gradient(135deg, #6fb4ff 0%, #3c7dff 100%);
            border-radius: 10px;
            position: absolute;
            left: -8rpx;
            top: 40rpx;
          }
        }
      }
    }
  }
  .supply-list {
    width: 100%;
    background-color: #fdfefe;
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
  .none {
    color: #666;
    text-align: center;
  }
  .service {
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
    box-shadow: 0px 8px 20px 0px rgba(60, 125, 255, 0.3);
    position: fixed;
    right: 32rpx;
    bottom: 32rpx;
    image {
      width: 100%;
      height: 100%;
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
