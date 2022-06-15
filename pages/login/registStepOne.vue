<template>
	<view class="container">
		<view class="title">欢迎来到币安！</view>
		<view class="text mb10 font12">
			在您注册前，请务必填写您当前的居住地点。
		</view>
		
		<uni-forms ref="form" :rules="rules" :modelValue="formData" label-position="top" :label-width="100">
			<uni-forms-item name="address" label="居住国/地区" required style="position: relative;">
				<uni-easyinput placeholder="请选择" v-model="formData.address" suffixIcon="forward" disabled/>
				<view class="clickDiv" @click="navTo('/pages/login/registArea')"></view>
			</uni-forms-item>
		</uni-forms>
		<view class="text mb15 font12">
			注册流程可能会根据您提供的信息进行调整
		</view>
		<button class="mt10" @click="submit">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					address: '',
				},
				rules: {
					// 对address字段进行必填验证
					address: {
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

	.clickDiv{position: absolute;left:0;bottom: 22px;width: 100%;height: 36px;z-index: 1;}
</style>
