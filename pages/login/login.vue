<template>
	<view class="container">
		<view class="title">币安账户登录</view>
		<!-- <view class="flex font12 loginTag">
			<view class="item" :class="act==1?'on':''">邮箱</view>
			<view class="item" :class="act==2?'on':''">手机号码</view>
		</view> -->
		
		<uni-forms ref="form" :rules="rules" :modelValue="formData" label-position="top">
			<uni-forms-item name="username" label="用户名">
				<uni-easyinput v-model="formData.username" />
			</uni-forms-item>
			<uni-forms-item name="password" label="密码">
				<uni-easyinput v-model="formData.password" type="password" />
			</uni-forms-item>
			
			<button class="mt10" @click="submit">登录</button>
		</uni-forms>
		<DividingLine></DividingLine>
		
		<button class="mt10" style="background:#000;color:#fff">
			<image class="loginIcon" src="@/static/images/icon1.png" mode="aspectFit"></image>通过Apple 继续
		</button>
		<button class="mt10 bgfff">
			<image class="loginIcon" src="@/static/images/icon2.png" mode="aspectFit"></image>通过Google 继续
		</button>
		
		<view class="links font12 mt15">
			<view >忘记密码？</view>
			<!-- <view @click="navTo('/pages/login/resetPwd')">忘记密码？</view> -->
			<view @click="navTo('/pages/login/regist')">立即注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				act: 1,
				formData: {
					username: 'wlq',
					password: '123456',
				},
				rules: {
					// 对email字段进行必填验证
					username: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名',
							},
							// {
							// format: 'email',
							// errorMessage: '请输入正确的邮箱地址',
							// },
						]
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
					uni.showLoading({mask:true})
					this.$request({
						url: '/login',
						data:this.formData,
						method:'POST',
					}).then(ress=>{
						// this.navTo('/pages/login/registStepThree')
						uni.setStorageSync('token',ress.data.token)
						uni.hideLoading()
						uni.reLaunch({
							url:'/pages/index/index'
						})
					}).catch(error=>{
						this.Toast(error.msg);
						uni.hideLoading()
					})
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.links view{color: #815709;margin-top: 15px;}
</style>
