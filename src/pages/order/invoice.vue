<template>
  <view class="invoice">
    <view class="header">
      <view>订单编号<text>2098323435356546</text></view>
      <view>开票金额 <text>50000元</text></view>
    </view>
    <view class="content">
      <u--form labelPosition="left" :model="model" :rules="rules" ref="form" labelWidth="140rpx">
        <u-form-item label="抬头类型" prop="radio" leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u-radio-group v-model="model.radio" placement="row">
            <u-radio name="1" activeColor="#3C7DFF" label="企业抬头"></u-radio>
            <u-radio name="2" activeColor="#3C7DFF" label="个人/非企业单位"></u-radio>
          </u-radio-group>
        </u-form-item>
        <u-form-item label="发票抬头" prop="no" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.no" border="none" placeholder="请填写发票抬头"></u--input>
        </u-form-item>
        <u-form-item label="单位税号" prop="tfn" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.tfn" border="none" placeholder="请填写纳税人识别号"></u--input>
        </u-form-item>
        <u-form-item label="开户银行" prop="bank" borderBottom>
          <u--input v-model="model.bank" border="none" placeholder="请填写开户银行名称"></u--input>
        </u-form-item>
        <u-form-item label="银行账号" prop="account" borderBottom>
          <u--input v-model="model.account" border="none" placeholder="请填写银行账号"></u--input>
        </u-form-item>
        <u-form-item label="单位地址" prop="address" borderBottom>
          <u--input v-model="model.address" border="none" placeholder="请填写单位地址"></u--input>
        </u-form-item>
        <u-form-item label="单位电话" prop="phone">
          <u--input v-model="model.phone" type="number" border="none" placeholder="请填写单位电话"></u--input>
        </u-form-item>
        <view class="button" @click="submit">申请发票</view>
      </u--form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {
        radio: '1',
        no: '',
        tfn: '',
        bank: '',
        account: '',
        address: '',
        phone: ''
      },
      rules: {
        radio: {
          type: 'string',
          required: true,
          message: '请选择认证类型',
          trigger: ['change']
        },
        no: {
          type: 'string',
          required: true,
          message: '请填写发票抬头',
          trigger: ['blur', 'change']
        },
        tfn: {
          type: 'string',
          required: true,
          message: '请填写纳税人识别号',
          trigger: ['blur', 'change']
        },
        bank: {
          type: 'string',
          required: true,
          message: '请填写开户银行名称',
          trigger: ['blur', 'change']
        },
        account: {
          type: 'string',
          required: true,
          message: '请填写银行账号',
          trigger: ['blur', 'change']
        },
        address: {
          type: 'string',
          required: true,
          message: '请填写单位地址',
          trigger: ['blur', 'change']
        },
        phone: [
          {
            type: 'number',
            required: true,
            message: '请输入正确的电话号',
            trigger: ['blur', 'change']
          },
          {
            // 自定义验证函数，见上说明
            validator: (rule, value, callback) => {
              // 上面有说，返回true表示校验通过，返回false表示不通过
              // uni.$u.test.mobile()就是返回true或者false的
              return uni.$u.test.mobile(value)
            },
            message: '电话号码不正确',
            // 触发器可以同时用blur和change
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form
        .validate()
        .then((res) => {
          uni.$u.toast('申请成功')
          uni.switchTab({
            url: '/pages/account/index'
          })
        })
        .catch((errors) => {
          uni.$u.toast('请填写正确的格式')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.invoice {
  width: 100vw;
  height: 100vh;
  font-size: 28rpx;
  background-color: #f7faff;
  .header {
    color: #1a2234;
    padding: 32rpx;
    padding-top: 0;
    margin-bottom: 16rpx;
    box-sizing: border-box;
    background-color: #fff;
    view {
      margin-top: 32rpx;
      text {
        padding-left: 30rpx;
      }
    }
  }
  .content {
    padding: 32rpx;
    background-color: #fff;
    ::v-deep .u-radio {
      margin-right: 32rpx;
    }
    .button {
      color: #fff;
      width: 686rpx;
      height: 100rpx;
      font-size: 32rpx;
      text-align: center;
      line-height: 100rpx;
      border-radius: 50rpx;
      background-color: #3c7dff;
      position: fixed;
      bottom: 64rpx;
    }
  }
}
</style>
