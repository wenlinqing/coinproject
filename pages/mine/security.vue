<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<!-- <view class="flex1 flex flex_ac flexcenter font16 bold">通知</view> -->
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<!-- <view slot="right" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/us_edit.png" mode="widthFix" style="width: 32rpx;"></image>
		</view> -->
	</uni-nav-bar>
	<h2 class="uni-pa-10">安全</h2>
	<view class="bgfff uni-pl-10">
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/securityPwd')">
			<view class="flex1">修改密码</view>
			<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/securityDigit')">
			<view class="flex1">数字币提现设置</view>
			<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1">隐私声明</view>
			<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1">双重安全验证</view>
			<view class="flex flex_ac">
				<view class="font12 gray uni-mr-2">邮箱</view>
				<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
			</view>
		</view>
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
.navItems{height: 100rpx;}

</style>
