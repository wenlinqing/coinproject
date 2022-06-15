<template>
	<view class="container">
		<view class="registImg center">
			<image src="@/static/images/regist_img.png" mode="widthFix"></image>
		</view>
		<view class="title mb30">欢迎来到币安！</view>
		<!-- <view class="flex font12 loginTag">
			<view class="item" :class="act==1?'on':''">邮箱</view>
			<view class="item" :class="act==2?'on':''">手机号码</view>
		</view> -->
		
		<!-- <uni-forms ref="form" :rules="rules" :modelValue="formData" label-position="top">
			<uni-forms-item name="email" label="邮箱">
				<uni-easyinput v-model="formData.email" />
			</uni-forms-item>
			<uni-forms-item name="password" label="密码">
				<uni-easyinput v-model="formData.password" type="password" />
			</uni-forms-item>
			
			
		</uni-forms> -->
		<button class="mt10" @click="navTo('/pages/login/registStepOne')" style="background: #EAECEF;">使用手机或邮箱注册</button>
		<DividingLine></DividingLine>
		<button class="mt10" style="background:#000;color:#fff">
			<image class="loginIcon" src="@/static/images/icon1.png" mode="aspectFit"></image>通过Apple 继续
		</button>
		<button class="mt10 bgfff">
			<image class="loginIcon" src="@/static/images/icon2.png" mode="aspectFit"></image>通过Google 继续
		</button>
		
		<view class="links font12 mt15">
			<view>注册过？ <text @click="navTo('/pages/login/login')">登录</text></view>
		</view>
		<view class="links font12 mt30 center">
			<view>创建账户即表示您同意我们的<text>条款和条件</text>和<text>数据保护指南</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				act: 1,
				formData: {
					email: '',
					password: '',
				},
				rules: {
					// 对email字段进行必填验证
					email: {
						rules: [{
								required: true,
								errorMessage: '请输入邮箱',
							},
							{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址',
						}]
					},
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							}
						]
					},
				}
			}
		},
		methods: {
			submit() {
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
	.registImg{padding: 0 0 20px;
		image{width: 170px;}
	}

</style>
