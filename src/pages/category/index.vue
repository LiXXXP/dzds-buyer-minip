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
    <view class="category">
      <view class="supply-tab">
        <text :class="['goods', { active: isActive === 1 }]" @click="isActive = 1">商品分类</text>
        <text :class="['supplier', { active: isActive === 2 }]" @click="isActive = 2">推荐供应商</text>
      </view>
      <view class="classes flex" v-if="isActive === 1">
        <view class="classes-list flex flex-column">
          <text
            v-for="(item, i) in classesList"
            :key="item.name"
            :class="{ active: currentIndex === i }"
            @click="currentIndex = i"
            >{{ item.name }}</text
          >
        </view>
        <view class="classes-cont">
          <view class="banner">
            <image src="@/static/pebble/banner.png"></image>
            <text>{{ classesList[currentIndex].name }}</text>
          </view>
          <view class="name-list">
            <view class="title">品名</view>
            <view class="list flex flex-wrap col-center">
              <view class="item" v-for="item in classesList[currentIndex].list" :key="item.name" @click="toList(item)">
                <image :src="item.url"></image>
                <text>{{ item.name }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="classes flex" v-if="isActive === 2">
        <view class="classes-list flex flex-column">
          <text
            v-for="(item, i) in supplierList"
            :key="item.name"
            :class="{ active: supplierIndex === i }"
            @click="supplierIndex = i"
            >{{ item.name }}</text
          >
        </view>
        <view class="classes-cont">
          <u-search
            :placeholder="supplierList[supplierIndex].name"
            :show-action="false"
            v-model="keyword"
            bgColor="#F7F8FA"
            borderColor="#DDDFE5"
            shape="square"
          ></u-search>
          <view class="supplier-list">
            <view
              class="list"
              v-for="item in supplierList[supplierIndex].list"
              :key="item.name"
              @click="toDetail(item)"
            >
              <image :src="item.url"></image>
              <view class="flex row-between col-center">
                <text class="name">{{ item.name }}</text>
                <view @click.stop="onCollect(item)">
                  <image v-if="!item.isCollect" src="@/static/home/collect.png" class="collect"></image>
                  <image v-else src="@/static/home/collect-select.png" class="collect"></image>
                </view>
              </view>
              <text>{{ item.kind }}</text>
              <text>{{ item.materials }}</text>
              <text>{{ item.address }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isActive: 1,
      currentIndex: 0,
      supplierIndex: 0,
      classesList: [
        {
          name: '石子',
          list: [
            {
              url: require('@/static/pebble/pebble01.png'),
              name: '1-2石子'
            },
            {
              url: require('@/static/pebble/pebble02.png'),
              name: '1-3石子'
            },
            {
              url: require('@/static/pebble/pebble03.png'),
              name: '石粉'
            },
            {
              url: require('@/static/pebble/pebble04.png'),
              name: '5-30石子'
            },
            {
              url: require('@/static/pebble/pebble05.png'),
              name: '0-5瓜子片'
            },
            {
              url: require('@/static/pebble/pebble06.png'),
              name: '1-5石子'
            },
            {
              url: require('@/static/pebble/pebble07.png'),
              name: '级配碎石'
            }
          ]
        },
        {
          name: '天然石',
          list: [
            {
              url: require('@/static/pebble/pebble07.png'),
              name: '天然石'
            }
          ]
        },
        {
          name: '机制砂',
          list: [
            {
              url: require('@/static/pebble/pebble03.png'),
              name: '机制砂'
            }
          ]
        },
        {
          name: '规格砂',
          list: [
            {
              url: require('@/static/pebble/pebble03.png'),
              name: '规格砂'
            }
          ]
        },
        {
          name: '块石',
          list: [
            {
              url: require('@/static/pebble/pebble04.png'),
              name: '块石'
            }
          ]
        },
        {
          name: '料石',
          list: [
            {
              url: require('@/static/pebble/pebble05.png'),
              name: '料石'
            }
          ]
        },
        {
          name: '天然砂',
          list: [
            {
              url: require('@/static/pebble/pebble03.png'),
              name: '天然砂'
            }
          ]
        },
        {
          name: '荒料',
          list: [
            {
              url: require('@/static/pebble/pebble07.png'),
              name: '荒料'
            }
          ]
        },
        {
          name: '大板',
          list: [
            {
              url: require('@/static/supplier/pebble07.png'),
              name: '大板'
            }
          ]
        },
        {
          name: '条板',
          list: [
            {
              url: require('@/static/pebble/pebble02.png'),
              name: '条板'
            }
          ]
        }
      ],
      supplierList: [
        {
          name: '材料商',
          list: [
            {
              url: require('@/static/supplier/supplier05.png'),
              name: '富美石材',
              kind: '优势石种：意大利木纹｜威尼斯棕',
              materials: '主营材料：大理石',
              address: '地址：河南省郑州市二七区',
              isCollect: false
            },
            {
              url: require('@/static/supplier/supplier06.png'),
              name: '胜辉砂石',
              kind: '优势石种：级配碎石',
              materials: '主营材料：级配碎石、1-2石子',
              address: '地址：山东省菏泽市河东区',
              isCollect: false
            },
            {
              url: require('@/static/supplier/supplier07.png'),
              name: '锦翔石业有限公司',
              kind: '优势石种：云朵拉灰｜金叶米黄',
              materials: '主营材料：大理石',
              address: '地址：北京市怀柔区',
              isCollect: false
            }
          ]
        },
        {
          name: '加工厂',
          list: [
            {
              url: require('@/static/supplier/supplier06.png'),
              name: '顺昌石业加工厂',
              kind: '优势石种：金钻玛',
              materials: '主营材料：大理石',
              address: '地址：河南省郑州市金水区',
              isCollect: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 收藏
    onCollect(item) {
      item.isCollect = !item.isCollect
    },
    // 跳转详情页
    toDetail(item) {
      if (item.name === '富美石材') {
        uni.navigateTo({
          url: '/pages/supplier/index?item=' + encodeURIComponent(JSON.stringify(item))
        })
      }
    },
    // 商品列表
    toList(item) {
      if (item.name === '1-2石子') {
        uni.navigateTo({
          url: '/pages/goods/index'
        })
      }
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
.category {
  width: 100vw;
  min-height: 100%;
  background-color: #f7faff;
  .supply-tab {
    color: #666;
    width: 100%;
    padding: 32rpx;
    font-size: 28rpx;
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
            width: 160rpx;
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
  .classes {
    margin-top: 32rpx;
    .classes-list {
      width: 210rpx;
      min-height: 100%;
      border-radius: 0 16rpx 0 0;
      background-color: #eff4fd;
      text {
        color: #666;
        padding: 28rpx 0;
        font-size: 24rpx;
        text-align: center;
        &.active {
          color: #3c7dff;
          font-size: 32rpx;
          font-weight: 600;
          background-color: #fff;
        }
      }
    }
    .classes-cont {
      width: 100%;
      min-height: 100vh;
      padding: 32rpx;
      box-sizing: border-box;
      .banner {
        width: 100%;
        height: 240rpx;
        position: relative;
        &::after {
          width: 100%;
          height: 80rpx;
          content: '';
          display: block;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
          border-radius: 0 0 16rpx 16rpx;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        image {
          width: 100%;
          height: 100%;
        }
        text {
          z-index: 99;
          color: #fff;
          font-size: 36rpx;
          font-weight: 600;
          position: absolute;
          bottom: 16rpx;
          left: 32rpx;
        }
      }
      .name-list {
        .title {
          color: #2b2a35;
          font-size: 32rpx;
          font-weight: 600;
          margin: 32rpx 0;
        }
        .list {
          .item {
            width: 120rpx;
            text-align: center;
            margin-right: 58rpx;
            margin-bottom: 32rpx;
            &:nth-child(3n) {
              margin-right: 0;
            }
            image {
              width: 120rpx;
              height: 120rpx;
              margin-bottom: 12rpx;
            }
            text {
              color: #606a78;
              font-size: 24rpx;
              display: inline-block;
            }
          }
        }
      }
      .supplier-list {
        margin-top: 32rpx;
        .list {
          width: 100%;
          padding: 32rpx;
          box-sizing: border-box;
          background-color: #fff;
          box-shadow: inset 0px -2px 0px 0px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          margin-bottom: 26rpx;
          image {
            width: 100%;
            height: 200rpx;
            margin-bottom: 24rpx;
          }
          .collect {
            width: 40rpx;
            height: 40rpx;
          }
          text {
            color: #2b2a35;
            display: block;
            font-size: 24rpx;
            margin-bottom: 16rpx;
            &.name {
              color: #2b2a35;
              font-size: 32rpx;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
