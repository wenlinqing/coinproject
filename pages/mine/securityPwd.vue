<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex1 flex flex_ac flexcenter font16 bold">修改密码</view>
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
	</uni-nav-bar>
	<view class="bgfff uni-pa-10">
		<view class="uni-mb-10 font12" style="color: #A9223D;">*为了您的资产安全，登录密码修改后24h以内不允许提现。</view>
		
		<view class="uni-my-5 gray font12">旧密码</view>
		<view class="greyBox">
			<input class="uni-pl-5 font14" type="password" placeholder="请输入旧密码" />
		</view>
		<view class="uni-my-5 gray font12">新密码</view>
		<view class="greyBox">
			<input class="uni-pl-5 font14" type="password" placeholder="请输入新密码" />
		</view>
		<view class="uni-my-5 gray font12">确认新密码</view>
		<view class="greyBox">
			<input class="uni-pl-5 font14" type="password" placeholder="请确认新密码" />
		</view>
	</view>
	
	<!-- <view style="height: 300rpx;"></view> -->
	<view class="fixed_bottom uni-pa-10 bgfff">
		<button class="font12">提交</button>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
.greyBox{background-color: #F5F5F5;border-radius: 5px;margin-bottom: 20px;
	input{height:80rpx;}
}
</style>
