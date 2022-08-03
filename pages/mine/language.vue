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
	<h2 class="uni-pa-10">语言</h2>
	<view class="bgfff uni-pl-10">
		<view class="navItems font16 flex flex_ac uni-pr-10">中文简体</view>
		<view class="navItems font16 flex flex_ac uni-pr-10">日本語</view>
		<view class="navItems font16 flex flex_ac uni-pr-10">한국인</view>
		<view class="navItems font16 flex flex_ac uni-pr-10">Italiano</view>
		<view class="navItems font16 flex flex_ac uni-pr-10">ไทย</view>
		
		
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
