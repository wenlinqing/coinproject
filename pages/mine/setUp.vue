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
	<h2 class="uni-pa-10">设置</h2>
	<view class="bgfff uni-pl-10">
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/notify')">
			<view class="flex1">通知</view>
			<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/language')">
			<view class="flex1">多语言</view>
			<view class="flex flex_ac">
				<view class="font12 gray uni-mr-2">中文简体</view>
				<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
			</view>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1">清理缓存</view>
			<view class="flex flex_ac">
				<view class="font12 gray uni-mr-2">10.07MB</view>
				<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
			</view>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1">服务协议</view>
			<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1">隐私声明</view>
			<uni-icons type="forward" size="18" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1">关于</view>
			<view class="flex flex_ac">
				<view class="font12 gray uni-mr-2">V2.47.2</view>
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
