<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex1 flex flex_ac flexcenter font16 bold">通知</view>
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<view slot="right" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/us_edit.png" mode="widthFix" style="width: 32rpx;"></image>
		</view>
	</uni-nav-bar>
	<h2 class="uni-pa-10">通知</h2>
	<view class="uni-pa-10">
		<view class="flex">
			<view class="uni-pt-5">
				<image src="@/static/images/us_msg.png" mode="widthFix" style="width: 36rpx;"></image>
			</view>
			<view class="uni-ml-5">
				<view class="bold gray flex flex_ac notifyTitle">登录IP变更</view>
				<view class="gray font12">系统检测到您的账号在从未使用过的IP地址登录。</view>
				<view class="font12 uni-mt-10">2022-06-17 21:44</view>
			</view>
		</view>
	</view>
	<view class="uni-pa-10" v-for="item,index in 15" :key="index">
		<view class="flex">
			<view class="uni-pt-5">
				<image src="@/static/images/us_msg.png" mode="widthFix" style="width: 36rpx;"></image>
			</view>
			<view class="uni-ml-5">
				<view class="bold flex flex_ac notifyTitle" :class="index%2 == 0?'':'gray'"><text v-if="index%2 == 0"></text> 登录IP变更</view>
				<view class="gray font12">系统检测到您的账号在从未使用过的IP地址登录。</view>
				<view class="font12 uni-mt-10">2022-06-17 21:44</view>
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
.notifyTitle text {
	width:10px;height:10px;background-color: #FBD535;border-radius: 50%;margin-right: 5px;
}
</style>
