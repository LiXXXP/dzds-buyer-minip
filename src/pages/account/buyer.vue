<template>
  <view class="buyer">
    <view class="bar">采购商认证通过方可进行采购，请尽快提交认证</view>
    <view class="form">
      <u--form labelPosition="left" :model="model" :rules="rules" ref="form" labelWidth="140rpx">
        <u-form-item label="认证类型" prop="radio" leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u-radio-group v-model="model.radio" placement="row">
            <u-radio name="1" activeColor="#3C7DFF" label="法人"></u-radio>
            <u-radio name="2" activeColor="#3C7DFF" label="经办人"></u-radio>
          </u-radio-group>
        </u-form-item>
        <u-form-item><view style="height: 16rpx; background-color: #f8f8f8"></view></u-form-item>
        <u-form-item prop="fileList">
          <view class="aptitude">
            <view class="title">资质信息</view>
            <view class="desc">证件文字需能清晰辨认，格式jpg、png、jpeg，小于5m；勿遮挡或模糊</view>
            <view class="flex flex-wrap col-center">
              <view class="upload">
                <u-upload
                  :fileList="model.fileList1"
                  name="1"
                  :maxCount="1"
                  width="168"
                  height="100"
                  @afterRead="afterRead"
                >
                  <image src="@/static/account/upload.png" style="width: 336rpx; height: 200rpx"></image>
                </u-upload>
                <view class="label">
                  <text>*</text>
                  <text>营业执照</text>
                </view>
              </view>
              <view class="upload">
                <u-upload
                  :fileList="model.fileList2"
                  name="2"
                  :maxCount="1"
                  width="168"
                  height="100"
                  @afterRead="afterRead"
                >
                  <image src="@/static/account/upload.png" style="width: 336rpx; height: 200rpx"></image>
                </u-upload>
                <view class="label">
                  <text>*</text>
                  <text>开户许可证</text>
                </view>
              </view>
              <view class="upload">
                <u-upload
                  :fileList="model.fileList3"
                  name="3"
                  :maxCount="1"
                  width="168"
                  height="100"
                  @afterRead="afterRead"
                >
                  <image src="@/static/account/upload.png" style="width: 336rpx; height: 200rpx"></image>
                </u-upload>
                <view class="label">
                  <text>*</text>
                  <text>法人身份证头像面</text>
                </view>
              </view>
              <view class="upload">
                <u-upload
                  :fileList="model.fileList4"
                  name="4"
                  :maxCount="1"
                  width="168"
                  height="100"
                  @afterRead="afterRead"
                >
                  <image src="@/static/account/upload.png" style="width: 336rpx; height: 200rpx"></image>
                </u-upload>
                <view class="label">
                  <text>*</text>
                  <text>法人身份证国徽面</text>
                </view>
              </view>
              <view class="upload">
                <u-upload
                  :fileList="model.fileList5"
                  name="5"
                  :maxCount="1"
                  width="168"
                  height="100"
                  @afterRead="afterRead"
                >
                  <image src="@/static/account/upload.png" style="width: 336rpx; height: 200rpx"></image>
                </u-upload>
                <view class="label">
                  <text>*</text>
                  <text>法人手持身份证</text>
                </view>
              </view>
              <view class="upload" v-if="model.radio === '2'">
                <u-upload
                  :fileList="model.fileList6"
                  name="6"
                  :maxCount="1"
                  width="168"
                  height="100"
                  @afterRead="afterRead"
                >
                  <image src="@/static/account/upload.png" style="width: 336rpx; height: 200rpx"></image>
                </u-upload>
                <view class="label">
                  <text>*</text>
                  <text>授权书</text>
                </view>
              </view>
            </view>
          </view>
        </u-form-item>
        <u-form-item><view style="height: 16rpx; background-color: #f8f8f8"></view></u-form-item>
        <u-form-item><view style="color: #1a2234; font-size: 32rpx; font-weight: 500">联系人信息</view></u-form-item>
        <u-form-item label="姓名" prop="buyerName" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.buyerName" border="none" placeholder="请输入姓名"></u--input>
        </u-form-item>
        <u-form-item label="手机号" prop="buyerMobile" leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.buyerMobile" type="number" border="none" placeholder="请输入手机号"></u--input>
        </u-form-item>
        <u-form-item><view style="height: 16rpx; background-color: #f8f8f8"></view></u-form-item>
        <u-form-item><view style="color: #1a2234; font-size: 32rpx; font-weight: 500">公司信息</view></u-form-item>
        <u-form-item label="法人姓名" prop="name" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.name" border="none" placeholder="请输入姓名"></u--input>
        </u-form-item>
        <u-form-item label="公司名称" prop="company" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.company" border="none" placeholder="请填写公司名称"></u--input>
        </u-form-item>
        <u-form-item label="信用代码" prop="code" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.code" border="none" placeholder="请填写信用代码"></u--input>
        </u-form-item>
        <u-form-item label="公司电话" prop="phone" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.phone" type="number" border="none" placeholder="请填写公司电话"></u--input>
        </u-form-item>
        <u-form-item label="公司地址" prop="address" borderBottom leftIcon="*" :leftIconStyle="{ color: '#F5222D' }">
          <u--input v-model="model.address" border="none" placeholder="请填写公司地址"></u--input>
        </u-form-item>
        <view class="button" @click="submit">提交认证</view>
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
        fileList1: [],
        fileList2: [],
        fileList3: [],
        fileList4: [],
        fileList5: [],
        fileList6: [],
        buyerName: '',
        buyerMobile: '',
        name: '',
        company: '',
        code: '',
        phone: '',
        address: ''
      },
      rules: {
        radio: {
          type: 'string',
          message: '请选择认证类型',
          trigger: ['change']
        },
        buyerName: {
          type: 'string',
          required: true,
          message: '请输入联系人',
          trigger: ['blur', 'change']
        },
        buyerMobile: [
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
        ],
        name: {
          type: 'string',
          required: true,
          message: '请输入姓名',
          trigger: ['blur', 'change']
        },
        company: {
          type: 'string',
          required: true,
          message: '请填写公司名称',
          trigger: ['blur', 'change']
        },
        code: {
          type: 'string',
          required: true,
          message: '请填写信用代码',
          trigger: ['blur', 'change']
        },
        phone: [
          {
            type: 'number',
            required: true,
            message: '请输入正确的电话号码',
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
        ],
        address: {
          type: 'string',
          required: true,
          message: '请填写公司地址',
          trigger: ['blur', 'change']
        }
      }
    }
  },
  onLoad() {},
  methods: {
    afterRead(event) {
      this.model[`fileList${event.name}`] = [
        {
          url: event.file.url
        }
      ]
    },
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
.buyer {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bar {
    width: 100%;
    color: #fff;
    height: 88rpx;
    font-size: 28rpx;
    line-height: 88rpx;
    padding-left: 32rpx;
    box-sizing: border-box;
    background: url('@/static/account/bar.png') no-repeat 0 0;
    background-size: 100%;
  }
  .form {
    width: 100%;
    padding: 32rpx;
    box-sizing: border-box;
    ::v-deep .u-radio {
      margin-right: 32rpx;
    }
    .aptitude {
      .title {
        color: #1a2234;
        font-size: 32rpx;
        font-weight: 500;
        margin-bottom: 20rpx;
      }
      .desc {
        color: #b1b6bb;
        font-size: 24rpx;
        margin-bottom: 40rpx;
      }
      .upload {
        width: 336rpx;
        text-align: center;
        margin-right: 14rpx;
        margin-bottom: 40rpx;
        &:nth-child(2n) {
          margin-right: 0;
        }
        .label {
          color: #1a2234;
          font-size: 28rpx;
          margin-top: 20rpx;
          text {
            &:first-child {
              color: #f5222d;
            }
          }
        }
      }
    }
    .button {
      color: #fff;
      width: 686rpx;
      height: 100rpx;
      font-size: 32rpx;
      margin: 32rpx auto;
      text-align: center;
      line-height: 100rpx;
      border-radius: 50rpx;
      background-color: #3c7dff;
    }
  }
}
</style>
