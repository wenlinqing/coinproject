<template>
	<view class="container">
		<view class="title">创建币安账户</view>
		<view class="flex font12 loginTag">
			<view class="item" :class="act==1?'on':''" @click="tagFun(1)">邮箱</view>
			<view class="item" :class="act==2?'on':''" @click="tagFun(2)">手机号码</view>
		</view>
		
		<uni-forms ref="form" :rules="rules" :modelValue="formData" label-position="top" :label-width="150">
			<uni-forms-item name="email" label="邮箱" v-if="act==1">
				<uni-easyinput v-model="formData.email" />
			</uni-forms-item>
			<uni-forms-item name="mobile" label="手机号" v-if="act==2">
				<uni-easyinput v-model="formData.mobile" />
			</uni-forms-item>
			<uni-forms-item name="password" label="密码">
				<uni-easyinput v-model="formData.password" type="password" />
			</uni-forms-item>
			<uni-forms-item name="person" label="推荐人ID（选填）">
				<uni-easyinput v-model="formData.person" />
			</uni-forms-item>
		</uni-forms>
		
		<view class="links font12 mt15">
			<view>
				<label style="margin-right: 5px;"><checkbox value='ff' :checked="checkbox" color="#FBD535" style="transform:scale(0.7)"/>
				我已阅读并同意币安的</label> <text>服务条款</text>
			</view>
		</view>
		
		<button class="mt10" @click="submit">注册</button>
		<view class="links font12 mt15">
			<view>注册过？ <text @click="navTo('/pages/login/login')">登录</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				act: 1,
				checkbox:true,
				formData: {
					email: '',
					mobile: '',
					password: '',
					person:''
				},
				rules: {
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
					mobile: {
						rules: [{
								required: true,
								errorMessage: '请输入手机号',
							}
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
			tagFun(type){
				this.act=type
			},
			submit() {
				this.navTo('/pages/login/registStepThree')
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
	
</style>
