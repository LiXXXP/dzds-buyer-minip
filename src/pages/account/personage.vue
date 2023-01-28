<template>
  <view class="personage">
    <u--form
		labelPosition="left"
		:model="model"
		:rules="rules"
		ref="form"
		labelWidth="140rpx"
		:labelStyle="{
			'font-weight': '600'
		}">
      <u-form-item
        label="姓名"
        prop="publish.buyerName"
        borderBottom
        leftIcon="*"
        :leftIconStyle="{ color: '#F5222D' }"
      >
        <u--input v-model="model.publish.buyerName" border="none" placeholder="请输入姓名"></u--input>
      </u-form-item>
      <u-form-item
        label="身份证号"
        prop="publish.buyerId"
        borderBottom
        leftIcon="*"
        :leftIconStyle="{ color: '#F5222D' }"
      >
        <u--input v-model="model.publish.buyerId" border="none" placeholder="请填写身份证号"></u--input>
      </u-form-item>
      <u-form-item
        label="手机号"
        prop="publish.buyerMobile"
        borderBottom
        leftIcon="*"
        :leftIconStyle="{ color: '#F5222D' }"
      >
        <u--input v-model="model.publish.buyerMobile" type="number" border="none" placeholder="请输入手机号"></u--input>
      </u-form-item>
      <view class="button" @click="submit">提交认证</view>
    </u--form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {
        publish: {
          buyerName: '', // 联系人
          buyerId: '', // 身份证
          buyerMobile: '' // 手机号
        }
      },
      rules: {
        'publish.buyerName': {
          type: 'string',
          required: true,
          message: '请输入联系人',
          trigger: ['blur', 'change']
        },
        'publish.buyerId': {
          type: 'string',
          required: true,
          message: '请输入身份证号',
          trigger: ['blur', 'change']
        },
        'publish.buyerMobile': [
          {
            type: 'number',
            required: true,
            message: '请输入正确的手机号',
            trigger: ['blur', 'change']
          },
          {
            // 自定义验证函数，见上说明
            validator: (rule, value, callback) => {
              // 上面有说，返回true表示校验通过，返回false表示不通过
              // uni.$u.test.mobile()就是返回true或者false的
              return uni.$u.test.mobile(value)
            },
            message: '手机号码不正确',
            // 触发器可以同时用blur和change
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  onLoad() {},
  methods: {
    submit() {
      this.$refs.form
        .validate()
        .then((res) => {
          uni.$u.toast('提交成功')
          uni.switchTab({
            url: '/pages/account/index'
          })
        })
        .catch((errors) => {
          uni.$u.toast('请填写正确的认证格式')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.personage {
  width: 100vw;
  height: 100vh;
  padding: 32rpx;
  box-sizing: border-box;
  background-color: #f7faff;
  .button {
    color: #fff;
    width: 686rpx;
    height: 100rpx;
    font-size: 32rpx;
    margin-top: 32rpx;
    text-align: center;
    line-height: 100rpx;
    border-radius: 50rpx;
    background-color: #3c7dff;
    position: fixed;
    bottom: 64rpx;
    left: 50%;
    margin-left: -343rpx;
  }
}
</style>
