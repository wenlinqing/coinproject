<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<!-- <view class="flex1 flex flex_ac flexcenter font16 bold">修改密码</view> -->
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
	</uni-nav-bar>
	
	<h2 class="uni-pa-10">数字币提现</h2>
	<view class="flex flex_ac uni-pa-10">
		<view class="flex1">
			<view class="uni-mb-3 bold font16">提现名单</view>
			<view class="gray font12">
				启用此功能后，您将只能提现数字币到白名单地址。
			</view>
		</view>
		<view style="width: 80rpx;flex:0 0 auto;">
			<switch color="#FFCC33" style="transform:scale(0.7)"/>
		</view>
	</view>
	<view class="flex flex_ac uni-pa-10">
		<view class="flex1">
			<view class="uni-mb-3 bold font16">快捷提币</view>
			<view class="gray font12">
				开启本功能后，当您向白名单地址进行小额提币时，可以免除安全验证。
			</view>
		</view>
		<view style="width: 80rpx;flex:0 0 auto;">
			<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
		</view>
	</view>
	
	<view class="fixed_bottom uni-pa-10 bgfff">
		<button class="font12">地址管理</button>
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
// .greyBox{background-color: #F5F5F5;border-radius: 5px;margin-bottom: 20px;
// 	input{height:80rpx;}
// }
</style>
