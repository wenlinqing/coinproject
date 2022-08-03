<template>
<view class="container">
	<view class="title">邮箱验证</view>
	<view class="text mb10 font12">
		请输入您在邮箱m8526678942@163.com 收到的6位验证码，验证码30分钟有效
	</view>
	
	<uni-forms ref="form" :rules="rules" :modelValue="formData" label-position="top" :label-width="100">
		<uni-forms-item name="code" label="邮箱验证码" style="position: relative;">
			<uni-easyinput placeholder="请输入验证码" v-model="formData.code"/>
			<view class="clickDiv font12 flex flexcenter flex_ac" >验证码已发送 
			<image src="@/static/images/notice.png" mode="widthFix"></image></view>
		</uni-forms-item>
	</uni-forms>

	<button class="mt10" @click="submit">确认</button>
	
	<view class="links font12 mt15">
		<view><text >未收到验证码？</text></view>
	</view>
	
	<view class="modelBox" v-if="model">
		<view class="cont bgfff">
			<image src="@/static/images/msg.png" mode="widthFix"></image>
			<view class="mt10 mb10 font16 center">未收到短信验证码？</view>
			<view class="mb15 font12">发送短信成功。若仍未收到验证码，可尝试以下操作：</view>
			<view class="font12">1.尝试语音验证</view>
			<view class="font12">2.检查绑定的手机号是否欠费</view>
			<view class="font12">3.检查是否位于短信垃圾箱中</view>
			<view class="font12">4.请确认您的手机号为 65084596</view>
			<view class="font12">5.可能存在发送延迟，过10分钟后再重试</view>
			<view class="font12">6.若此电话号已注册过，我们就不会再向您发送验证码</view>
			<button class="mt25" @click="model=false">已知晓</button>
			<button class="mt10" style="background: #E4E6E9;">试试语音验证码</button>
		</view>
	</view>
	
</view>
</template>

<script>
	export default {
		data() {
			return {
				model:true,
				formData: {
					code: '',
				},
				rules: {
					// 对code字段进行必填验证
					code: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},
				}
			}
		},
		methods: {
			submit() {
				this.navTo('/pages/login/registStepTwo')
				return
				this.$refs.form.validate().then(res=>{
					console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.text{color: #707A8A;}
		
	.clickDiv{position: absolute;right:0;bottom: 22px;height: 36px;z-index: 1;color: #707A8A;
		image{width: 12px;margin:0 7px;}
	}
	.modelBox{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 99;background: rgba(0,0,0,.7);
		.cont{border-radius: 10px;position: absolute;width: 80%;left:10%;top:50%;transform: translateY(-50%); z-index: 111;padding:20px;
			image{display: block;margin: 0 auto;width: 45px;}
		}
	}
</style>
