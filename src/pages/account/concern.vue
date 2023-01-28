<template>
  <view class="concern">
    <view class="nav flex row-around">
    	<view :class="{active: active === 1}" @click="active = 1">
    		关注的产品
    	</view>
			<view :class="{active: active === 2}" @click="active = 2">
				关注的店铺
			</view>
    </view>
		<view class="cont">
			<image src="@/static/empty/empty.png"></image>
			<text>暂无数据</text>
		</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
			active: 1
		}
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.concern {
  width: 100vw;
  height: 100vh;
  padding: 32rpx 0;
  box-sizing: border-box;
  background-color: #f7faff;
	.nav {
		color: #1A2234;
		font-size: 28rpx;
		padding-bottom: 32rpx;
		border-bottom: 2rpx solid rgba(0,0,0,.1);
		view {
			position: relative;
			&.active {
				color: #3C7DFF;
				font-size: 32rpx;
				font-weight: 600;
				&::after {
					content: '';
					display: block;
					width: 48rpx;
					height: 6rpx;
					border-radius: 3rpx;
					background-color: #3C7DFF;
					position: absolute;
					left: 50%;
					bottom: -32rpx;
					margin-left: -24rpx;
				}
			}
		}
	}
	.cont {
		color: #B1B6BB;
		font-size: 28rpx;
		text-align: center;
		margin-top: 268rpx;
		image {
			width: 480rpx;
			height: 360rpx;
			margin: 0 auto;
		}
	}
}
</style>
